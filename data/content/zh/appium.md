# Appium

Appium 是一个开源的跨平台移动端自动化测试框架，支持 iOS、Android 和 Windows 平台的原生、混合和移动 Web 应用测试。

## 主要特点

- **跨平台支持** - 使用统一 API 测试 iOS、Android 和 Windows 应用
- **WebDriver 协议** - 基于标准 WebDriver 协议，学习成本低
- **多语言支持** - 支持 Java、Python、JavaScript、Ruby、C# 等
- **无需修改应用** - 无需重新编译或修改待测应用
- **真机和模拟器** - 同时支持真实设备和模拟器

## 快速开始

安装 Appium：

```bash
npm install -g appium
appium driver install uiautomator2
appium driver install xcuitest
```

基本测试示例：

```javascript
const { remote } = require('webdriverio');

const capabilities = {
  platformName: 'Android',
  'appium:deviceName': 'emulator-5554',
  'appium:app': '/path/to/app.apk',
  'appium:automationName': 'UiAutomator2'
};

const driver = await remote({
  path: '/wd/hub',
  port: 4723,
  capabilities
});

// 点击登录按钮
await driver.click('~login-button');
```

## 为什么选择 Appium？

- **行业标准** - 移动端自动化测试事实上的标准
- **庞大社区** - 丰富的生态系统和完善的文档
- **灵活架构** - 基于插件的可扩展架构
- **企业级** - 被全球众多大型企业采用

## 定价

Appium 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方文档](https://appium.io/docs/en/latest/)
- [GitHub 仓库](https://github.com/appium/appium)
- [社区论坛](https://discuss.appium.io/)
