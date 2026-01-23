# Sauce Labs

Sauce Labs 是老牌的云测试平台，Selenium 的重要贡献者，为 Web 和移动应用提供高度稳定的自动化测试环境。

## 主要特点

- **云端浏览器** - 1000+ 浏览器/操作系统组合
- **真实设备** - iOS 和 Android 真机云
- **Sauce Connect** - 本地测试安全隧道
- **分析** - 详细的测试分析和洞察
- **视觉测试** - Screener 视觉测试
- **错误报告** - 全面的错误日志

## 快速开始

在 saucelabs.com 注册并配置测试：

```javascript
// Selenium WebDriver 示例
const capabilities = {
  browserName: 'chrome',
  browserVersion: 'latest',
  platformName: 'Windows 11',
  'sauce:options': {
    username: process.env.SAUCE_USERNAME,
    accessKey: process.env.SAUCE_ACCESS_KEY,
    name: 'My Test'
  }
};

const driver = await new Builder()
  .withCapabilities(capabilities)
  .usingServer('https://ondemand.saucelabs.com/wd/hub')
  .build();
```

使用 Sauce Connect 进行本地测试：

```bash
# 下载并运行 Sauce Connect
sc -u $SAUCE_USERNAME -k $SAUCE_ACCESS_KEY
```

在 CI/CD 中配置：

```yaml
# GitHub Actions
- name: 在 Sauce Labs 运行测试
  env:
    SAUCE_USERNAME: ${{ secrets.SAUCE_USERNAME }}
    SAUCE_ACCESS_KEY: ${{ secrets.SAUCE_ACCESS_KEY }}
  run: npm test
```

## 为什么选择 Sauce Labs？

- **先驱** - 最早的云测试平台之一
- **Selenium 核心** - Selenium 主要贡献者
- **企业级** - 被财富 500 强企业信任
- **稳定** - 高度可靠的测试基础设施

## 定价

- **免费试用** - 14 天免费试用
- **团队版** - $149/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://saucelabs.com/)
- [文档](https://docs.saucelabs.com/)
- [培训](https://training.saucelabs.com/)
