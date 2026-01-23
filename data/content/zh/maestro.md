# Maestro

Maestro 是最简单高效的移动端 UI 测试框架，使用 YAML 定义测试流程，无需编译应用即可运行测试。

## 主要特点

- **YAML 配置** - 使用简单易读的 YAML 编写测试
- **无需编译** - 无需重新编译应用即可测试
- **极速执行** - 测试启动和执行速度极快
- **自愈能力** - 强大的元素匹配减少测试不稳定性
- **跨平台** - 支持 iOS 和 Android

## 快速开始

安装 Maestro：

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

创建测试文件 `flow.yaml`：

```yaml
appId: com.example.app
---
- launchApp
- tapOn: "登录"
- inputText:
    id: "email"
    text: "test@example.com"
- inputText:
    id: "password"
    text: "password123"
- tapOn: "提交"
- assertVisible: "欢迎"
```

运行测试：

```bash
maestro test flow.yaml
```

## 为什么选择 Maestro？

- **极简** - 无需代码，只需 YAML
- **极速** - 最快的移动端测试框架
- **稳定** - 内置重试和自愈机制
- **开发体验** - 快速的反馈循环

## 定价

Maestro 免费开源。Maestro Cloud 提供付费的 CI/CD 集成服务。

## 相关资源

- [官方文档](https://maestro.mobile.dev/)
- [GitHub 仓库](https://github.com/mobile-dev-inc/maestro)
- [Maestro Cloud](https://cloud.mobile.dev/)
