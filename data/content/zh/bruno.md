# Bruno

Bruno 是一个开源 API 客户端，作为 Postman 的轻量级替代品，将集合直接存储在文件系统中，对 Git 友好。

## 主要特点

- **离线优先** - 完全离线工作
- **Git 友好** - 集合以纯文本文件存储
- **本地存储** - 数据不上传云端，保护隐私
- **脚本支持** - JavaScript 编写请求前后脚本
- **环境变量** - 灵活的环境管理
- **开源** - 完全透明，社区驱动

## 快速开始

安装 Bruno：

```bash
# macOS
brew install bruno

# 或从官网下载
```

集合以 `.bru` 文件存储：

```bru
meta {
  name: 获取用户
  type: http
  seq: 1
}

get {
  url: https://api.example.com/users
  body: none
  auth: bearer
}

headers {
  Content-Type: application/json
}

auth:bearer {
  token: {{access_token}}
}
```

## 为什么选择 Bruno？

- **隐私保护** - 无需账号，无云存储
- **版本控制** - Git 友好的格式便于团队协作
- **轻量级** - 快速且资源占用少
- **开源** - 无供应商锁定

## 定价

Bruno 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://www.usebruno.com/)
- [GitHub 仓库](https://github.com/usebruno/bruno)
- [文档](https://docs.usebruno.com/)
