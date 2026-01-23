# OWASP ZAP

OWASP ZAP（Zed Attack Proxy）是世界上使用最广泛的免费 Web 安全扫描工具，由 OWASP 维护，用于查找 Web 应用程序中的安全漏洞。

## 主要特点

- **主动扫描** - 自动化漏洞扫描
- **被动扫描** - 分析流量而不攻击
- **爬虫** - 自动爬取 Web 应用
- **Fuzzer** - 用恶意数据测试输入
- **API 测试** - REST 和 GraphQL API 测试
- **自动化** - 通过 API 和 CLI 完全自动化

## 快速开始

下载并安装 ZAP：

```bash
# Docker
docker run -u zap -p 8080:8080 -i ghcr.io/zaproxy/zaproxy:stable zap.sh -daemon -host 0.0.0.0 -port 8080

# 或从 zaproxy.org 下载
```

快速扫描：

```bash
# 完整扫描
zap.sh -cmd -quickurl https://example.com -quickprogress

# API 扫描
zap.sh -cmd -autorun /path/to/automation.yaml
```

自动化示例：

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

## 为什么选择 OWASP ZAP？

- **免费** - 完全开源
- **OWASP** - 受尊重的安全组织支持
- **全面** - 功能完善的安全扫描器
- **社区** - 庞大的社区和插件生态

## 定价

OWASP ZAP 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方网站](https://www.zaproxy.org/)
- [文档](https://www.zaproxy.org/docs/)
- [GitHub 仓库](https://github.com/zaproxy/zaproxy)
