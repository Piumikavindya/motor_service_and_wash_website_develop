pipeline {
    agent any
    
    environment {
        REPO_URL = 'https://github.com/Piumikavindya/motor_service_and_wash_website_develop'
        DOCKERHUB_CREDENTIALS = credentials('dockerPassword')
        DOCKER_IMAGE_NAME = 'piumikavindya/MotorService'
    }
    
    stages {
        stage('Checkout') {
            steps {
                git url: "${REPO_URL}", branch: 'main'
            }
        }
        
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerPassword', variable: 'dockerPassword')]) {
                    script {
                        bat "docker login -u piumikavindya -p ${dockerPassword}"
                    }
                }
            }
        }
        
        stage('Build and Push Docker Images') {
            steps {
                // Build backend Docker image
                dir('backend') {
                    bat "docker build -t ${DOCKER_IMAGE_NAME}-backend:%BUILD_NUMBER% ."
                    bat "docker push ${DOCKER_IMAGE_NAME}-backend:%BUILD_NUMBER%"
                }
                
                // Build frontend Docker image
                dir('frontend') {
                    bat "docker build -t ${DOCKER_IMAGE_NAME}-frontend:%BUILD_NUMBER% ."
                    bat "docker push ${DOCKER_IMAGE_NAME}-frontend:%BUILD_NUMBER%"
                }
            }
        }
        
        stage('Deploy') {
            steps {
                // Clean up existing containers and networks
                bat 'docker-compose down'
                
                // Deploy using docker-compose
                bat 'docker-compose up -d'
            }
        }
    }
    
    post {
        always {
            // Clean up Docker login
            script {
                bat 'docker logout'
            }
        }
    }
}