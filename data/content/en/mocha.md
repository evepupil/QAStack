# Mocha

Mocha is a feature-rich JavaScript test framework running on Node.js and in the browser, making asynchronous testing simple and flexible.

## Key Features

- **Flexible**: Works with any assertion library
- **Async Support**: Promises, async/await, callbacks
- **Browser Support**: Run tests in browsers
- **Reporters**: Multiple built-in reporters
- **Hooks**: before, after, beforeEach, afterEach
- **Watch Mode**: Re-run tests on file changes

## Quick Start

Install Mocha:

```bash
npm install --save-dev mocha
```

Write tests:

```javascript
// test/example.test.js
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when value is not present', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('Async Tests', function() {
  it('should work with async/await', async function() {
    const result = await asyncFunction();
    assert.equal(result, 'expected');
  });

  it('should work with promises', function() {
    return promiseFunction().then(result => {
      assert.equal(result, 'expected');
    });
  });
});
```

Configure in package.json:

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

Run tests:

```bash
npm test

# With specific options
mocha --watch --reporter spec
```

## Why Choose Mocha?

- **Mature**: Battle-tested over many years
- **Flexible**: Use any assertion/mock library
- **Simple**: Easy to learn and use
- **Ecosystem**: Works well with Chai, Sinon, etc.

## Pricing

Mocha is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://mochajs.org/)
- [Documentation](https://mochajs.org/#getting-started)
- [GitHub Repository](https://github.com/mochajs/mocha)
