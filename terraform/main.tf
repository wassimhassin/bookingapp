resource "aws_eip" "booking_app_eip" {
  vpc = true
}

resource "aws_instance" "booking_app" {
  ami           = var.ami_id
  instance_type = var.instance_type
  key_name      = var.key_name
  subnet_id     = aws_subnet.main_subnet_1.id
  vpc_security_group_ids = [aws_security_group.web_sg.id]
  associate_public_ip_address = false

  # Root volume size
  root_block_device {
    volume_size = 30
    volume_type = "gp2"  # General Purpose SSD, default for most use cases
  }


  user_data = <<-EOF
    #!/bin/bash

    # Load environment variables from .env file
    #if  [ -f /home/ec2-user/.env ]; then
    #    export $(cat /home/ec2-user/.env | xargs)
    #fi

    sudo yum update -y

    # Create MongoDB repository
    echo "[mongodb-org-7.0]
    name=MongoDB Repository
    baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/7.0/x86_64/
    gpgcheck=1
    enabled=1
    gpgkey=https://pgp.mongodb.com/server-7.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo

    # Update package index
    sudo yum update -y

    # Install MongoDB
    sudo yum install -y mongodb-org

    # Start MongoDB if not already running
    sudo systemctl is-active --quiet mongod || (sudo systemctl start mongod && echo 'MongoDB started successfully' || echo 'Failed to start MongoDB')

    sleep 10

    # Enable MongoDB to start on boot
    sudo systemctl enable mongod && echo 'MongoDB enabled successfully' || echo 'Failed to enable MongoDB'

    # Check MongoDB status
    sudo systemctl status mongod

    # Install Docker if not installed
    if ! command -v docker &> /dev/null; then 
        sudo amazon-linux-extras install docker -y
    fi

    # Start Docker service if not active
    if ! sudo systemctl is-active --quiet docker; then 
        sudo service docker start
    fi

    # Create docker group if it doesn't exist
    if ! getent group docker; then 
        sudo groupadd docker
    fi

    # Add ec2-user to the docker group if not already a member
    if ! id -nG ec2-user | grep -qw docker; then 
        sudo usermod -a -G docker ec2-user
    fi

    # Start and enable Docker
    sudo systemctl start docker
    sudo systemctl enable docker

    sleep 10

    # Check if a container with the name 'booking-app' exists and remove it
    if [ $(docker ps -aq -f name=booking-app) ]; then
        echo "Removing existing container 'booking-app'..."
        docker rm -f booking-app
    fi

    # Docker Hub login
    echo "${DOCKER_PASSWORD}" | docker login --username "${DOCKER_USERNAME}" --password-stdin
    
    # Pull the latest image from Docker Hub
    echo "Attempting to pull Docker image..."
    docker pull wassimhassin/booking:latest || { echo "Docker pull failed"; exit 1; }

    # Run the new container
    echo "Running the new container..."
    docker run -d -p 8000:8000 --name booking-app wassimhassin/booking:latest || { echo "Docker run failed"; exit 1; }

    # Check the logs of the newly started container
    echo "Checking logs of the 'booking-app' container..."
    docker logs booking-app

  EOF

    connection {
      type        = "ssh"
      user        = "ec2-user"
      private_key = file("~/.ssh/key-pair")
      host        = aws_eip.booking_app_eip.public_ip
    }

  tags = {
    Name = "Booking application"
  }
}

resource "aws_eip_association" "booking_app_eip_assoc" {
  instance_id   = aws_instance.booking_app.id
  allocation_id = aws_eip.booking_app_eip.id
}


resource "aws_security_group" "web_sg" {
  name_prefix = "web_sg"
  vpc_id      = aws_vpc.main_vpc.id

  ingress {
    from_port   = 22
    to_port     = 22
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 27017
    to_port     = 27017
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

  ingress {
    from_port   = 8000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
 ingress {
    from_port   = 3000
    to_port     = 3000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }

   ingress {
    from_port   = 3000
    to_port     = 8000
    protocol    = "tcp"
    cidr_blocks = ["0.0.0.0/0"]
  }
  egress {
    from_port   = 0
    to_port     = 0
    protocol    = "-1"
    cidr_blocks = ["0.0.0.0/0"]
  }

  tags = {
    Name = "web_sg"
  }
}

output "instance_ip" {
  value = aws_eip.booking_app_eip.public_ip
}