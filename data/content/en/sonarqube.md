# SonarQube

SonarQube is the leading automatic code review tool that detects bugs, vulnerabilities, and code smells across 30+ programming languages.

## Key Features

- **Multi-Language**: Support for 30+ programming languages
- **Quality Gates**: Define pass/fail criteria for code quality
- **Security Analysis**: Detect vulnerabilities (OWASP Top 10)
- **Technical Debt**: Track and manage technical debt
- **CI/CD Integration**: Seamless pipeline integration
- **IDE Plugins**: SonarLint for real-time feedback

## Quick Start

Run SonarQube with Docker:

```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube:lts-community
```

Analyze a project:

```bash
# Install sonar-scanner
npm install -g sonarqube-scanner

# Create sonar-project.properties
sonar.projectKey=my-project
sonar.sources=src
sonar.host.url=http://localhost:9000
sonar.login=your-token

# Run analysis
sonar-scanner
```

Integrate with CI/CD:

```yaml
# GitLab CI example
sonarqube:
  stage: analyze
  script:
    - sonar-scanner -Dsonar.qualitygate.wait=true
```

## Why Choose SonarQube?

- **Comprehensive**: Deep code analysis across languages
- **Actionable**: Clear issue explanations and fixes
- **Enterprise Ready**: Scales to large codebases
- **Standard**: Industry-standard quality tool

## Pricing

- **Community**: Free, open-source
- **Developer**: $150/year for 100K LOC
- **Enterprise**: Starting at $20,000/year
- **Data Center**: High availability, custom pricing

## Learn More

- [Official Website](https://www.sonarqube.org/)
- [Documentation](https://docs.sonarqube.org/)
- [SonarCloud](https://sonarcloud.io/)
