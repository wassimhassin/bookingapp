pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = 'dockercred'
        KUBECONFIG_CREDENTIALS = 'kubecred'
        AWS_CREDENTIALS = 'awscred'
        PUBLIC_KEY = credentials('awspubkey')
            }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/wassimhassin/bookingapp.git'
            }
        }
        stage('List Files') {
            steps {
                sh 'ls -R'  // Lists all files and directories recursively
            }
        }
        stage('Terraform Init') {
            steps {
                script {
                    withAWS(credentials: AWS_CREDENTIALS, region: 'eu-west-3') {
                        dir('terraform') {
                            sh 'ls -l'  // Lists files in the terraform directory
                            sh 'terraform init'
                        }
                    }
                }
            }
        }
        stage('Terraform Apply') {
            steps {
                sh '''
                echo "$PUBLIC_KEY" > /home/wassim/.ssh/key-pair.pub
                terraform apply
                '''
                }
            }
        stage('Build and Package') {
            steps {
                script {
                    sh 'docker build -t wassimhassin/booking:latest .'
                }
            }
        }
        stage('Push Docker Image') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', DOCKERHUB_CREDENTIALS) {
                        sh 'docker push wassimhassin/booking:latest'
                    }
                }
            }
        }
        stage('Deploy to Kubernetes') {
            steps {
                script {
                    withCredentials([file(credentialsId: KUBECONFIG_CREDENTIALS, variable: 'KUBECONFIG')]) {
                        sh 'kubectl apply -f k8s/deployment.yaml'
                    }
                }
            }
        }
    }
    post {
        always {
            echo 'Pipeline finished.'
        }
    }
}