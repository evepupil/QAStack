# LambdaTest

LambdaTest is an AI-powered cloud testing platform providing cross-browser testing on 3000+ real browsers and operating system combinations.

## Key Features

- **3000+ Environments**: Real browsers and OS combinations
- **AI-Powered**: Smart test analytics and insights
- **Live Testing**: Interactive manual testing
- **Automation**: Selenium, Cypress, Playwright support
- **Mobile Testing**: Real device cloud
- **Integrations**: CI/CD and project management tools

## Quick Start

Sign up at lambdatest.com and get your credentials.

Selenium integration:

```javascript
const capabilities = {
  browserName: 'Chrome',
  browserVersion: '120.0',
  'LT:Options': {
    platform: 'Windows 11',
    build: 'Build 1',
    name: 'Test 1',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY
  }
};

const driver = new webdriver.Builder()
  .usingServer('https://hub.lambdatest.com/wd/hub')
  .withCapabilities(capabilities)
  .build();
```

Playwright integration:

```javascript
const { chromium } = require('playwright');

const capabilities = {
  browserName: 'Chrome',
  browserVersion: 'latest',
  'LT:Options': {
    platform: 'Windows 10',
    build: 'Playwright Build',
    name: 'Playwright Test',
    user: process.env.LT_USERNAME,
    accessKey: process.env.LT_ACCESS_KEY
  }
};

const browser = await chromium.connect({
  wsEndpoint: `wss://cdp.lambdatest.com/playwright?capabilities=${encodeURIComponent(JSON.stringify(capabilities))}`
});
```

Cypress integration:

```javascript
// lambdatest-config.json
{
  "lambdatest_auth": {
    "username": "<username>",
    "access_key": "<access_key>"
  },
  "browsers": [
    {
      "browser": "Chrome",
      "platform": "Windows 10",
      "versions": ["latest"]
    }
  ]
}
```

## Why Choose LambdaTest?

- **Coverage**: Extensive browser/OS coverage
- **AI Features**: Smart test insights
- **Affordable**: Competitive pricing
- **Fast**: Quick test execution

## Pricing

- **Free**: 60 minutes/month
- **Live**: Starting at $15/month
- **Web Automation**: Starting at $79/month
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://www.lambdatest.com/)
- [Documentation](https://www.lambdatest.com/support/docs/)
- [Integrations](https://www.lambdatest.com/integrations)
