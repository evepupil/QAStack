# OWASP ZAP

OWASP ZAP (Zed Attack Proxy) is the world's most widely used free web security scanner, maintained by OWASP for finding vulnerabilities in web applications.

## Key Features

- **Active Scanner**: Automated vulnerability scanning
- **Passive Scanner**: Analyze traffic without attacking
- **Spider**: Crawl web applications automatically
- **Fuzzer**: Test inputs with malicious data
- **API Testing**: REST and GraphQL API testing
- **Automation**: Full automation via API and CLI

## Quick Start

Download and install ZAP:

```bash
# Docker
docker run -u zap -p 8080:8080 -i ghcr.io/zaproxy/zaproxy:stable zap.sh -daemon -host 0.0.0.0 -port 8080

# Or download from zaproxy.org
```

Quick scan:

```bash
# Full scan
zap.sh -cmd -quickurl https://example.com -quickprogress

# API scan
zap.sh -cmd -autorun /path/to/automation.yaml
```

Automation example:

```yaml
env:
  contexts:
    - name: "Default Context"
      urls:
        - "https://example.com"

jobs:
  - type: spider
    parameters:
      context: "Default Context"
  - type: activeScan
    parameters:
      context: "Default Context"
  - type: report
    parameters:
      reportFile: "report.html"
```

## Why Choose OWASP ZAP?

- **Free**: Completely open-source
- **OWASP**: Backed by respected security organization
- **Comprehensive**: Full-featured security scanner
- **Community**: Large community and plugin ecosystem

## Pricing

OWASP ZAP is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://www.zaproxy.org/)
- [Documentation](https://www.zaproxy.org/docs/)
- [GitHub Repository](https://github.com/zaproxy/zaproxy)
