# Playwright

Playwright is a modern end-to-end testing framework developed by Microsoft. It enables reliable end-to-end testing for modern web applications across all major browsers.

## Key Features

- **Cross-browser testing**: Test on Chromium, Firefox, and WebKit with a single API
- **Auto-wait**: Playwright automatically waits for elements to be ready before performing actions
- **Network interception**: Mock and modify network requests
- **Screenshots and videos**: Capture screenshots and record videos of test runs
- **Mobile emulation**: Test mobile web applications with device emulation

## Getting Started

Install Playwright using npm:

```bash
npm install -D @playwright/test
```

Create your first test:

```javascript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
```

## Why Choose Playwright?

Playwright is ideal for teams looking for a modern, reliable testing framework with excellent developer experience and comprehensive browser support.
