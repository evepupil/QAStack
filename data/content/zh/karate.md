# Karate

Karate 是开源的统一测试自动化框架，集成 API 测试、Mock、性能和 UI 自动化，无需编码即可使用。

## 主要特点

- **无需编码** - 使用类 Gherkin 语法编写测试
- **API 测试** - 全面的 REST/GraphQL 测试
- **Mock** - 内置 Mock 服务器
- **性能** - 负载测试能力
- **UI 测试** - 浏览器自动化支持
- **并行执行** - 并发运行测试

## 快速开始

添加 Karate 到项目：

```xml
<!-- Maven -->
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-junit5</artifactId>
    <version>1.4.1</version>
    <scope>test</scope>
</dependency>
```

编写功能文件：

```gherkin
Feature: 用户 API 测试

  Background:
    * url 'https://api.example.com'
    * header Authorization = 'Bearer ' + token

  Scenario: 根据 ID 获取用户
    Given path '/users/1'
    When method get
    Then status 200
    And match response.name == '张三'

  Scenario: 创建新用户
    Given path '/users'
    And request { name: '李四', email: 'lisi@example.com' }
    When method post
    Then status 201
    And match response.id == '#number'

  Scenario Outline: 多个用户
    Given path '/users/<id>'
    When method get
    Then status 200

    Examples:
      | id |
      | 1  |
      | 2  |
      | 3  |
```

运行测试：

```bash
mvn test -Dtest=UsersTest
```

## 为什么选择 Karate？

- **简单** - 无需编程
- **统一** - API、Mock、性能、UI 合一
- **强大** - 丰富的断言和匹配
- **高效** - 默认并行执行

## 定价

Karate 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://karatelabs.github.io/karate/)
- [文档](https://karatelabs.github.io/karate/)
- [GitHub 仓库](https://github.com/karatelabs/karate)
