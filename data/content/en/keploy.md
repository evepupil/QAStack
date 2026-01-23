# Keploy

Keploy is an open-source, no-code API testing platform that automatically generates test cases and data mocks from real API traffic. It helps developers create comprehensive test suites without writing test code manually.

## Key Features

- **Auto Test Generation**: Record API calls and automatically create test cases
- **Smart Mocking**: Generate mocks from real dependency responses (databases, external APIs)
- **Zero Code Changes**: Integrate without modifying your application code
- **Language Agnostic**: Works with Go, Java, Node.js, Python, and more
- **CI/CD Ready**: Easy integration with existing pipelines

## Use Cases

Keploy is ideal for:

- Generating regression tests from production traffic
- Creating realistic mocks for external dependencies
- Accelerating API test coverage without manual effort
- Testing microservices with complex dependencies
- Shift-left testing in development workflows

## Quick Start

### Installation

```bash
# Using curl (Linux/macOS)
curl -O https://raw.githubusercontent.com/keploy/keploy/main/keploy.sh && source keploy.sh

# Using Docker
docker pull ghcr.io/keploy/keploy
```

### Recording Tests

```bash
# Record API calls
keploy record -c "your-app-command"

# Make some API calls to your application
curl http://localhost:8080/api/users

# Stop recording - tests are automatically saved
```

### Running Tests

```bash
# Replay recorded tests
keploy test -c "your-app-command"
```

## Advantages

- Dramatically reduces time to create test suites
- Captures real-world scenarios including edge cases
- Mocks are always in sync with actual responses
- No test maintenance burden from API changes
- Works with any backend framework

## Limitations

- Requires traffic to generate tests (cold start problem)
- Complex stateful scenarios may need manual adjustment
- Learning curve for advanced configuration
- Some dynamic data may require custom handling

## Pricing

Keploy is completely **free and open source** under the Apache 2.0 license.

## Related Resources

- [Official Documentation](https://keploy.io/docs/)
- [GitHub Repository](https://github.com/keploy/keploy)
- [Keploy Slack Community](https://join.slack.com/t/keploy/shared_invite/zt-12rfbvc01-o54cOG0X1G6eVJTuI_orSA)

## Summary

Keploy revolutionizes API testing by automatically generating tests from real traffic. It eliminates the tedious work of writing and maintaining API tests while ensuring comprehensive coverage of actual usage patterns. Perfect for teams looking to achieve high test coverage without slowing down development.
