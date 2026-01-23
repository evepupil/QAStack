# Stryker Mutator

Stryker Mutator is a mutation testing framework that helps improve your tests by introducing bugs (mutants) and checking if your tests catch them.

## Key Features

- **Mutation Testing**: Inject bugs to test your tests
- **Multi-Language**: JavaScript, TypeScript, C#, Scala
- **Detailed Reports**: HTML and JSON reports
- **Fast**: Incremental mode for faster runs
- **Integrations**: Works with Jest, Mocha, Karma, etc.
- **Configuration**: Fine-tune mutation operators

## Quick Start

Install Stryker:

```bash
npm install --save-dev @stryker-mutator/core
npx stryker init
```

Configuration (`stryker.conf.json`):

```json
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "packageManager": "npm",
  "reporters": ["html", "clear-text", "progress"],
  "testRunner": "jest",
  "coverageAnalysis": "perTest",
  "mutate": [
    "src/**/*.js",
    "!src/**/*.test.js"
  ]
}
```

Run mutation testing:

```bash
npx stryker run
```

Example mutations:

```javascript
// Original code
function isAdult(age) {
  return age >= 18;
}

// Mutants generated:
// 1. return age > 18;   (boundary mutation)
// 2. return age <= 18;  (negation mutation)
// 3. return true;       (boolean replacement)
// 4. return false;      (boolean replacement)

// If your tests pass with any mutant, you need better tests!
```

Understanding results:

```
Mutation score: 85%
- Killed: 85 (tests caught the bug)
- Survived: 15 (tests missed the bug)
- No coverage: 0
- Timeout: 0
```

## Why Choose Stryker?

- **Test Quality**: Improve test effectiveness
- **Confidence**: Know your tests actually work
- **Coverage++**: Go beyond line coverage
- **Active**: Well-maintained and documented

## Pricing

Stryker Mutator is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://stryker-mutator.io/)
- [Documentation](https://stryker-mutator.io/docs/)
- [GitHub Repository](https://github.com/stryker-mutator/stryker-js)
