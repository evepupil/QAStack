# Applitools

Applitools is an AI-powered visual testing platform that uses Visual AI to detect meaningful visual differences and ignore noise.

## Key Features

- **Visual AI**: Intelligent visual comparison
- **Cross-Browser**: Test across browsers and devices
- **Layout Testing**: Ignore dynamic content
- **Ultrafast Grid**: Parallel rendering
- **Root Cause Analysis**: Identify change sources
- **Integrations**: Works with any test framework

## Quick Start

Install Applitools SDK:

```bash
npm install @applitools/eyes-playwright
```

Integrate with Playwright:

```javascript
const { test } = require('@playwright/test');
const { Eyes, Target } = require('@applitools/eyes-playwright');

test('visual test with AI', async ({ page }) => {
  const eyes = new Eyes();

  await eyes.open(page, 'My App', 'Homepage Test', {
    width: 1200,
    height: 800
  });

  await page.goto('https://example.com');
  await eyes.check('Homepage', Target.window().fully());

  await page.click('.login-button');
  await eyes.check('Login Modal', Target.region('.modal'));

  await eyes.close();
});
```

Configure for CI:

```javascript
// applitools.config.js
module.exports = {
  apiKey: process.env.APPLITOOLS_API_KEY,
  batchName: 'My Visual Tests',
  browser: [
    { width: 1200, height: 800, name: 'chrome' },
    { width: 1200, height: 800, name: 'firefox' },
    { deviceName: 'iPhone X' }
  ]
};
```

## Why Choose Applitools?

- **AI-Powered**: Reduces false positives
- **Fast**: Ultrafast parallel rendering
- **Comprehensive**: All browsers and devices
- **Enterprise**: Used by Fortune 500 companies

## Pricing

- **Free**: Limited free tier
- **Starter**: Starting at $99/month
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://applitools.com/)
- [Documentation](https://applitools.com/docs/)
- [Tutorials](https://applitools.com/tutorials/)
