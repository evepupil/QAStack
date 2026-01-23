# Percy

Percy 是 BrowserStack 旗下的视觉测试和评审平台，通过像素级比较捕获视觉回归。

## 主要特点

- **视觉快照** - 捕获和比较截图
- **跨浏览器** - 多浏览器测试
- **响应式测试** - 测试不同视口尺寸
- **CI/CD 集成** - 集成任何 CI 流水线
- **评审工作流** - 批准/拒绝视觉变化
- **基线管理** - 自动更新基线

## 快速开始

安装 Percy：

```bash
npm install --save-dev @percy/cli
```

与 Playwright 集成：

```javascript
const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('首页视觉测试', async ({ page }) => {
  await page.goto('https://example.com');
  await percySnapshot(page, '首页');

  await page.click('.menu-button');
  await percySnapshot(page, '首页打开菜单');
});
```

与 Cypress 集成：

```javascript
describe('视觉测试', () => {
  it('捕获首页', () => {
    cy.visit('/');
    cy.percySnapshot('首页');

    cy.get('.product-card').first().click();
    cy.percySnapshot('产品详情');
  });
});
```

使用 Percy 运行：

```bash
# 设置 Percy token
export PERCY_TOKEN=your-token

# 运行带 Percy 的测试
npx percy exec -- playwright test
npx percy exec -- cypress run
```

## 为什么选择 Percy？

- **BrowserStack 支持** - 企业级可靠性
- **易于集成** - 与任何测试框架配合
- **协作** - 团队评审工作流
- **准确** - 智能比较算法

## 定价

- **免费版** - 5,000 截图/月
- **团队版** - $399/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://percy.io/)
- [文档](https://docs.percy.io/)
- [GitHub](https://github.com/percy)
