# Playwright

Playwright is a modern end-to-end testing framework developed by Microsoft that enables reliable testing across all modern browsers with a single API.

## Key Features

- **Cross-browser Testing**: Test on Chromium, Firefox, and WebKit with a single API
- **Auto-wait**: Automatically waits for elements to be ready before performing actions
- **Network Interception**: Mock and modify network requests
- **Parallel Execution**: Run tests in parallel across multiple browsers
- **Powerful Selectors**: CSS, text, accessibility, and custom selectors
- **Screenshots & Videos**: Capture screenshots and record videos of test runs

## Quick Start

Install Playwright:

```bash
npm init playwright@latest
```

Write your first test:

```javascript
import { test, expect } from '@playwright/test';

test('basic test', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const title = page.locator('.navbar__inner .navbar__title');
  await expect(title).toHaveText('Playwright');
});
```

## Why Choose Playwright?

- **Modern Architecture**: Built from the ground up for modern web applications
- **Reliable Testing**: Auto-waiting and web-first assertions eliminate flakiness
- **Developer Experience**: Excellent debugging tools and test generation
- **Active Development**: Regular updates and strong community support

## Pricing

Playwright is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Documentation](https://playwright.dev/)
- [GitHub Repository](https://github.com/microsoft/playwright)
- [Community Discord](https://aka.ms/playwright/discord)
