# Testcontainers

Testcontainers is a library that provides lightweight, throwaway instances of databases, message brokers, or anything else that can run in a Docker container for integration testing.

## Key Features

- **Docker-Based**: Spin up real dependencies in containers
- **Language Support**: Java, Go, Node.js, Python, .NET, Rust
- **Pre-built Modules**: Ready-to-use modules for popular services
- **Test Isolation**: Each test gets a fresh container
- **Automatic Cleanup**: Containers are removed after tests

## Quick Start

Java example with JUnit 5:

```java
@Testcontainers
class MyIntegrationTest {

    @Container
    static PostgreSQLContainer<?> postgres = new PostgreSQLContainer<>("postgres:15")
        .withDatabaseName("testdb")
        .withUsername("test")
        .withPassword("test");

    @Test
    void testDatabaseConnection() {
        String jdbcUrl = postgres.getJdbcUrl();
        // Use jdbcUrl to connect and test
    }
}
```

Node.js example:

```javascript
const { PostgreSqlContainer } = require('@testcontainers/postgresql');

describe('Database Tests', () => {
  let container;

  beforeAll(async () => {
    container = await new PostgreSqlContainer().start();
  });

  afterAll(async () => {
    await container.stop();
  });

  it('should connect to database', async () => {
    const connectionString = container.getConnectionUri();
    // Test with real PostgreSQL
  });
});
```

## Why Choose Testcontainers?

- **Real Dependencies**: Test against actual databases, not mocks
- **Reproducible**: Same environment locally and in CI
- **Easy Setup**: Simple API, minimal configuration
- **Wide Adoption**: Used by thousands of projects

## Pricing

Testcontainers is completely free and open-source.

## Learn More

- [Official Website](https://testcontainers.com/)
- [GitHub Organization](https://github.com/testcontainers)
- [Documentation](https://testcontainers.com/getting-started/)
