# Pact

Pact 是消费者驱动的契约测试框架，无需集成环境即可确保服务之间的兼容性。

## 主要特点

- **契约测试** - 验证服务之间的 API 契约
- **消费者驱动** - 测试由 API 消费者定义
- **Pact Broker** - 集中式契约管理
- **多语言** - Java、JavaScript、Python、Ruby、Go、.NET
- **CI/CD 集成** - 易于流水线集成
- **双向** - 提供者和消费者验证

## 快速开始

JavaScript 消费者测试：

```javascript
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
  consumer: 'UserService',
  provider: 'UserAPI',
  port: 1234
});

describe('用户 API', () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  it('返回用户信息', async () => {
    await provider.addInteraction({
      state: '用户存在',
      uponReceiving: '获取用户 1 的请求',
      withRequest: {
        method: 'GET',
        path: '/users/1'
      },
      willRespondWith: {
        status: 200,
        body: {
          id: 1,
          name: '张三'
        }
      }
    });

    const response = await fetch('http://localhost:1234/users/1');
    expect(response.status).toBe(200);
  });
});
```

提供者验证：

```javascript
const { Verifier } = require('@pact-foundation/pact');

new Verifier({
  providerBaseUrl: 'http://localhost:3000',
  pactUrls: ['./pacts/userservice-userapi.json']
}).verifyProvider().then(() => {
  console.log('Pact 验证完成！');
});
```

## 为什么选择 Pact？

- **微服务** - 完美适合微服务架构
- **左移** - 尽早发现集成问题
- **独立** - 无需运行所有服务即可测试
- **成熟** - 被全球主要企业使用

## 定价

- **开源** - 免费
- **PactFlow** - SaaS Pact Broker，$99/月起

## 相关资源

- [官方网站](https://pact.io/)
- [文档](https://docs.pact.io/)
- [GitHub 组织](https://github.com/pact-foundation)
