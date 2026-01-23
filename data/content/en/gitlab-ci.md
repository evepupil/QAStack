# GitLab CI

GitLab CI/CD is a built-in continuous integration tool in GitLab that allows you to build, test, and deploy your code seamlessly within your GitLab repository.

## Key Features

- **Built-in CI/CD**: No external tools needed
- **YAML Configuration**: Simple `.gitlab-ci.yml` files
- **Auto DevOps**: Automatic CI/CD pipeline creation
- **Container Registry**: Built-in Docker registry
- **Kubernetes Integration**: Native K8s deployment
- **Security Scanning**: SAST, DAST, and dependency scanning

## Quick Start

Create `.gitlab-ci.yml` in your repository:

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

## Why Choose GitLab CI?

- **Integrated**: Part of GitLab, no separate tool
- **Powerful**: Full-featured CI/CD capabilities
- **Auto DevOps**: Zero-config CI/CD for standard projects
- **Security**: Built-in security scanning

## Pricing

- **Free**: 400 CI/CD minutes/month on GitLab.com
- **Premium**: $29/user/month, 10,000 minutes
- **Ultimate**: $99/user/month, 50,000 minutes

## Learn More

- [Official Documentation](https://docs.gitlab.com/ee/ci/)
- [CI/CD Examples](https://docs.gitlab.com/ee/ci/examples/)
- [GitLab Runner](https://docs.gitlab.com/runner/)
