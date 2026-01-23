# Nuclei

Nuclei 是快速、可定制的漏洞扫描器，基于简单的 YAML 模板，用于检测 Web 应用、网络和云环境中的安全问题。

## 主要特点

- **模板驱动** - 基于 YAML 模板
- **快速扫描** - 高性能并发扫描
- **社区模板** - 丰富的社区维护模板
- **自定义** - 易于编写自定义模板
- **多协议** - HTTP、DNS、TCP、SSL 等
- **CI/CD** - 集成到安全流水线

## 快速开始

安装 Nuclei：

```bash
# Go 安装
go install -v github.com/projectdiscovery/nuclei/v3/cmd/nuclei@latest

# macOS
brew install nuclei

# Docker
docker pull projectdiscovery/nuclei
```

基本扫描：

```bash
# 扫描单个目标
nuclei -u https://example.com

# 扫描多个目标
nuclei -l urls.txt

# 使用特定模板
nuclei -u https://example.com -t cves/

# 只运行严重和高危模板
nuclei -u https://example.com -s critical,high
```

自定义模板：

```yaml
id: custom-header-check

info:
  name: 自定义头部检查
  author: your-name
  severity: info
  description: 检查自定义安全头部

http:
  - method: GET
    path:
      - "{{BaseURL}}"
    matchers:
      - type: word
        part: header
        words:
          - "X-Content-Type-Options"
          - "X-Frame-Options"
        condition: and
```

CI/CD 集成：

```yaml
name: 安全扫描

on:
  schedule:
    - cron: '0 0 * * *'

jobs:
  nuclei-scan:
    runs-on: ubuntu-latest
    steps:
      - name: Nuclei 扫描
        uses: projectdiscovery/nuclei-action@main
        with:
          target: https://example.com
          templates: cves/
          output: nuclei-results.txt
```

## 为什么选择 Nuclei？

- **开源** - 完全免费开源
- **快速** - 高性能扫描引擎
- **灵活** - 易于定制模板
- **社区** - 活跃的模板社区

## 定价

- **免费** - 开源免费使用
- **ProjectDiscovery Cloud** - 云平台版本

## 相关资源

- [官方网站](https://nuclei.projectdiscovery.io/)
- [文档](https://docs.nuclei.sh/)
- [模板库](https://github.com/projectdiscovery/nuclei-templates)
