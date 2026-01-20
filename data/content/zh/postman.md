# Postman

Postman 是全球最流行的 API 开发和测试平台，提供直观的图形界面和强大的协作功能，让 API 测试变得简单高效。

## 主要特点

- **直观的 GUI** - 无需编码即可测试 API
- **集合管理** - 组织和共享 API 请求
- **环境变量** - 轻松切换不同环境
- **自动化测试** - 编写测试脚本
- **Mock 服务器** - 模拟 API 响应
- **文档生成** - 自动生成 API 文档
- **团队协作** - 共享集合和工作空间
- **监控功能** - 定期检查 API 健康状态

## 使用场景

- API 开发和调试
- 手动 API 测试
- 自动化 API 测试
- API 文档编写
- 团队协作和知识共享
- API 监控

## 快速开始

### 安装

下载并安装 Postman 桌面应用或使用 Web 版本。

### 基础用法

1. **创建请求**
   - 选择 HTTP 方法（GET、POST 等）
   - 输入 API URL
   - 添加请求头和请求体
   - 点击 Send

2. **编写测试**

```javascript
// 测试状态码
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});

// 测试响应时间
pm.test("Response time is less than 200ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(200);
});

// 测试响应内容
pm.test("Response has user data", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.name).to.eql("John Doe");
});
```

3. **使用环境变量**

```javascript
// 设置变量
pm.environment.set("token", pm.response.json().token);

// 使用变量
// 在请求中使用 {{token}}
```

## 优势

- ✅ **易于使用** - 直观的图形界面
- ✅ **功能全面** - 涵盖 API 开发全流程
- ✅ **团队协作** - 强大的共享功能
- ✅ **丰富的集成** - 支持 CI/CD 集成
- ✅ **活跃社区** - 大量教程和资源

## 局限性

- ⚠️ **桌面应用** - 需要安装客户端
- ⚠️ **付费功能** - 高级功能需要订阅
- ⚠️ **版本控制** - 集合版本管理不够完善
- ⚠️ **性能测试** - 不适合大规模负载测试

## 定价

Postman 采用 **Freemium** 模式：

- **免费版**：基础功能，适合个人使用
- **Basic**：$14/月 - 团队协作功能
- **Professional**：$29/月 - 高级功能和更多资源
- **Enterprise**：定制价格 - 企业级功能

## 相关资源

- [官方文档](https://www.postman.com/)
- [学习中心](https://learning.postman.com/)
- [API 网络](https://www.postman.com/explore)
- [社区论坛](https://community.postman.com/)

## 总结

Postman 是 API 测试领域的领导者，其直观的界面和强大的功能使其成为开发者和测试工程师的必备工具。无论是手动测试还是自动化测试，Postman 都能提供优秀的体验。
