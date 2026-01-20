# Playwright

Playwright 是由 Microsoft 开发的现代化端到端测试框架，专为现代 Web 应用程序设计。它提供了强大的跨浏览器测试能力，支持 Chromium、Firefox 和 WebKit，让你能够用单一 API 测试所有主流浏览器。

## 主要特点

- **跨浏览器支持** - 支持 Chromium、Firefox 和 WebKit（Safari）
- **自动等待** - 智能等待元素可操作，减少测试不稳定性
- **强大的选择器** - 支持文本、CSS、XPath 等多种选择器策略
- **网络拦截** - 轻松模拟和修改网络请求
- **多标签页和多窗口** - 原生支持多个浏览器上下文
- **移动端模拟** - 模拟移动设备和触摸事件
- **截图和视频录制** - 自动捕获测试执行过程
- **并行执行** - 内置并行测试支持

## 使用场景

Playwright 适用于以下场景：

- 跨浏览器端到端测试
- 需要测试 Safari 的项目
- 复杂的用户交互场景
- 需要网络拦截和模拟的测试
- 多标签页和多窗口测试
- 移动端 Web 应用测试

## 快速开始

### 安装

```bash
npm init playwright@latest
```

### 基础用法

```javascript
import { test, expect } from '@playwright/test';

test('基本导航测试', async ({ page }) => {
  await page.goto('https://example.com');

  // 点击链接
  await page.click('text=Get started');

  // 验证 URL
  await expect(page).toHaveURL(/.*intro/);

  // 验证标题
  await expect(page.locator('h1')).toHaveText('Introduction');
});
```

### 跨浏览器测试

```javascript
// playwright.config.ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },
    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});
```

### 运行测试

```bash
# 运行所有测试
npx playwright test

# 运行特定浏览器
npx playwright test --project=chromium

# 调试模式
npx playwright test --debug

# 查看测试报告
npx playwright show-report
```

## 优势

- ✅ **全面的浏览器支持** - 唯一支持所有主流浏览器引擎的框架
- ✅ **Microsoft 官方支持** - 持续更新和维护
- ✅ **强大的 API** - 功能丰富且易于使用
- ✅ **优秀的文档** - 详细的官方文档和示例
- ✅ **内置测试运行器** - 无需额外配置
- ✅ **自动等待机制** - 减少测试中的竞态条件
- ✅ **并行执行** - 快速的测试执行速度
- ✅ **调试工具** - 强大的调试和追踪功能

## 局限性

- ⚠️ **学习曲线** - 功能丰富但需要时间掌握
- ⚠️ **资源消耗** - 多浏览器测试需要较多系统资源
- ⚠️ **社区规模** - 相比 Selenium 社区较小
- ⚠️ **浏览器版本** - 使用捆绑的浏览器版本，不是系统安装的版本

## 定价

Playwright 完全**免费开源**，采用 Apache 2.0 许可证。

## 高级功能

### 网络拦截

```javascript
test('API 模拟', async ({ page }) => {
  // 拦截 API 请求
  await page.route('**/api/users', route => {
    route.fulfill({
      status: 200,
      body: JSON.stringify([{ id: 1, name: 'Test User' }]),
    });
  });

  await page.goto('https://example.com');
});
```

### 移动端测试

```javascript
test('移动端测试', async ({ page }) => {
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto('https://example.com');

  // 模拟触摸事件
  await page.locator('.menu-button').tap();
});
```

### 多标签页测试

```javascript
test('多标签页', async ({ context }) => {
  const page1 = await context.newPage();
  const page2 = await context.newPage();

  await page1.goto('https://example.com');
  await page2.goto('https://example.org');

  // 在不同标签页之间切换和操作
});
```

## 相关资源

- [官方文档](https://playwright.dev/)
- [GitHub 仓库](https://github.com/microsoft/playwright)
- [API 参考](https://playwright.dev/docs/api/class-playwright)
- [示例项目](https://github.com/microsoft/playwright/tree/main/examples)
- [最佳实践](https://playwright.dev/docs/best-practices)

## 总结

Playwright 是一个功能强大的现代化测试框架，特别适合需要跨浏览器测试的项目。其全面的浏览器支持、强大的 API 和优秀的开发体验使其成为端到端测试的优秀选择。虽然学习曲线相对陡峭，但其提供的功能和可靠性完全值得投入时间学习。

如果你的项目需要测试 Safari 或需要强大的跨浏览器支持，Playwright 是最佳选择。
