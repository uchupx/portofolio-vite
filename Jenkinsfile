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
                echo "Creating Build Folder"
                sh "ssh -i ${JENKINS_HOME}/light-sail.pem ${LIGHTSAIL_USER}@${LIGHTSAIL_HOST}  'mkdir -p ${HTML_PATH}/portofolio_build/${BUILD_NUMBER}'"
                echo "Copying build folder"
                sh "scp -i ${JENKINS_HOME}/light-sail.pem -r ./build ${LIGHTSAIL_USER}@${LIGHTSAIL_HOST}:/var/www/html/portofolio_build/${BUILD_NUMBER}"
                echo "Removing last symlink"
                sh "ssh -i ${JENKINS_HOME}/light-sail.pem ${LIGHTSAIL_USER}@${LIGHTSAIL_HOST} 'rm -rf /var/www/html/portofolio'"
                echo "Creating symlink"
                sh "ssh -i ${JENKINS_HOME}/light-sail.pem ${LIGHTSAIL_USER}@${LIGHTSAIL_HOST} 'ln -s ${HTML_PATH}/portofolio_build/${BUILD_NUMBER} ${HTML_PATH}/portofolio'"
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