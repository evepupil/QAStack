# Xray

Xray is a native test management app for Jira that allows you to manage manual and automated tests directly within your Jira workflow.

## Key Features

- **Jira Native**: Fully integrated with Jira
- **Test Types**: Manual, automated, BDD
- **Requirements**: Link tests to requirements
- **Execution**: Run tests and track results
- **Reports**: Built-in and custom reports
- **CI/CD**: Jenkins, GitLab, GitHub integration

## Quick Start

1. Install Xray from Atlassian Marketplace
2. Create test issues in Jira
3. Link tests to stories/requirements
4. Create test executions

Test case in Jira:

```
Issue Type: Test
Summary: Verify login with valid credentials
Precondition: User is registered
Steps:
  1. Navigate to login page
  2. Enter valid username
  3. Enter valid password
  4. Click login button
Expected Result: User is logged in successfully
```

Cucumber/BDD integration:

```gherkin
@REQ-123
Feature: User Login

  @TEST-456
  Scenario: Valid login
    Given I am on the login page
    When I enter valid credentials
    And I click the login button
    Then I should see the dashboard
```

CI/CD integration:

```yaml
# Import test results
- name: Import to Xray
  run: |
    curl -X POST \
      "https://xray.cloud.xpand-it.com/api/v2/import/execution/junit" \
      -H "Authorization: Bearer ${{ secrets.XRAY_TOKEN }}" \
      -F "file=@test-results.xml"
```

## Why Choose Xray?

- **Jira Integration**: Best-in-class Jira integration
- **Traceability**: Full requirements traceability
- **Flexibility**: Supports multiple test types
- **Agile**: Built for agile workflows

## Pricing

- **Cloud**: Starting at $10/user/month
- **Data Center**: Starting at $10,000/year
- **Free Trial**: 30-day trial available

## Learn More

- [Official Website](https://www.getxray.app/)
- [Documentation](https://docs.getxray.app/)
- [Atlassian Marketplace](https://marketplace.atlassian.com/apps/1211769/xray-test-management-for-jira)
