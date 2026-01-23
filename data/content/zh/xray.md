# Xray

Xray 是 Jira 原生测试管理应用，允许你在 Jira 工作流中直接管理手动和自动化测试。

## 主要特点

- **Jira 原生** - 与 Jira 完全集成
- **测试类型** - 手动、自动化、BDD
- **需求** - 将测试与需求关联
- **执行** - 运行测试并跟踪结果
- **报告** - 内置和自定义报告
- **CI/CD** - Jenkins、GitLab、GitHub 集成

## 快速开始

1. 从 Atlassian Marketplace 安装 Xray
2. 在 Jira 中创建测试问题
3. 将测试与用户故事/需求关联
4. 创建测试执行

Jira 中的测试用例：

```
问题类型: Test
摘要: 验证有效凭证登录
前置条件: 用户已注册
步骤:
  1. 导航到登录页面
  2. 输入有效用户名
  3. 输入有效密码
  4. 点击登录按钮
预期结果: 用户成功登录
```

Cucumber/BDD 集成：

```gherkin
@REQ-123
Feature: 用户登录

  @TEST-456
  Scenario: 有效登录
    Given 我在登录页面
    When 我输入有效凭证
    And 我点击登录按钮
    Then 我应该看到仪表板
```

CI/CD 集成：

```yaml
# 导入测试结果
- name: 导入到 Xray
  run: |
    curl -X POST \
      "https://xray.cloud.xpand-it.com/api/v2/import/execution/junit" \
      -H "Authorization: Bearer ${{ secrets.XRAY_TOKEN }}" \
      -F "file=@test-results.xml"
```

## 为什么选择 Xray？

- **Jira 集成** - 最佳的 Jira 集成
- **可追溯** - 完整的需求追溯
- **灵活** - 支持多种测试类型
- **敏捷** - 为敏捷工作流构建

## 定价

- **云端版** - $10/用户/月起
- **数据中心版** - $10,000/年起
- **免费试用** - 30 天试用

## 相关资源

- [官方网站](https://www.getxray.app/)
- [文档](https://docs.getxray.app/)
- [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1211769/xray-test-management-for-jira)
