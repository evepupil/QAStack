# JUnit 5

JUnit 5 is the next generation of the most popular testing framework for Java, offering a modern foundation for developer-side testing on the JVM.

## Key Features

- **Modular Architecture**: JUnit Platform, Jupiter, and Vintage
- **Parameterized Tests**: Test with multiple inputs
- **Dynamic Tests**: Generate tests at runtime
- **Nested Tests**: Organize tests hierarchically
- **Extensions**: Powerful extension model
- **Assertions**: Rich assertion library

## Quick Start

Add JUnit 5 to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>org.junit.jupiter</groupId>
    <artifactId>junit-jupiter</artifactId>
    <version>5.10.0</version>
    <scope>test</scope>
</dependency>
```

```groovy
// Gradle
testImplementation 'org.junit.jupiter:junit-jupiter:5.10.0'
```

Write tests:

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @Test
    @DisplayName("Addition should work correctly")
    void additionTest() {
        Calculator calc = new Calculator();
        assertEquals(4, calc.add(2, 2));
    }

    @ParameterizedTest
    @ValueSource(ints = {1, 2, 3, 4, 5})
    void parameterizedTest(int number) {
        assertTrue(number > 0);
    }

    @Nested
    class WhenEmpty {
        @Test
        void shouldReturnZero() {
            // nested test
        }
    }
}
```

## Why Choose JUnit 5?

- **Modern**: Built for Java 8+ features
- **Flexible**: Extensible architecture
- **IDE Support**: Excellent IDE integration
- **Standard**: The standard for Java testing

## Pricing

JUnit 5 is completely free and open-source under the EPL 2.0 license.

## Learn More

- [Official Website](https://junit.org/junit5/)
- [User Guide](https://junit.org/junit5/docs/current/user-guide/)
- [GitHub Repository](https://github.com/junit-team/junit5)
