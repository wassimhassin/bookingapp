#!/bin/bash

# Exit on error
set -e

# Update package index
sudo yum update -y

# Create MongoDB repository
echo "[mongodb-org-7.0]
name=MongoDB Repository
baseurl=https://repo.mongodb.org/yum/amazon/2/mongodb-org/7.0/x86_64/
gpgcheck=1
enabled=1
gpgkey=https://pgp.mongodb.com/server-7.0.asc" | sudo tee /etc/yum.repos.d/mongodb-org-7.0.repo

# Install MongoDB
sudo yum install -y mongodb-org

# Start MongoDB if not already running
sudo systemctl is-active --quiet mongod || (sudo systemctl start mongod && echo 'MongoDB started successfully' || echo 'Failed to start MongoDB')

# Enable MongoDB to start on boot
sudo systemctl enable mongod && echo 'MongoDB enabled successfully' || echo 'Failed to enable MongoDB'

# Check MongoDB status
sudo systemctl status mongod
