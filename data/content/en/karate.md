# Karate

Karate is an open-source unified test automation framework combining API testing, mocks, performance testing, and UI automation, all without coding.

## Key Features

- **No Code Required**: Write tests in Gherkin-like syntax
- **API Testing**: Comprehensive REST/GraphQL testing
- **Mocks**: Built-in mock server
- **Performance**: Load testing capabilities
- **UI Testing**: Browser automation support
- **Parallel Execution**: Run tests concurrently

## Quick Start

Add Karate to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>com.intuit.karate</groupId>
    <artifactId>karate-junit5</artifactId>
    <version>1.4.1</version>
    <scope>test</scope>
</dependency>
```

Write a feature file:

```gherkin
Feature: User API Tests

  Background:
    * url 'https://api.example.com'
    * header Authorization = 'Bearer ' + token

  Scenario: Get user by ID
    Given path '/users/1'
    When method get
    Then status 200
    And match response.name == 'John'

  Scenario: Create new user
    Given path '/users'
    And request { name: 'Jane', email: 'jane@example.com' }
    When method post
    Then status 201
    And match response.id == '#number'

  Scenario Outline: Multiple users
    Given path '/users/<id>'
    When method get
    Then status 200

    Examples:
      | id |
      | 1  |
      | 2  |
      | 3  |
```

Run tests:

```bash
mvn test -Dtest=UsersTest
```

## Why Choose Karate?

- **Easy**: No programming required
- **Unified**: API, mock, perf, UI in one tool
- **Powerful**: Rich assertion and matching
- **Fast**: Parallel execution by default

## Pricing

Karate is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://karatelabs.github.io/karate/)
- [Documentation](https://karatelabs.github.io/karate/)
- [GitHub Repository](https://github.com/karatelabs/karate)
