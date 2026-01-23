# Hoppscotch

Hoppscotch 是开源 API 开发生态系统，轻量、快速、界面美观的 Postman 替代品，支持实时协作。

## 主要特点

- **轻量** - 快速、资源占用少
- **实时协作** - 与团队成员协作
- **PWA** - 作为渐进式 Web 应用离线工作
- **REST/GraphQL** - 支持多种 API 类型
- **集合** - 将请求组织成集合
- **环境** - 管理多个环境

## 快速开始

访问 hoppscotch.io 或本地安装：

```bash
# Docker 自托管
docker run -p 3000:3000 hoppscotch/hoppscotch:latest
```

发送请求：

```
请求方法: GET
URL: https://api.example.com/users
请求头:
  Authorization: Bearer your-token
  Content-Type: application/json
```

GraphQL 查询：

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
    }
  }
}
```

环境变量：

```
baseUrl: https://api.example.com
token: your-api-token
```

在请求中使用：`{{baseUrl}}/users`

## 为什么选择 Hoppscotch？

- **开源** - 无供应商锁定
- **隐私** - 数据留在本地
- **快速** - 即时、轻量体验
- **美观** - 现代、简洁的界面

## 定价

Hoppscotch 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://hoppscotch.io/)
- [文档](https://docs.hoppscotch.io/)
- [GitHub 仓库](https://github.com/hoppscotch/hoppscotch)
