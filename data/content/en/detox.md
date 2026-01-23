# Detox

Detox is a gray-box end-to-end testing framework for React Native mobile applications, designed to eliminate test flakiness through synchronization.

## Key Features

- **React Native Focus**: Built specifically for React Native apps
- **Auto Synchronization**: Automatically waits for app to be idle
- **Gray-Box Testing**: Access to app internals for better control
- **Cross-Platform**: Support for both iOS and Android
- **Jest Integration**: Seamless integration with Jest test runner

## Quick Start

Install Detox:

```bash
npm install detox --save-dev
npx detox init
```

Configure detox in `package.json`:

```json
{
  "detox": {
    "configurations": {
      "ios.sim.debug": {
        "device": "simulator",
        "app": "ios.debug"
      }
    }
  }
}
```

Write a test:

```javascript
describe('Login', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('should login successfully', async () => {
    await element(by.id('email')).typeText('test@example.com');
    await element(by.id('password')).typeText('password');
    await element(by.text('Login')).tap();
    await expect(element(by.text('Welcome'))).toBeVisible();
  });
});
```

## Why Choose Detox?

- **No Flakiness**: Synchronization eliminates race conditions
- **Fast Execution**: Optimized for React Native performance
- **Wix Backed**: Actively maintained by Wix engineering
- **CI Ready**: Easy integration with CI/CD pipelines

## Pricing

Detox is completely free and open-source under the MIT license.

## Learn More

- [Official Documentation](https://wix.github.io/Detox/)
- [GitHub Repository](https://github.com/wix/Detox)
- [React Native Testing Guide](https://wix.github.io/Detox/docs/introduction/getting-started)
