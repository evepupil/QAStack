# Nuclei

Nuclei is a fast and customizable vulnerability scanner based on simple YAML templates, with a massive community-contributed template library.

## Key Features

- **Template-Based**: YAML-based scanning templates
- **Fast**: Highly optimized for speed
- **Community**: 7000+ community templates
- **Customizable**: Write your own templates
- **Multi-Protocol**: HTTP, DNS, TCP, SSL, and more
- **CI/CD Ready**: Easy automation integration

## Quick Start

Install Nuclei:

```bash
# Go install
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

# macOS
brew install nuclei

# Docker
docker pull projectdiscovery/nuclei
```

Run scans:

```bash
# Scan with all templates
nuclei -u https://example.com

# Scan with specific templates
nuclei -u https://example.com -t cves/

# Scan with severity filter
nuclei -u https://example.com -s critical,high

# Scan multiple targets
nuclei -l targets.txt -t nuclei-templates/
```

Create custom template:

```yaml
id: custom-check

info:
  name: Custom Security Check
  author: yourname
  severity: medium
  description: Check for specific vulnerability

http:
  - method: GET
    path:
      - "{{BaseURL}}/admin"

    matchers:
      - type: status
        status:
          - 200

      - type: word
        words:
          - "admin panel"
```

CI/CD integration:

```yaml
- name: Run Nuclei
  uses: projectdiscovery/nuclei-action@main
  with:
    target: https://example.com
    templates: cves/
    output: nuclei-report.txt
```

## Why Choose Nuclei?

- **Fast**: Extremely fast scanning
- **Templates**: Huge template library
- **Flexible**: Create custom templates
- **Community**: Active community support

## Pricing

Nuclei is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://nuclei.projectdiscovery.io/)
- [Documentation](https://docs.nuclei.sh/)
- [Template Repository](https://github.com/projectdiscovery/nuclei-templates)
