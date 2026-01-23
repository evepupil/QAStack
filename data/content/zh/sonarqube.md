# SonarQube

SonarQube 是领先的自动代码审查工具，可以检测 30+ 种编程语言中的 Bug、漏洞和代码异味。

## 主要特点

- **多语言** - 支持 30+ 种编程语言
- **质量门禁** - 定义代码质量通过/失败标准
- **安全分析** - 检测漏洞（OWASP Top 10）
- **技术债务** - 跟踪和管理技术债务
- **CI/CD 集成** - 无缝流水线集成
- **IDE 插件** - SonarLint 提供实时反馈

## 快速开始

使用 Docker 运行 SonarQube：

```bash
docker run -d --name sonarqube -p 9000:9000 sonarqube:lts-community
```

分析项目：

```bash
# 安装 sonar-scanner
npm install -g sonarqube-scanner

# 创建 sonar-project.properties
sonar.projectKey=my-project
sonar.sources=src
sonar.host.url=http://localhost:9000
sonar.login=your-token

# 运行分析
sonar-scanner
```

集成到 CI/CD：

```yaml
# GitLab CI 示例
sonarqube:
  stage: analyze
  script:
    - sonar-scanner -Dsonar.qualitygate.wait=true
```

## 为什么选择 SonarQube？

- **全面** - 跨语言深度代码分析
- **可操作** - 清晰的问题说明和修复建议
- **企业级** - 可扩展到大型代码库
- **标准** - 行业标准的代码质量工具

## 定价

- **社区版** - 免费开源
- **开发者版** - $150/年，100K 代码行
- **企业版** - $20,000/年起
- **数据中心版** - 高可用，定制价格

## 相关资源

- [官方网站](https://www.sonarqube.org/)
- [文档](https://docs.sonarqube.org/)
- [SonarCloud](https://sonarcloud.io/)
