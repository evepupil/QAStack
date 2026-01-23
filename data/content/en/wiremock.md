# WireMock

WireMock is a flexible API mocking tool for testing that allows you to simulate HTTP-based APIs with request matching and response templating.

## Key Features

- **Stubbing**: Define mock responses for requests
- **Verification**: Verify requests were made
- **Record & Playback**: Record real API traffic
- **Fault Simulation**: Simulate delays and errors
- **Templating**: Dynamic response generation
- **Standalone**: Run as standalone server

## Quick Start

Add WireMock to your project:

```xml
<!-- Maven -->
<dependency>
    <groupId>org.wiremock</groupId>
    <artifactId>wiremock</artifactId>
    <version>3.3.1</version>
    <scope>test</scope>
</dependency>
```

Use in JUnit tests:

```java
import com.github.tomakehurst.wiremock.junit5.WireMockTest;
import static com.github.tomakehurst.wiremock.client.WireMock.*;

@WireMockTest(httpPort = 8089)
class ApiClientTest {

    @Test
    void testGetUser() {
        stubFor(get(urlEqualTo("/users/1"))
            .willReturn(aResponse()
                .withHeader("Content-Type", "application/json")
                .withBody("{\"id\": 1, \"name\": \"John\"}")));

        // Test your client against localhost:8089
    }

    @Test
    void testSlowResponse() {
        stubFor(get(urlEqualTo("/slow"))
            .willReturn(aResponse()
                .withFixedDelay(3000)
                .withStatus(200)));
    }
}
```

Standalone server:

```bash
java -jar wiremock-standalone-3.3.1.jar --port 8080

# Create stub via API
curl -X POST http://localhost:8080/__admin/mappings \
  -d '{
    "request": {"method": "GET", "url": "/hello"},
    "response": {"body": "Hello World"}
  }'
```

## Why Choose WireMock?

- **Powerful**: Comprehensive mocking features
- **Flexible**: Multiple deployment options
- **Popular**: Widely used in Java ecosystem
- **Well-documented**: Excellent documentation

## Pricing

WireMock is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Website](https://wiremock.org/)
- [Documentation](https://wiremock.org/docs/)
- [GitHub Repository](https://github.com/wiremock/wiremock)
