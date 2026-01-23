# HeadSpin

HeadSpin is a global device cloud and AI-powered testing platform that lets you test on real devices worldwide with comprehensive performance insights.

## Key Features

- **Global Device Cloud**: Real devices in 90+ locations
- **AI-Powered Analytics**: Automated issue detection
- **Performance Insights**: Detailed performance metrics
- **Network Conditions**: Test under real network conditions
- **Audio/Video Quality**: AV quality testing
- **Regression Detection**: Automatic regression detection

## Quick Start

Sign up at headspin.io to get access.

Appium integration:

```javascript
const capabilities = {
  'headspin:selector': 'device_skus:"iPhone 14"',
  'headspin:capture': true,
  'headspin:autoDownloadChromedriver': true,
  platformName: 'iOS',
  'appium:automationName': 'XCUITest',
  'appium:app': 'https://example.com/app.ipa'
};

const driver = await remote({
  hostname: 'appium-dev.headspin.io',
  port: 443,
  path: '/v0/<api_token>/wd/hub',
  capabilities
});
```

Selenium integration:

```python
from selenium import webdriver

capabilities = {
    "browserName": "chrome",
    "headspin:selector": "device_skus:\"Samsung Galaxy S23\"",
    "headspin:capture": True
}

driver = webdriver.Remote(
    command_executor=f"https://appium-dev.headspin.io/v0/{api_token}/wd/hub",
    desired_capabilities=capabilities
)
```

Performance testing:

```javascript
// Start performance capture
const sessionId = driver.sessionId;

// Run your test
await driver.get('https://example.com');
// ... test actions

// Get performance data via API
const response = await fetch(
  `https://api.headspin.io/v0/sessions/${sessionId}/analysis`
);
const analysis = await response.json();
console.log('Load time:', analysis.loadTime);
console.log('CPU usage:', analysis.cpuUsage);
```

## Why Choose HeadSpin?

- **Global Coverage**: Test from anywhere in the world
- **Real Conditions**: Test under actual network conditions
- **AI Analytics**: Automatic issue detection
- **Enterprise**: Used by Fortune 500 companies

## Pricing

HeadSpin offers custom pricing based on usage. Contact sales for quotes.

## Learn More

- [Official Website](https://www.headspin.io/)
- [Documentation](https://docs.headspin.io/)
- [Platform Features](https://www.headspin.io/platform)
