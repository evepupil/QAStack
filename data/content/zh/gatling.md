# Gatling

Gatling 是一个基于 Scala 和 Akka 构建的高性能负载测试框架。它旨在帮助您测试应用程序在高负载下的性能和弹性。

## 主要特点

- **卓越性能**：基于 Akka 异步框架构建，单节点即可生成每秒数千个请求
- **实时监控**：在测试执行期间提供实时指标和精美的 HTML 报告
- **Scala DSL**：优雅的领域特定语言用于编写测试场景
- **HTTP/2 支持**：完全支持 HTTP/2 协议
- **WebSocket 支持**：内置支持 WebSocket 连接测试
- **CI/CD 集成**：轻松集成 Jenkins、GitLab CI 等持续集成工具

## 使用场景

Gatling 非常适合以下场景：

- **Web 应用负载测试**：测试 REST API 和 Web 应用在高负载下的表现
- **压力测试**：确定系统的极限和临界点
- **持久性测试**：验证系统在长时间运行下的稳定性
- **尖峰测试**：模拟突发的流量激增
- **微服务测试**：测试分布式系统和微服务架构

## 快速开始

### 安装

```bash
# 从官网下载 https://gatling.io/
# 或使用 SDKMAN
sdk install gatling

# 或使用 Homebrew (macOS)
brew install gatling
```

### 基础示例

创建模拟文件 `src/test/scala/GatlingSimulation.scala`：

```scala
import io.gatling.core.Predef._
import io.gatling.http.Predef._
import scala.concurrent.duration._

class BasicSimulation extends Simulation {

  val httpProtocol = http
    .baseUrl("https://api.example.com")
    .acceptHeader("application/json")

  val scn = scenario("基础负载测试")
    .exec(http("获取用户")
      .get("/users")
      .check(status.is(200)))

  setUp(
    scn.inject(rampUsers(100) during (60 seconds))
  ).protocols(httpProtocol)
}
```

运行模拟：

```bash
# 使用 Gatling 安装包
bin/gatling.sh -s BasicSimulation

# 使用 Maven/Gradle
mvn gatling:test
# 或
gradle gatlingRun
```

## 优势

- **性能出色**：使用最少的资源即可处理大量负载
- **开发者友好**：Scala DSL 表达力强且易于阅读
- **实时反馈**：实时查看响应时间和错误率
- **优秀报告**：包含详细指标的综合 HTML 报告
- **活跃社区**：拥有强大社区支持的开源项目
- **企业支持**：提供具有额外功能的商业版本

## 局限性

- **需要 Scala 知识**：需要了解 Scala 或愿意学习
- **学习曲线**：DSL 和概念需要时间掌握
- **Java 依赖**：需要 JVM 运行时环境
- **资源占用**：高性能测试可能消耗大量 CPU/内存

## 定价

**Gatling 提供两个版本：**

- **开源版（免费）**：功能完整的负载测试工具
- **Gatling Enterprise（付费版）**：提供额外功能，如：
  - 无限分布式测试
  - 高级分析功能
  - 云集成
  - 专业支持

访问 https://gatling.io/pricing/ 了解详细定价信息。

## 相关资源

- [官方文档](https://gatling.io/docs/gatling/)
- [GitHub 仓库](https://github.com/gatling/gatling)
- [入门指南](https://gatling.io/docs/gatling/tutorials/quickstart/)
- [Gatling 学院](https://academy.gatling.io/)

## 总结

Gatling 是一个强大的、以开发者为中心的负载测试工具，在高性能测试方面表现出色。它的 Scala DSL 提供了一种优雅的方式来编写测试场景，而其实时监控和全面的报告帮助您了解应用程序的性能特征。非常适合熟悉 JVM 生态系统且需要强大负载测试能力的团队使用。