# WireMock

WireMock 是灵活的 API Mock 工具，模拟 HTTP API 进行测试，支持请求匹配和响应模板。

## 主要特点

- **桩服务** - 为请求定义 Mock 响应
- **验证** - 验证请求是否发送
- **录制回放** - 录制真实 API 流量
- **故障模拟** - 模拟延迟和错误
- **模板** - 动态响应生成
- **独立运行** - 作为独立服务器运行

## 快速开始

添加 WireMock 到项目：

```xml
<!-- Maven -->
<dependency>
    <groupId>org.wiremock</groupId>
    <artifactId>wiremock</artifactId>
    <version>3.3.1</version>
    <scope>test</scope>
</dependency>
```

在 JUnit 测试中使用：

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
                .withBody("{\"id\": 1, \"name\": \"张三\"}")));

        // 对 localhost:8089 测试你的客户端
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

独立服务器：

```bash
java -jar wiremock-standalone-3.3.1.jar --port 8080

# 通过 API 创建桩
curl -X POST http://localhost:8080/__admin/mappings \
  -d '{
    "request": {"method": "GET", "url": "/hello"},
    "response": {"body": "Hello World"}
  }'
```

## 为什么选择 WireMock？

- **强大** - 全面的 Mock 功能
- **灵活** - 多种部署选项
- **流行** - Java 生态广泛使用
- **文档完善** - 优秀的文档

## 定价

WireMock 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方网站](https://wiremock.org/)
- [文档](https://wiremock.org/docs/)
- [GitHub 仓库](https://github.com/wiremock/wiremock)
