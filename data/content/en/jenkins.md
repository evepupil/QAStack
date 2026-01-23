# Jenkins

Jenkins is the leading open-source automation server that enables developers to build, test, and deploy their software reliably and continuously.

## Key Features

- **Pipeline as Code**: Define build pipelines in Jenkinsfile
- **Plugin Ecosystem**: 1800+ plugins for integration
- **Distributed Builds**: Scale with master-agent architecture
- **Multiple SCM Support**: Git, SVN, Mercurial, and more
- **Notifications**: Email, Slack, and other notifications
- **Extensible**: Highly customizable through plugins

## Quick Start

Install Jenkins:

```bash
# Docker
docker run -p 8080:8080 jenkins/jenkins:lts

# Or download from jenkins.io
```

Example Jenkinsfile:

```groovy
pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('Test') {
            steps {
                sh 'npm test'
            }
        }
        stage('Deploy') {
            steps {
                sh 'npm run deploy'
            }
        }
    }

    post {
        always {
            junit 'reports/**/*.xml'
        }
    }
}
```

## Why Choose Jenkins?

- **Mature**: Over 15 years of development
- **Huge Community**: Largest CI/CD community
- **Self-Hosted**: Full control over your infrastructure
- **Free**: Completely open-source

## Pricing

Jenkins is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://www.jenkins.io/)
- [Documentation](https://www.jenkins.io/doc/)
- [Plugin Index](https://plugins.jenkins.io/)
