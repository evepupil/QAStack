# GitLab CI

GitLab CI/CD 是 GitLab 内置的持续集成工具，允许你在 GitLab 仓库内无缝构建、测试和部署代码。

## 主要特点

- **内置 CI/CD** - 无需外部工具
- **YAML 配置** - 简单的 `.gitlab-ci.yml` 文件
- **Auto DevOps** - 自动创建 CI/CD 流水线
- **容器镜像库** - 内置 Docker 镜像库
- **Kubernetes 集成** - 原生 K8s 部署
- **安全扫描** - SAST、DAST 和依赖扫描

## 快速开始

在仓库中创建 `.gitlab-ci.yml`：

```yaml
stages:
  - build
  - test
  - deploy

build:
  stage: build
  script:
    - npm install
    - npm run build
  artifacts:
    paths:
      - dist/

test:
  stage: test
  script:
    - npm test
  coverage: '/Coverage: \d+.\d+%/'

deploy:
  stage: deploy
  script:
    - npm run deploy
  only:
    - main
  environment:
    name: production
    url: https://example.com
```

## 为什么选择 GitLab CI？

- **集成** - 作为 GitLab 的一部分，无需单独工具
- **强大** - 功能完善的 CI/CD 能力
- **Auto DevOps** - 标准项目零配置 CI/CD
- **安全** - 内置安全扫描

## 定价

- **免费版** - GitLab.com 每月 400 CI/CD 分钟
- **Premium** - $29/用户/月，10,000 分钟
- **Ultimate** - $99/用户/月，50,000 分钟

## 相关资源

- [官方文档](https://docs.gitlab.com/ee/ci/)
- [CI/CD 示例](https://docs.gitlab.com/ee/ci/examples/)
- [GitLab Runner](https://docs.gitlab.com/runner/)
