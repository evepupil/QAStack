# Puppeteer

Puppeteer is Google's Node.js library for controlling Chrome/Chromium, perfect for web scraping, PDF generation, and automated UI testing.

## Key Features

- **Chrome Control**: Full control over Chrome/Chromium
- **Headless Mode**: Run without visible browser
- **Screenshots**: Capture full-page screenshots
- **PDF Generation**: Generate PDFs from pages
- **Network Control**: Intercept and modify requests
- **DevTools Protocol**: Direct CDP access

## Quick Start

Install Puppeteer:

```bash
npm install puppeteer
```

Basic automation:

```javascript
const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto('https://example.com');
  await page.screenshot({ path: 'screenshot.png' });

  // Click and type
  await page.click('#search-input');
  await page.type('#search-input', 'test query');
  await page.click('#search-button');

  // Wait for results
  await page.waitForSelector('.results');

  await browser.close();
})();
```

Generate PDF:

```javascript
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.goto('https://example.com');
await page.pdf({ path: 'page.pdf', format: 'A4' });
await browser.close();
```

Web scraping:

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

## Why Choose Puppeteer?

- **Official**: Maintained by Chrome team
- **Powerful**: Full browser automation
- **Fast**: Efficient Chrome DevTools Protocol
- **Popular**: Large community and ecosystem

## Pricing

Puppeteer is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://pptr.dev/)
- [Documentation](https://pptr.dev/guides)
- [GitHub Repository](https://github.com/puppeteer/puppeteer)
