# Puppeteer

Puppeteer 是 Google 出品的 Node.js 库，用于控制 Chrome/Chromium，适合网页抓取、PDF 生成和自动化 UI 测试。

## 主要特点

- **Chrome 控制** - 完全控制 Chrome/Chromium
- **无头模式** - 无需可见浏览器运行
- **截图** - 捕获全页面截图
- **PDF 生成** - 从页面生成 PDF
- **网络控制** - 拦截和修改请求
- **DevTools 协议** - 直接 CDP 访问

## 快速开始

安装 Puppeteer：

```bash
npm install puppeteer
```

基本自动化：

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });

  // 点击和输入
  await page.click('#search-input');
  await page.type('#search-input', '测试查询');
  await page.click('#search-button');

  // 等待结果
  await page.waitForSelector('.results');

  await browser.close();
})();
```

生成 PDF：

```javascript
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
await page.pdf({ path: 'page.pdf', format: 'A4' });
await browser.close();
```

网页抓取：

```javascript
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://example.com');

const titles = await page.$$eval('h2', elements =>
  elements.map(el => el.textContent)
);

console.log(titles);
await browser.close();
```

## 为什么选择 Puppeteer？

- **官方** - Chrome 团队维护
- **强大** - 完整的浏览器自动化
- **高效** - 高效的 Chrome DevTools 协议
- **流行** - 庞大的社区和生态

## 定价

Puppeteer 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方网站](https://pptr.dev/)
- [文档](https://pptr.dev/guides)
- [GitHub 仓库](https://github.com/puppeteer/puppeteer)
