# Gatling

Gatling is a high-performance load testing framework built with Scala and Akka. It's designed to help you test your application's performance and resilience under heavy load.

## Key Features

- **High Performance**: Built on Akka async framework, capable of generating thousands of requests per second per node
- **Real-time Monitoring**: Beautiful HTML reports with real-time metrics during test execution
- **Scala DSL**: Elegant domain-specific language for writing test scenarios
- **HTTP/2 Support**: Full support for HTTP/2 protocol
- **WebSocket Support**: Test WebSocket connections with built-in support
- **CI/CD Integration**: Easy integration with Jenkins, GitLab CI, and other CI/CD tools

## Use Cases

Gatling is ideal for:

- **Web Application Load Testing**: Test REST APIs and web applications under heavy load
- **Stress Testing**: Determine breaking points and system limits
- **Endurance Testing**: Verify system stability over extended periods
- **Spike Testing**: Simulate sudden traffic spikes
- **Microservices Testing**: Test distributed systems and microservices architecture

## Quick Start

### Installation

```bash
# Download from https://gatling.io/
# Or use SDKMAN
sdk install gatling

# Or use Homebrew (macOS)
brew install gatling
```

### Basic Example

Create a simulation file `src/test/scala/GatlingSimulation.scala`:

```scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://api.example.com")
    .acceptHeader("application/json")

  val scn = scenario("Basic Load Test")
    .exec(http("Get Users")
      .get("/users")
      .check(status.is(200)))

  setUp(
    scn.inject(rampUsers(100) during (60 seconds))
  ).protocols(httpProtocol)
}
```

Run the simulation:

```bash
# Using Gatling bundle
bin/gatling.sh -s BasicSimulation

# Using Maven/Gradle
mvn gatling:test
# or
gradle gatlingRun
```

## Advantages

- **Excellent Performance**: Can handle massive loads with minimal resources
- **Developer-Friendly**: Scala DSL is expressive and readable
- **Real-time Feedback**: See response times and error rates in real-time
- **Great Reports**: Comprehensive HTML reports with detailed metrics
- **Active Community**: Open-source with strong community support
- **Enterprise Support**: Commercial edition available with additional features

## Limitations

- **Scala Knowledge**: Requires understanding Scala or willingness to learn
- **Learning Curve**: DSL and concepts take time to master
- **Java Dependency**: Requires JVM runtime environment
- **Resource Usage**: High-performance tests can consume significant CPU/memory

## Pricing

**Gatling is available in two editions:**

- **Open Source (Free)**: Full-featured load testing tool
- **Gatling Enterprise**: Paid version with additional features like:
  - Unlimited distributed testing
  - Advanced analytics
  - Cloud integration
  - Professional support

Visit https://gatling.io/pricing/ for detailed pricing information.

## Related Resources

- [Official Documentation](https://gatling.io/docs/gatling/)
- [GitHub Repository](https://github.com/gatling/gatling)
- [Getting Started Guide](https://gatling.io/docs/gatling/tutorials/quickstart/)
- [Gatling Academy](https://academy.gatling.io/)

## Summary

Gatling is a powerful, developer-centric load testing tool that excels at high-performance testing. Its Scala DSL provides an elegant way to write test scenarios, while its real-time monitoring and comprehensive reports help you understand your application's performance characteristics. Perfect for teams comfortable with the JVM ecosystem who need serious load testing capabilities.