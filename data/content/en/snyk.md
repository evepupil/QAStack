# Snyk

Snyk is a developer-first security platform that helps find and fix vulnerabilities in code, dependencies, containers, and infrastructure as code.

## Key Features

- **Dependency Scanning**: Find vulnerable packages
- **Code Analysis**: SAST for your code
- **Container Security**: Scan Docker images
- **IaC Security**: Terraform, CloudFormation scanning
- **Fix PRs**: Automated fix pull requests
- **IDE Integration**: Scan while coding

## Quick Start

Install Snyk CLI:

```bash
npm install -g snyk
snyk auth
```

Scan for vulnerabilities:

```bash
# Scan project dependencies
snyk test

# Scan and monitor
snyk monitor

# Scan container image
snyk container test node:18

# Scan IaC files
snyk iac test
```

CI/CD integration:

```yaml
# GitHub Actions
- name: Run Snyk
  uses: snyk/actions/node@master
  env:
    SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
  with:
    command: test
    args: --severity-threshold=high
```

Configure in `.snyk`:

```yaml
version: v1.25.0
ignore:
  SNYK-JS-LODASH-590103:
    - '*':
        reason: Low risk, will fix in next sprint
        expires: 2024-06-01
```

## Why Choose Snyk?

- **Developer-First**: Integrates into developer workflow
- **Comprehensive**: Code, deps, containers, IaC
- **Automated**: Fix suggestions and PRs
- **Trusted**: Used by major companies

## Pricing

- **Free**: Up to 200 tests/month
- **Team**: $52/developer/month
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://snyk.io/)
- [Documentation](https://docs.snyk.io/)
- [Vulnerability Database](https://snyk.io/vuln/)
