pipeline {
    agent any
    environment {
        DOCKERHUB_CREDENTIALS = 'dockercred'
        KUBECONFIG_CREDENTIALS = 'kubecred'
    }
    stages {
        // Uncomment this stage if you need to clone the repository
        // stage('Clone Repository') {
        //     steps {
        //         sh 'git clone https://github.com/wassim1920/Booking'
        //     }
        // }
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
                    withCredentials([usernamePassword(credentialsId: DOCKERHUB_CREDENTIALS, passwordVariable: 'DOCKER_PASS', usernameVariable: 'DOCKER_USER')]) {
                        sh """
                        echo "$DOCKER_PASS" | docker login -u "$DOCKER_USER" --password-stdin
                        docker push wassimhassin/booking:latest
                        """
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