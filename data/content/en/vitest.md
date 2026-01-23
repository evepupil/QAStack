# Vitest

Vitest is a blazing fast unit test framework powered by Vite, offering native ESM, TypeScript support, and a Jest-compatible API.

## Key Features

- **Vite Powered**: Instant hot module replacement
- **Jest Compatible**: Drop-in replacement for Jest
- **TypeScript Native**: First-class TypeScript support
- **ESM First**: Native ES modules support
- **Watch Mode**: Smart file watching
- **UI Dashboard**: Beautiful test UI

## Quick Start

Install Vitest:

```bash
npm install -D vitest
```

Configure in `vite.config.ts`:

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    }
  }
})
```

Write tests:

```typescript
// sum.test.ts
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('adds negative numbers', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
```

Run tests:

```bash
# Run tests
npx vitest

# Watch mode
npx vitest --watch

# With UI
npx vitest --ui

# Coverage
npx vitest --coverage
```

## Why Choose Vitest?

- **Fast**: Fastest test runner available
- **Modern**: Built for modern JavaScript
- **Simple**: Zero config for Vite projects
- **Compatible**: Easy migration from Jest

## Pricing

Vitest is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://vitest.dev/)
- [Documentation](https://vitest.dev/guide/)
- [GitHub Repository](https://github.com/vitest-dev/vitest)
