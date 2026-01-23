# Artillery

Artillery 是现代化的强大负载测试工具，支持 HTTP、WebSocket、Socket.io 等，使用 YAML 定义场景。

## 主要特点

- **多协议** - HTTP、WebSocket、Socket.io、GraphQL
- **YAML 配置** - 简单、可读的测试定义
- **指标** - 详细的性能指标
- **插件** - 可扩展的插件系统
- **CI/CD 友好** - 易于流水线集成
- **云端** - 可选的云端执行

## 快速开始

安装 Artillery：

```bash
npm install -g artillery
```

创建测试文件（`test.yml`）：

```yaml
config:
  target: "https://api.example.com"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "预热"
    - duration: 120
      arrivalRate: 50
      name: "持续负载"
  defaults:
    headers:
      Authorization: "Bearer {{ $env.API_TOKEN }}"

scenarios:
  - name: "浏览产品"
    flow:
      - get:
          url: "/products"
      - think: 1
      - get:
          url: "/products/{{ $randomNumber(1, 100) }}"

  - name: "创建订单"
    weight: 2
    flow:
      - post:
          url: "/orders"
          json:
            productId: "{{ $randomNumber(1, 100) }}"
            quantity: 1
      - think: 2
```

运行测试：

```bash
# 运行测试
artillery run test.yml

# 带报告
artillery run test.yml --output report.json
artillery report report.json
```

## 为什么选择 Artillery？

- **现代** - 为微服务和 API 构建
- **简单** - 易于学习的 YAML 语法
- **多用途** - 多协议支持
- **报告** - 精美的 HTML 报告

## 定价

- **开源版** - 永久免费
- **专业版** - $99/月，高级功能
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://artillery.io/)
- [文档](https://artillery.io/docs/)
- [GitHub 仓库](https://github.com/artilleryio/artillery)
