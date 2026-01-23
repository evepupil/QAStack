# Keploy

Keploy 是一个开源的零代码 API 测试平台，能够从真实 API 流量中自动生成测试用例和数据 Mock。它帮助开发者无需手动编写测试代码就能创建全面的测试套件。

## 主要特点

- **自动生成测试**：录制 API 调用并自动创建测试用例
- **智能 Mock**：从真实的依赖响应（数据库、外部 API）生成 Mock
- **零代码改动**：无需修改应用代码即可集成
- **语言无关**：支持 Go、Java、Node.js、Python 等
- **CI/CD 就绪**：轻松集成到现有流水线

## 使用场景

Keploy 适用于：

- 从生产流量生成回归测试
- 为外部依赖创建真实的 Mock
- 无需手动工作即可加速 API 测试覆盖
- 测试具有复杂依赖的微服务
- 开发工作流中的左移测试

## 快速开始

### 安装

```bash
# 使用 curl (Linux/macOS)
curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh

# 使用 Docker
docker pull ghcr.io/keploy/keploy
```

### 录制测试

```bash
# 录制 API 调用
keploy record -c "your-app-command"

# 对应用发起一些 API 调用
curl http://localhost:8080/api/users

# 停止录制 - 测试自动保存
```

### 运行测试

```bash
# 回放录制的测试
keploy test -c "your-app-command"
```

## 优势

- 大幅减少创建测试套件的时间
- 捕获包括边界情况在内的真实场景
- Mock 始终与实际响应保持同步
- 无需因 API 变更而维护测试
- 适用于任何后端框架

## 局限性

- 需要流量来生成测试（冷启动问题）
- 复杂的有状态场景可能需要手动调整
- 高级配置有一定学习曲线
- 某些动态数据可能需要自定义处理

## 定价

Keploy 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方文档](https://keploy.io/docs/)
- [GitHub 仓库](https://github.com/keploy/keploy)
- [Keploy Slack 社区](https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA)

## 总结

Keploy 通过自动从真实流量生成测试，革新了 API 测试方式。它消除了编写和维护 API 测试的繁琐工作，同时确保全面覆盖实际使用模式。非常适合希望在不减慢开发速度的情况下实现高测试覆盖率的团队。
