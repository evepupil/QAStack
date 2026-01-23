# Applitools

Applitools 是 AI 驱动的视觉测试平台，使用视觉 AI 检测有意义的视觉差异，忽略噪音干扰。

## 主要特点

- **视觉 AI** - 智能视觉比较
- **跨浏览器** - 跨浏览器和设备测试
- **布局测试** - 忽略动态内容
- **超快网格** - 并行渲染
- **根因分析** - 识别变更来源
- **集成** - 与任何测试框架配合

## 快速开始

安装 Applitools SDK：

```bash
npm install @applitools/eyes-playwright
```

与 Playwright 集成：

```javascript
const { test } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright');

test('AI 视觉测试', async ({ page }) => {
  const eyes = new Eyes();

  await eyes.open(page, '我的应用', '首页测试', {
    width: 1200,
    height: 800
  });

  await page.goto('https://example.com');
  await eyes.check('首页', Target.window().fully());

  await page.click('.login-button');
  await eyes.check('登录弹窗', Target.region('.modal'));

  await eyes.close();
});
```

CI 配置：

```javascript
// applitools.config.js
module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  batchName: '我的视觉测试',
  browser: [
    { width: 1200, height: 800, name: 'chrome' },
    { width: 1200, height: 800, name: 'firefox' },
    { deviceName: 'iPhone X' }
  ]
};
```

## 为什么选择 Applitools？

- **AI 驱动** - 减少误报
- **快速** - 超快并行渲染
- **全面** - 所有浏览器和设备
- **企业级** - 被财富 500 强企业使用

## 定价

- **免费版** - 有限免费额度
- **入门版** - $99/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://applitools.com/)
- [文档](https://applitools.com/docs/)
- [教程](https://applitools.com/tutorials/)
