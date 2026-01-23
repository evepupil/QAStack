# Testcontainers

Testcontainers 是一个库，提供轻量级、一次性的 Docker 容器实例（如数据库、消息队列、Selenium 浏览器等），用于集成测试。

## 主要特点

- **基于 Docker** - 在容器中启动真实依赖
- **多语言支持** - Java、Go、Node.js、Python、.NET、Rust
- **预构建模块** - 常用服务的即用模块
- **测试隔离** - 每个测试获得全新容器
- **自动清理** - 测试后自动移除容器

## 快速开始

Java JUnit 5 示例：

```java
@Testcontainers
class MyIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Test
    void testDatabaseConnection() {
        String jdbcUrl = postgres.getJdbcUrl();
        // 使用 jdbcUrl 连接并测试
    }
}
```

Node.js 示例：

```javascript
const { PostgreSqlContainer } = require('@testcontainers/postgresql');

describe('数据库测试', () => {
  let container;

  beforeAll(async () => {
    container = await new PostgreSqlContainer().start();
  });

  afterAll(async () => {
    await container.stop();
  });

  it('应该连接到数据库', async () => {
    const connectionString = container.getConnectionUri();
    // 使用真实 PostgreSQL 测试
  });
});
```

## 为什么选择 Testcontainers？

- **真实依赖** - 测试真实数据库，而非 Mock
- **可复现** - 本地和 CI 环境一致
- **简单配置** - 简洁 API，最少配置
- **广泛采用** - 被数千个项目使用

## 定价

Testcontainers 完全**免费开源**。

## 相关资源

- [官方网站](https://testcontainers.com/)
- [GitHub 组织](https://github.com/testcontainers)
- [入门文档](https://testcontainers.com/getting-started/)
