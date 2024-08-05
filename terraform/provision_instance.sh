#!/bin/bash

# Exit on error
set -e

# Extract public IP from the Terraform output (if using in a Terraform context)
PUBLIC_IP=$(terraform output -raw instance_ip)

# Run SSH commands
ssh -i ~/.ssh/key-pair ec2-user@$PUBLIC_IP <<'EOF'
  sudo yum update -y


  echo "[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-7.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo

  sudo yum install -y mongodb-org
  sudo systemctl is-active --quiet mongod || sudo systemctl start mongod && echo 'MongoDB started successfully' || echo 'Failed to start MongoDB'
  sudo systemctl enable mongod && echo 'MongoDB enabled successfully' || echo 'Failed to enable MongoDB'
  sudo systemctl status mongod

  if ! command -v docker &> /dev/null; then sudo amazon-linux-extras install docker -y; fi
  if ! sudo systemctl is-active --quiet docker; then sudo service docker start; fi
  if ! getent group docker; then sudo groupadd docker; fi
  if ! id -nG ec2-user | grep -qw docker; then sudo usermod -a -G docker ec2-user; fi

  sudo systemctl start docker
  sudo systemctl enable docker

  # Remove any existing container with the name 'booking-app'
  if sudo docker ps -aq -f name=booking-app; then
    echo "Removing existing container 'booking-app'..."
    sudo docker rm -f booking-app
  fi

  # Pull the latest image
  sudo docker pull wassimhassin/booking:latest

  # Run the new container
  sudo docker run -d -p 3000:3000 --name booking-app wassimhassin/booking:latest

  # Check the logs of the newly started container
  echo "Checking logs of the 'booking-app' container..."
  sudo docker logs booking-app
EOF
