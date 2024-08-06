#!/bin/bash

# Exit on error
set -e

# Extract public IP from the Terraform output
PUBLIC_IP=$(terraform output -raw instance_ip)

# Run the MongoDB setup script
ssh -i ~/.ssh/key-pair ec2-user@$PUBLIC_IP 'bash -s' < /home/wassim/Desktop/wassim/Project/Booking/terraform/mongo.sh

# Run the Docker setup script
ssh -i ~/.ssh/key-pair ec2-user@$PUBLIC_IP 'bash -s' < /home/wassim/Desktop/wassim/Project/Booking/terraform/docker.sh
