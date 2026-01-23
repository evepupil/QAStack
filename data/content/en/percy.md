# Percy

Percy is a visual testing and review platform by BrowserStack that helps catch visual regressions with pixel-by-pixel comparisons.

## Key Features

- **Visual Snapshots**: Capture and compare screenshots
- **Cross-Browser**: Test across multiple browsers
- **Responsive Testing**: Test different viewport sizes
- **CI/CD Integration**: Integrate with any CI pipeline
- **Review Workflow**: Approve/reject visual changes
- **Baseline Management**: Automatic baseline updates

## Quick Start

Install Percy:

```bash
npm install --save-dev @percy/cli
```

Integrate with Playwright:

```javascript
const { test } = require('@playwright/test');
const percySnapshot = require('@percy/playwright');

test('homepage visual test', async ({ page }) => {
  await page.goto('https://example.com');
  await percySnapshot(page, 'Homepage');

  await page.click('.menu-button');
  await percySnapshot(page, 'Homepage with menu open');
});
```

Integrate with Cypress:

```javascript
describe('Visual Tests', () => {
  it('captures homepage', () => {
    cy.visit('/');
    cy.percySnapshot('Homepage');

    cy.get('.product-card').first().click();
    cy.percySnapshot('Product Detail');
  });
});
```

Run with Percy:

```bash
# Set Percy token
export PERCY_TOKEN=your-token

# Run tests with Percy
npx percy exec -- playwright test
npx percy exec -- cypress run
```

## Why Choose Percy?

- **BrowserStack Backed**: Enterprise reliability
- **Easy Integration**: Works with any test framework
- **Collaboration**: Team review workflow
- **Accurate**: Smart comparison algorithms

## Pricing

- **Free**: 5,000 screenshots/month
- **Team**: Starting at $399/month
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://percy.io/)
- [Documentation](https://docs.percy.io/)
- [GitHub](https://github.com/percy)
