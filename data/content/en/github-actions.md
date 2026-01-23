# GitHub Actions

GitHub Actions is GitHub's native CI/CD solution that allows you to automate workflows directly from your repository with powerful YAML configuration.

## Key Features

- **Native Integration**: Built into GitHub
- **YAML Workflows**: Simple, declarative syntax
- **Marketplace**: Thousands of reusable actions
- **Matrix Builds**: Test across multiple versions
- **Secrets Management**: Secure credential storage
- **Self-hosted Runners**: Run on your own infrastructure

## Quick Start

Create `.github/workflows/test.yml`:

```yaml
name: Tests

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4

      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: Install dependencies
        run: npm ci

      - name: Run tests
        run: npm test

      - name: Upload coverage
        uses: codecov/codecov-action@v3
        with:
          token: ${{ secrets.CODECOV_TOKEN }}
```

Playwright test workflow:

```yaml
name: Playwright Tests

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
      - run: npm ci
      - run: npx playwright install --with-deps
      - run: npx playwright test
      - uses: actions/upload-artifact@v3
        if: always()
        with:
          name: playwright-report
          path: playwright-report/
```

## Why Choose GitHub Actions?

- **Integrated**: No external CI tool needed
- **Free Tier**: Generous free minutes
- **Ecosystem**: Huge marketplace of actions
- **Microsoft Backed**: Reliable and well-maintained

## Pricing

- **Free**: 2,000 minutes/month for public repos
- **Team**: $4/user/month, 3,000 minutes
- **Enterprise**: Custom pricing

## Learn More

- [Official Documentation](https://docs.github.com/en/actions)
- [Marketplace](https://github.com/marketplace?type=actions)
- [Starter Workflows](https://github.com/actions/starter-workflows)
