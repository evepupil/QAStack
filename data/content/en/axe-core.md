# axe-core

axe-core is the world's leading accessibility testing engine, enabling automated accessibility testing for web applications across various platforms.

## Key Features

- **WCAG Compliance**: Tests against WCAG 2.0, 2.1, and 2.2 guidelines
- **Zero False Positives**: High accuracy with no false positive results
- **Integration Ready**: Works with Selenium, Playwright, Cypress, and more
- **Browser Extensions**: Chrome and Firefox extensions available
- **CI/CD Compatible**: Easy integration into build pipelines

## Quick Start

Install axe-core:

```bash
npm install axe-core
```

Use with Playwright:

```javascript
const { test, expect } = require('@playwright/test');
const AxeBuilder = require('@axe-core/playwright').default;

test('should not have accessibility violations', async ({ page }) => {
  await page.goto('https://example.com');

  const accessibilityScanResults = await new AxeBuilder({ page }).analyze();

  expect(accessibilityScanResults.violations).toEqual([]);
});
```

Use with Cypress:

```javascript
describe('Accessibility Tests', () => {
  it('should be accessible', () => {
    cy.visit('/');
    cy.injectAxe();
    cy.checkA11y();
  });
});
```

## Why Choose axe-core?

- **Industry Standard**: Used by Microsoft, Google, and more
- **Reliable**: Zero false positives guarantee
- **Comprehensive**: Covers most WCAG requirements
- **Open Source**: Free to use in any project

## Pricing

axe-core is completely free and open-source under the MPL 2.0 license.

## Learn More

- [Official Website](https://www.deque.com/axe/)
- [GitHub Repository](https://github.com/dequelabs/axe-core)
- [Documentation](https://www.deque.com/axe/core-documentation/)
