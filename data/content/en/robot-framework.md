# Robot Framework

Robot Framework is a generic open-source automation framework that uses keyword-driven testing with a rich ecosystem of libraries for web, API, and more.

## Key Features

- **Keyword-Driven**: Human-readable test syntax
- **Extensible**: Python and Java libraries
- **Rich Ecosystem**: SeleniumLibrary, RequestsLibrary, etc.
- **Reports**: Detailed HTML reports and logs
- **Data-Driven**: Support for data-driven testing
- **Cross-Platform**: Windows, macOS, Linux

## Quick Start

Install Robot Framework:

```bash
pip install robotframework
pip install robotframework-seleniumlibrary
pip install robotframework-requests
```

Create a test file (`tests/login.robot`):

```robot
*** Settings ***
Library    SeleniumLibrary

*** Variables ***
${URL}         https://example.com
${BROWSER}     Chrome

*** Test Cases ***
Valid Login Should Succeed
    Open Browser    ${URL}    ${BROWSER}
    Input Text      id=username    testuser
    Input Password  id=password    secret123
    Click Button    id=login
    Page Should Contain    Welcome
    [Teardown]    Close Browser

Invalid Login Should Show Error
    Open Browser    ${URL}    ${BROWSER}
    Input Text      id=username    invalid
    Input Password  id=password    wrong
    Click Button    id=login
    Page Should Contain    Invalid credentials
    [Teardown]    Close Browser

*** Keywords ***
Login With Credentials
    [Arguments]    ${username}    ${password}
    Input Text      id=username    ${username}
    Input Password  id=password    ${password}
    Click Button    id=login
```

Run tests:

```bash
# Run all tests
robot tests/

# Run specific test file
robot tests/login.robot

# Generate report in specific directory
robot --outputdir results tests/
```

## Why Choose Robot Framework?

- **Readable**: Non-programmers can write tests
- **Flexible**: Test any type of application
- **Mature**: Over 15 years of development
- **Community**: Large, active community

## Pricing

Robot Framework is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://robotframework.org/)
- [User Guide](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html)
- [GitHub Repository](https://github.com/robotframework/robotframework)
