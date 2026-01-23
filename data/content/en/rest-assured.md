# REST Assured

REST Assured is a Java DSL for simplifying testing of REST services, with a fluent API design that makes writing API tests intuitive and readable.

## Key Features

- **Fluent API**: Readable, chainable syntax
- **Request Specification**: Reusable request templates
- **Response Validation**: Rich assertion capabilities
- **JSON/XML Support**: Parse and validate responses
- **Authentication**: OAuth, Basic, Digest support
- **Logging**: Detailed request/response logging

## Quick Start

Add REST Assured to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.2</version>
    <scope>test</scope>
</dependency>
```

Write API tests:

```java
import static io.restassured.RestAssured.*;
import static org.hamcrest.Matchers.*;

public class ApiTests {

    @Test
    public void testGetUser() {
        given()
            .baseUri("https://api.example.com")
            .header("Authorization", "Bearer token")
        .when()
            .get("/users/1")
        .then()
            .statusCode(200)
            .body("name", equalTo("John"))
            .body("email", containsString("@"));
    }

    @Test
    public void testCreateUser() {
        String requestBody = """
            {
                "name": "Jane",
                "email": "jane@example.com"
            }
            """;

        given()
            .contentType("application/json")
            .body(requestBody)
        .when()
            .post("/users")
        .then()
            .statusCode(201)
            .body("id", notNullValue());
    }
}
```

## Why Choose REST Assured?

- **Java Standard**: Most popular Java API testing library
- **Readable**: BDD-style syntax
- **Powerful**: Comprehensive validation options
- **Integrated**: Works with JUnit, TestNG

## Pricing

REST Assured is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://rest-assured.io/)
- [Documentation](https://rest-assured.io/#documentation)
- [GitHub Repository](https://github.com/rest-assured/rest-assured)
