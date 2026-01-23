# Cucumber

Cucumber 是行为驱动开发 (BDD) 工具，允许你用自然语言 (Gherkin) 编写测试规范，促进业务人员与技术人员的协作。

## 主要特点

- **Gherkin 语法** - 自然语言测试规范
- **多语言** - Java、JavaScript、Ruby 等
- **BDD 工作流** - 促进团队协作
- **活文档** - 测试即文档
- **可执行规范** - 规范自动验证
- **集成** - 与各种测试框架集成

## 快速开始

安装 Cucumber (JavaScript)：

```bash
npm install --save-dev @cucumber/cucumber
```

创建特性文件 `features/login.feature`：

```gherkin
# language: zh-CN
功能: 用户登录
  作为一个注册用户
  我想要登录系统
  以便访问我的账户

  场景: 有效凭证登录成功
    假如 我在登录页面
    当 我输入用户名 "testuser"
    而且 我输入密码 "password123"
    而且 我点击登录按钮
    那么 我应该看到欢迎信息 "欢迎, testuser"

  场景: 无效密码登录失败
    假如 我在登录页面
    当 我输入用户名 "testuser"
    而且 我输入密码 "wrongpassword"
    而且 我点击登录按钮
    那么 我应该看到错误信息 "密码错误"

  场景大纲: 多组数据测试
    假如 我在登录页面
    当 我输入用户名 "<username>"
    而且 我输入密码 "<password>"
    而且 我点击登录按钮
    那么 我应该看到 "<result>"

    例子:
      | username  | password    | result         |
      | testuser  | password123 | 欢迎, testuser |
      | admin     | admin123    | 欢迎, admin    |
      | invalid   | wrong       | 用户名不存在   |
```

实现步骤定义 `features/steps/login.steps.js`：

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('我在登录页面', async function() {
    await this.page.goto('https://example.com/login');
});

When('我输入用户名 {string}', async function(username) {
    await this.page.fill('#username', username);
});

When('我输入密码 {string}', async function(password) {
    await this.page.fill('#password', password);
});

When('我点击登录按钮', async function() {
    await this.page.click('#login-button');
});

Then('我应该看到欢迎信息 {string}', async function(message) {
    const text = await this.page.textContent('.welcome');
    expect(text).to.equal(message);
});

Then('我应该看到错误信息 {string}', async function(message) {
    const error = await this.page.textContent('.error');
    expect(error).to.equal(message);
});
```

运行测试：

```bash
npx cucumber-js
```

## 为什么选择 Cucumber？

- **协作** - 促进业务与技术协作
- **可读性** - 非技术人员也能理解
- **活文档** - 测试即是文档
- **通用** - 支持多种语言

## 定价

- **免费** - 开源免费使用
- **CucumberStudio** - 企业协作平台

## 相关资源

- [官方网站](https://cucumber.io/)
- [文档](https://cucumber.io/docs/)
- [Gherkin 参考](https://cucumber.io/docs/gherkin/reference/)
