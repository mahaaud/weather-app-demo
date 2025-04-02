pipeline {
    agent any

    stages {
        stage('Trigger SAST Scan') {
            environment {
                API_KEY = 'oxs_-HAH_yq1uS3PE_8w2Mmfw6-z7nVFpAfQLRQa-s2HNDg'
            }
            steps {
                sh '''
                curl -X POST https://softdebut.appsecure.website/api/v1/cicd/scan/sast/newscan \
                -H "Content-Type: application/json" \
                -H "X-Api-Key: ${API_KEY}" \
                -d '{ "assetID": "67d7e326285d410d921d9f6d" }'
                '''
            }
        }
    }
}