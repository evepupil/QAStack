# Jenkins

Jenkins 是最流行的开源自动化服务器，帮助开发者可靠、持续地构建、测试和部署软件。

## 主要特点

- **流水线即代码** - 在 Jenkinsfile 中定义构建流水线
- **插件生态** - 1800+ 插件用于集成
- **分布式构建** - 主从架构可扩展
- **多 SCM 支持** - Git、SVN、Mercurial 等
- **通知** - 邮件、Slack 和其他通知
- **可扩展** - 通过插件高度可定制

## 快速开始

安装 Jenkins：

```bash
# Docker
docker run -p 8080:8080 jenkins/jenkins:lts

# 或从 jenkins.io 下载
```

Jenkinsfile 示例：

```groovy
pipeline {
    agent any

    stages {
        stage('构建') {
            steps {
                sh 'npm install'
                sh 'npm run build'
            }
        }
        stage('测试') {
            steps {
                sh 'npm test'
            }
        }
        stage('部署') {
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

## 为什么选择 Jenkins？

- **成熟** - 超过 15 年的发展
- **庞大社区** - 最大的 CI/CD 社区
- **自托管** - 完全控制基础设施
- **免费** - 完全开源

## 定价

Jenkins 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://www.jenkins.io/)
- [文档](https://www.jenkins.io/doc/)
- [插件索引](https://plugins.jenkins.io/)
