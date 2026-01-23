# Mockito

Mockito is the most popular mocking framework for Java unit tests, offering a clean and simple API for creating mocks and verifying interactions.

## Key Features

- **Clean API**: Readable, intuitive mocking syntax
- **Verification**: Verify method calls and arguments
- **Stubbing**: Define return values and behaviors
- **Spies**: Partial mocking of real objects
- **Argument Matchers**: Flexible argument matching
- **Annotations**: @Mock, @InjectMocks, @Spy

## Quick Start

Add Mockito to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-core</artifactId>
    <version>5.7.0</version>
    <scope>test</scope>
</dependency>
<dependency>
    <groupId>org.mockito</groupId>
    <artifactId>mockito-junit-jupiter</artifactId>
    <version>5.7.0</version>
    <scope>test</scope>
</dependency>
```

Write tests with mocks:

```java
import static org.mockito.Mockito.*;
import org.junit.jupiter.api.Test;
import org.mockito.Mock;
import org.mockito.InjectMocks;

@ExtendWith(MockitoExtension.class)
class UserServiceTest {

    @Mock
    private UserRepository userRepository;

    @InjectMocks
    private UserService userService;

    @Test
    void shouldReturnUserById() {
        // Arrange
        User expectedUser = new User(1, "John");
        when(userRepository.findById(1)).thenReturn(expectedUser);

        // Act
        User result = userService.getUserById(1);

        // Assert
        assertEquals("John", result.getName());
        verify(userRepository).findById(1);
    }

    @Test
    void shouldThrowOnNotFound() {
        when(userRepository.findById(anyInt()))
            .thenThrow(new UserNotFoundException());

        assertThrows(UserNotFoundException.class,
            () -> userService.getUserById(999));
    }
}
```

## Why Choose Mockito?

- **Simple**: Easy to learn and use
- **Readable**: Tests read like documentation
- **Powerful**: Handles complex mocking scenarios
- **Standard**: De facto standard for Java mocking

## Pricing

Mockito is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://site.mockito.org/)
- [Documentation](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html)
- [GitHub Repository](https://github.com/mockito/mockito)
