pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = 'dockercred'
        KUBECONFIG_CREDENTIALS = 'kubecred'
    }
    stages {
        stage('Clone Repository') {
            steps {
                git 'https://github.com/wassimhassin/bookingapp.git'
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
}