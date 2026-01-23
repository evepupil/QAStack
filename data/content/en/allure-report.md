# Allure Report

Allure Report is a flexible, lightweight test report framework that generates beautiful, comprehensive reports for any test framework.

## Key Features

- **Beautiful Reports**: Clean, interactive HTML reports
- **Framework Agnostic**: Works with JUnit, TestNG, Pytest, Jest, and more
- **Rich Features**: Attachments, steps, categories, history
- **Trends**: Track test trends over time
- **Categories**: Group failures by type
- **Environment Info**: Display test environment details

## Quick Start

Install Allure command-line:

```bash
# macOS
brew install allure

# Windows (scoop)
scoop install allure

# npm
npm install -g allure-commandline
```

Java/JUnit 5 integration:

```xml
<dependency>
    <groupId>io.qameta.allure</groupId>
    <artifactId>allure-junit5</artifactId>
    <version>2.24.0</version>
    <scope>test</scope>
</dependency>
```

```java
@Epic("Users")
@Feature("Login")
class LoginTest {

    @Test
    @Story("Valid Login")
    @Description("Test login with valid credentials")
    @Severity(SeverityLevel.CRITICAL)
    void testValidLogin() {
        Allure.step("Enter username", () -> {
            // test code
        });
        Allure.step("Enter password", () -> {
            // test code
        });
    }
}
```

Generate report:

```bash
# Generate report from results
allure generate allure-results -o allure-report

# Open report
allure open allure-report

# Serve report (auto-opens browser)
allure serve allure-results
```

## Why Choose Allure?

- **Beautiful**: Professional, modern reports
- **Flexible**: Works with any test framework
- **Informative**: Rich metadata and attachments
- **Open Source**: Free and community-driven

## Pricing

Allure Report is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://allurereport.org/)
- [Documentation](https://allurereport.org/docs/)
- [GitHub Repository](https://github.com/allure-framework/allure2)
