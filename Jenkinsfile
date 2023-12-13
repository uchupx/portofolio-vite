pipeline {
    agent any
    tools {
        nodejs 'node 16'
    }
    stages {
        stage('Build') {
            steps {
                sh 'node --version'
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Deploy') {
            steps {
                sh "scp -i ${JENKINS_HOME}/light-sail.pem -r ./build ${LIGHTSAIL_USER}@${LIGHTSAIL_HOST}:/var/www/html/portofolio"
            }
        }
    }
    post {
        always {
            echo 'One way or another, I have finished'
            deleteDir() /* clean up our workspace */
        }
        success {
            echo 'I succeeeded! bisa'
        }
        unstable {
            echo 'I am unstable :/'
        }
        failure {
            echo 'I failed :('
        }
        changed {
            echo 'Things were different before...'
        }
    }
}