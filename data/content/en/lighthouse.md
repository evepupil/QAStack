# Google Lighthouse

Lighthouse is an open-source automated tool for improving the quality of web pages, providing audits for performance, accessibility, SEO, and best practices.

## Key Features

- **Performance**: Core Web Vitals and loading metrics
- **Accessibility**: WCAG compliance checking
- **Best Practices**: Security and modern web standards
- **SEO**: Search engine optimization audits
- **PWA**: Progressive Web App validation
- **Multiple Modes**: CLI, DevTools, CI integration

## Quick Start

Run in Chrome DevTools:
1. Open Chrome DevTools (F12)
2. Go to Lighthouse tab
3. Select categories to audit
4. Click "Analyze page load"

Run via CLI:

```bash
# Install
npm install -g lighthouse

# Run audit
lighthouse https://example.com --output html --output-path ./report.html

# With specific categories
lighthouse https://example.com --only-categories=performance,accessibility
```

Run in CI/CD:

```bash
# Install Lighthouse CI
npm install -g @lhci/cli

# Run in CI
lhci autorun
```

Lighthouse CI configuration:

```json
{
  "ci": {
    "collect": {
      "url": ["https://example.com/"]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

## Why Choose Lighthouse?

- **Google Standard**: Official Google tool
- **Comprehensive**: All aspects of web quality
- **Actionable**: Clear recommendations
- **Free**: Completely open-source

## Pricing

Lighthouse is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Documentation](https://developers.google.com/web/tools/lighthouse)
- [GitHub Repository](https://github.com/GoogleChrome/lighthouse)
- [web.dev](https://web.dev/)
