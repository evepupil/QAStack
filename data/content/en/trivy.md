# Trivy

Trivy is a comprehensive security scanner by Aqua Security that scans containers, filesystems, git repositories, and Kubernetes for vulnerabilities.

## Key Features

- **Multi-Target**: Containers, filesystems, repos, K8s
- **Vulnerability DB**: Comprehensive vulnerability database
- **Misconfiguration**: Detect security misconfigurations
- **Secret Detection**: Find exposed secrets
- **SBOM**: Generate Software Bill of Materials
- **Fast**: Quick scanning with caching

## Quick Start

Install Trivy:

```bash
# macOS
brew install trivy

# Linux
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -

# Docker
docker pull aquasec/trivy
```

Scan targets:

```bash
# Scan container image
trivy image nginx:latest

# Scan filesystem
trivy fs /path/to/project

# Scan git repository
trivy repo https://github.com/user/repo

# Scan Kubernetes cluster
trivy k8s --report summary cluster
```

CI/CD integration:

```yaml
# GitHub Actions
- name: Run Trivy vulnerability scanner
  uses: aquasecurity/trivy-action@master
  with:
    image-ref: 'myapp:latest'
    format: 'sarif'
    output: 'trivy-results.sarif'
    severity: 'CRITICAL,HIGH'

- name: Upload Trivy scan results
  uses: github/codeql-action/upload-sarif@v2
  with:
    sarif_file: 'trivy-results.sarif'
```

Configuration file (`trivy.yaml`):

```yaml
severity:
  - CRITICAL
  - HIGH
ignore-unfixed: true
exit-code: 1
```

## Why Choose Trivy?

- **Comprehensive**: All-in-one security scanner
- **Fast**: Efficient scanning with caching
- **CI/CD Ready**: Easy pipeline integration
- **Open Source**: Free and actively maintained

## Pricing

Trivy is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://trivy.dev/)
- [Documentation](https://aquasecurity.github.io/trivy/)
- [GitHub Repository](https://github.com/aquasecurity/trivy)
