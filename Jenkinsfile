pipeline {
    agent any
    
    
    stages {
      stage('SCM Checkout') {
            steps {
                retry(3) {
                    git branch: 'main', url: 'https://github.com/Piumikavindya/motor_service_and_wash_website_develop.git'
                }
                bat 'dir' // Verify the workspace files after checkout
            }
        }
         stage('Build Backend Docker Image') {
            steps {
                dir('backend') {
                    bat 'docker build -t piumikavindya/motor-service-and-wash-web-backend-image:%BUILD_NUMBER% .'
                }
            }
        }
          stage('Build Frontend Docker Image') {
            steps {
                dir('frontend') {
                    bat 'docker build -t piumikavindya/motor-service-and-wash-web-frontend-image:%BUILD_NUMBER% .'
                }
            }
        }
        
        stage('Login to Docker Hub') {
            steps {
                withCredentials([string(credentialsId: 'dockerPassword', variable: 'dockerPassword')]) {
                    script {
                           bat "docker login -u piumikavindya -p %dockerPassword%"
                    }
                }
            }
        }
        stage('Push Backend Image') {
            steps {
                bat 'docker push piumikavindya/motor-service-and-wash-web-backend-image:%BUILD_NUMBER%'
            }
        }
        stage('Push Frontend Image') {
            steps {
                bat 'docker push piumikavindya/motor-service-and-wash-web-frontend-image:%BUILD_NUMBER%'
            }
        }
      
        
        stage('Deploy') {
            steps {
                // Clean up existing containers and networks
                bat 'docker compose down'
                
                // Deploy using docker-compose
                bat 'docker compose up -d'
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