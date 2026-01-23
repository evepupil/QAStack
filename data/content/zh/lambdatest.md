# LambdaTest

LambdaTest 是云端跨浏览器测试平台，提供 3000+ 真实浏览器和操作系统组合，用于 Web 和移动应用测试。

## 主要特点

- **跨浏览器** - 3000+ 浏览器/OS 组合
- **实时测试** - 交互式浏览器测试
- **自动化** - Selenium、Cypress、Playwright
- **移动测试** - 真机和模拟器
- **截图** - 批量截图比较
- **集成** - Jira、Slack、CI/CD

## 快速开始

Selenium 测试配置：

```python
from selenium import webdriver

# LambdaTest 配置
username = "YOUR_USERNAME"
access_key = "YOUR_ACCESS_KEY"

capabilities = {
    "browserName": "Chrome",
    "browserVersion": "latest",
    "LT:Options": {
        "username": username,
        "accessKey": access_key,
        "platformName": "Windows 10",
        "build": "Python 测试构建",
        "name": "登录测试",
        "resolution": "1920x1080",
        "network": True,
        "console": True
    }
}

driver = webdriver.Remote(
    command_executor=f"https://{username}:{access_key}@hub.lambdatest.com/wd/hub",
    options=webdriver.ChromeOptions().set_capability("LT:Options", capabilities["LT:Options"])
)

# 运行测试
driver.get("https://example.com")
assert "Example" in driver.title
driver.quit()
```

Playwright 配置：

```javascript
// playwright.config.js
const caps = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright 构建',
    name: '我的测试',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY
  }
};

module.exports = {
  use: {
    connectOptions: {
      wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(caps))}`
    }
  }
};
```

Cypress 配置：

```javascript
// lambdatest-config.json
{
  "lambdatest_auth": {
    "username": "YOUR_USERNAME",
    "access_key": "YOUR_ACCESS_KEY"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["latest"]
    },
    {
      "browser": "Firefox",
      "platform": "macOS Monterey",
      "versions": ["latest"]
    }
  ],
  "run_settings": {
    "cypress_config_file": "cypress.config.js",
    "build_name": "Cypress 测试构建",
    "parallels": 5
  }
}
```

运行测试：

```bash
# 运行 Cypress 测试
lambdatest-cypress run

# 运行 Playwright 测试
npx playwright test
```

## 为什么选择 LambdaTest？

- **覆盖广** - 3000+ 浏览器组合
- **快速** - 并行测试执行
- **易用** - 简单的配置和集成
- **支持** - 24/7 客户支持

## 定价

- **免费版** - 有限免费额度
- **实时版** - $15/月起
- **自动化版** - $99/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://www.lambdatest.com/)
- [文档](https://www.lambdatest.com/support/docs/)
- [Selenium 教程](https://www.lambdatest.com/selenium-automation)
