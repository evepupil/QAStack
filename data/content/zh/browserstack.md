# BrowserStack

BrowserStack 是全球最大的云测试平台，提供 3000+ 真实设备和浏览器用于手动和自动化测试。

## 主要特点

- **真实设备** - 3000+ 真实设备和浏览器
- **Live 测试** - 交互式手动测试
- **Automate** - Selenium 和 Playwright 云
- **App Live** - 移动应用测试
- **Percy** - 视觉测试集成
- **无障碍** - 自动化无障碍测试

## 快速开始

在 browserstack.com 注册并获取凭证。

Selenium 示例：

```javascript
const webdriver = require('selenium-webdriver');

const capabilities = {
  'bstack:options': {
    'os': 'Windows',
    'osVersion': '11',
    'browserVersion': 'latest',
    'userName': process.env.BROWSERSTACK_USERNAME,
    'accessKey': process.env.BROWSERSTACK_ACCESS_KEY
  },
  'browserName': 'Chrome'
};

const driver = new webdriver.Builder()
  .usingServer('https://hub-cloud.browserstack.com/wd/hub')
  .withCapabilities(capabilities)
  .build();

await driver.get('https://example.com');
```

Playwright 示例：

```javascript
const { chromium } = require('playwright');

const browser = await chromium.connect({
  wsEndpoint: `wss://cdp.browserstack.com/playwright?caps=${encodeURIComponent(JSON.stringify({
    'browser': 'chrome',
    'os': 'windows',
    'os_version': '11',
    'browserstack.username': process.env.BROWSERSTACK_USERNAME,
    'browserstack.accessKey': process.env.BROWSERSTACK_ACCESS_KEY
  }))}`
});
```

## 为什么选择 BrowserStack？

- **覆盖全面** - 最全面的设备覆盖
- **可靠** - 企业级基础设施
- **集成** - 与所有主流框架配合
- **支持** - 24/7 客户支持

## 定价

- **Live** - $29/月起
- **Automate** - $129/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://www.browserstack.com/)
- [文档](https://www.browserstack.com/docs/)
- [价格](https://www.browserstack.com/pricing)
