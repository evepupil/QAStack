# axe-core

axe-core 是全球领先的 Web 无障碍测试引擎，支持各种平台的自动化无障碍测试。

## 主要特点

- **WCAG 合规** - 测试 WCAG 2.0、2.1 和 2.2 指南
- **零误报** - 高准确性，无误报结果
- **集成支持** - 与 Selenium、Playwright、Cypress 等配合使用
- **浏览器扩展** - Chrome 和 Firefox 扩展可用
- **CI/CD 兼容** - 易于集成到构建流水线

## 快速开始

安装 axe-core：

```bash
npm install axe-core
```

与 Playwright 配合使用：

```javascript
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test('不应有无障碍违规', async ({ page }) => {
  await page.goto('https://example.com');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

与 Cypress 配合使用：

```javascript
describe('无障碍测试', () => {
  it('应该是无障碍的', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
```

## 为什么选择 axe-core？

- **行业标准** - Microsoft、Google 等使用
- **可靠** - 零误报保证
- **全面** - 覆盖大部分 WCAG 要求
- **开源** - 任何项目免费使用

## 定价

axe-core 完全**免费开源**，采用 MPL 2.0 许可证。

## 相关资源

- [官方网站](https://www.deque.com/axe/)
- [GitHub 仓库](https://github.com/dequelabs/axe-core)
- [核心文档](https://www.deque.com/axe/core-documentation/)
