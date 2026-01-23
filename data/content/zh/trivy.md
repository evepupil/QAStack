# Trivy

Trivy 是全面的安全扫描器，可以扫描容器镜像、文件系统、Git 仓库、Kubernetes 等中的漏洞和配置问题。

## 主要特点

- **全面扫描** - 镜像、文件系统、Git、K8s
- **漏洞检测** - OS 和语言包漏洞
- **配置扫描** - Dockerfile、K8s、Terraform
- **密钥检测** - 检测硬编码的密钥
- **SBOM** - 软件物料清单生成
- **开源** - 完全免费开源

## 快速开始

安装 Trivy：

```bash
# macOS
brew install trivy

# Linux
curl -sfL https://raw.githubusercontent.com/aquasecurity/trivy/main/contrib/install.sh | sh -s -- -b /usr/local/bin

# Docker
docker pull aquasec/trivy
```

扫描容器镜像：

```bash
# 扫描镜像漏洞
trivy image nginx:latest

# 只显示高危和严重漏洞
trivy image --severity HIGH,CRITICAL nginx:latest

# 输出 JSON 格式
trivy image -f json -o results.json nginx:latest
```

扫描文件系统和 IaC：

```bash
# 扫描项目目录
trivy fs .

# 扫描 Kubernetes 配置
trivy config ./k8s/

# 扫描 Terraform
trivy config ./terraform/
```

CI/CD 集成：

```yaml
name: 安全扫描

on: [push]

jobs:
  scan:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: 构建镜像
        run: docker build -t myapp:${{ github.sha }} .

      - name: Trivy 扫描
        uses: aquasecurity/trivy-action@master
        with:
          image-ref: myapp:${{ github.sha }}
          format: 'sarif'
          output: 'trivy-results.sarif'
          severity: 'CRITICAL,HIGH'
```

## 为什么选择 Trivy？

- **开源免费** - 完全开源
- **快速** - 快速扫描
- **全面** - 多种扫描目标
- **易用** - 简单的命令行界面

## 定价

- **免费** - 开源免费使用
- **Aqua Platform** - 企业版，提供更多功能

## 相关资源

- [官方网站](https://trivy.dev/)
- [文档](https://aquasecurity.github.io/trivy/)
- [GitHub](https://github.com/aquasecurity/trivy)
