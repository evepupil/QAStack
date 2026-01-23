# Pact

Pact is a consumer-driven contract testing framework that helps ensure service compatibility without integration environments.

## Key Features

- **Contract Testing**: Verify API contracts between services
- **Consumer-Driven**: Tests defined by API consumers
- **Pact Broker**: Centralized contract management
- **Multi-Language**: Java, JavaScript, Python, Ruby, Go, .NET
- **CI/CD Integration**: Easy pipeline integration
- **Bi-directional**: Provider and consumer verification

## Quick Start

JavaScript consumer test:

```javascript
const { Pact } = require('@pact-foundation/pact');

const provider = new Pact({
  consumer: 'UserService',
  provider: 'UserAPI',
  port: 1234
});

describe('User API', () => {
  beforeAll(() => provider.setup());
  afterAll(() => provider.finalize());

  it('returns user by ID', async () => {
    await provider.addInteraction({
      state: 'user exists',
      uponReceiving: 'a request for user 1',
      withRequest: {
        method: 'GET',
        path: '/users/1'
      },
      willRespondWith: {
        status: 200,
        body: {
          id: 1,
          name: 'John'
        }
      }
    });

    const response = await fetch('http://localhost:1234/users/1');
    expect(response.status).toBe(200);
  });
});
```

Provider verification:

```javascript
const { Verifier } = require('@pact-foundation/pact');

new Verifier({
  providerBaseUrl: 'http://localhost:3000',
  pactUrls: ['./pacts/userservice-userapi.json']
}).verifyProvider().then(() => {
  console.log('Pact Verification Complete!');
});
```

## Why Choose Pact?

- **Microservices**: Perfect for microservice architectures
- **Shift Left**: Catch integration issues early
- **Independent**: Test without running all services
- **Proven**: Used by major companies worldwide

## Pricing

- **Open Source**: Free
- **PactFlow**: SaaS Pact Broker, starting at $99/month

## Learn More

- [Official Website](https://pact.io/)
- [Documentation](https://docs.pact.io/)
- [GitHub Organization](https://github.com/pact-foundation)
