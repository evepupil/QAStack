# Snyk

Snyk 是开发者优先的安全平台，帮助开发者在开发过程中发现和修复代码、依赖、容器和基础设施中的漏洞。

## 主要特点

- **代码安全** - 静态应用安全测试 (SAST)
- **开源安全** - 依赖漏洞扫描
- **容器安全** - Docker 镜像扫描
- **IaC 安全** - 基础设施即代码安全
- **修复建议** - 自动修复 PR
- **CI/CD 集成** - 集成到开发流程

## 快速开始

安装 Snyk CLI：

```bash
npm install -g snyk

# 认证
snyk auth
```

扫描项目：

```bash
# 扫描开源依赖
snyk test

# 扫描代码
snyk code test

# 扫描容器镜像
snyk container test nginx:latest

# 扫描 IaC 文件
snyk iac test
```

GitHub Actions 集成：

```yaml
name: 安全扫描

on: [push, pull_request]

jobs:
  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: 运行 Snyk 扫描依赖
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          command: test

      - name: 运行 Snyk 扫描代码
        uses: snyk/actions/node@master
        env:
          SNYK_TOKEN: ${{ secrets.SNYK_TOKEN }}
        with:
          command: code test
```

## 为什么选择 Snyk？

- **开发者友好** - 集成到开发工作流
- **全面** - 覆盖代码、依赖、容器、IaC
- **智能修复** - 自动修复建议
- **持续监控** - 持续监控新漏洞

## 定价

- **免费版** - 个人开发者免费
- **团队版** - $52/开发者/月
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://snyk.io/)
- [文档](https://docs.snyk.io/)
- [漏洞数据库](https://snyk.io/vuln/)
