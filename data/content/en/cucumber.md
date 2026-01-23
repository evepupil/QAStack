# Cucumber

Cucumber is a BDD testing framework using Gherkin syntax that allows you to write tests in plain language that both developers and stakeholders understand.

## Key Features

- **Gherkin Syntax**: Write tests in plain language
- **Living Documentation**: Tests serve as documentation
- **Multi-Language**: Java, JavaScript, Ruby, and more
- **Step Definitions**: Map steps to code
- **Scenarios**: Organize tests as scenarios
- **Data Tables**: Handle complex test data

## Quick Start

Install Cucumber (JavaScript):

```bash
npm install --save-dev @cucumber/cucumber
```

Create feature file (`features/login.feature`):

```gherkin
Feature: User Login
  As a registered user
  I want to login to my account
  So that I can access my dashboard

  Background:
    Given I am on the login page

  Scenario: Successful login with valid credentials
    When I enter username "testuser"
    And I enter password "password123"
    And I click the login button
    Then I should see the dashboard
    And I should see "Welcome, testuser"

  Scenario Outline: Failed login with invalid credentials
    When I enter username "<username>"
    And I enter password "<password>"
    And I click the login button
    Then I should see an error message "<error>"

    Examples:
      | username | password | error                |
      | invalid  | wrong    | Invalid credentials  |
      | testuser | wrong    | Incorrect password   |
      |          | test     | Username is required |
```

Create step definitions (`features/step_definitions/login.steps.js`):

```javascript
const { Given, When, Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I am on the login page', async function() {
  await this.page.goto('https://example.com/login');
});

When('I enter username {string}', async function(username) {
  await this.page.fill('#username', username);
});

When('I enter password {string}', async function(password) {
  await this.page.fill('#password', password);
});

When('I click the login button', async function() {
  await this.page.click('#login-button');
});

Then('I should see the dashboard', async function() {
  await expect(this.page.url()).to.include('/dashboard');
});
```

Run tests:

```bash
npx cucumber-js
```

## Why Choose Cucumber?

- **Collaboration**: Bridge developers and business
- **Documentation**: Tests are documentation
- **Readable**: Anyone can understand tests
- **Proven**: Widely used for BDD

## Pricing

Cucumber is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://cucumber.io/)
- [Documentation](https://cucumber.io/docs/)
- [GitHub Organization](https://github.com/cucumber)
