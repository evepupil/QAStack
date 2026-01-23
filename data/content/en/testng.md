# TestNG

TestNG is a testing framework inspired by JUnit and NUnit, introducing powerful features like dependency testing, parallel execution, and data-driven testing.

## Key Features

- **Annotations**: Rich set of test annotations
- **Parallel Execution**: Run tests concurrently
- **Data Providers**: Data-driven testing support
- **Dependencies**: Define test method dependencies
- **Groups**: Organize tests into groups
- **Listeners**: Customize test behavior

## Quick Start

Add TestNG to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.8.0</version>
    <scope>test</scope>
</dependency>
```

Write tests:

```java
import org.testng.annotations.*;
import static org.testng.Assert.*;

public class SampleTest {

    @BeforeClass
    public void setUp() {
        // Setup code
    }

    @Test(priority = 1)
    public void testMethod1() {
        assertEquals(1 + 1, 2);
    }

    @Test(dependsOnMethods = "testMethod1")
    public void testMethod2() {
        // Runs after testMethod1
    }

    @DataProvider(name = "testData")
    public Object[][] createData() {
        return new Object[][] {
            {"user1", "pass1"},
            {"user2", "pass2"}
        };
    }

    @Test(dataProvider = "testData")
    public void testLogin(String user, String pass) {
        // Data-driven test
    }
}
```

TestNG XML configuration:

```xml
<!DOCTYPE suite SYSTEM "https://testng.org/testng-1.0.dtd">
<suite name="TestSuite" parallel="methods" thread-count="4">
    <test name="UnitTests">
        <classes>
            <class name="com.example.SampleTest"/>
        </classes>
    </test>
</suite>
```

## Why Choose TestNG?

- **Flexible**: More features than JUnit
- **Parallel Testing**: Built-in parallel execution
- **Enterprise Ready**: Popular for Selenium automation
- **Reporting**: Detailed HTML reports

## Pricing

TestNG is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://testng.org/)
- [Documentation](https://testng.org/doc/documentation-main.html)
- [GitHub Repository](https://github.com/testng-team/testng)
