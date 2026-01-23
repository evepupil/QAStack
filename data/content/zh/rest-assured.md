# REST Assured

REST Assured 是简化 REST 服务测试的 Java DSL，流式 API 设计让编写接口测试直观易读。

## 主要特点

- **流式 API** - 可读、可链式的语法
- **请求规范** - 可复用的请求模板
- **响应验证** - 丰富的断言能力
- **JSON/XML 支持** - 解析和验证响应
- **认证** - OAuth、Basic、Digest 支持
- **日志** - 详细的请求/响应日志

## 快速开始

添加 REST Assured 到项目：

```xml
<!-- Maven -->
<dependency>
    <groupId>io.rest-assured</groupId>
    <artifactId>rest-assured</artifactId>
    <version>5.3.2</version>
    <scope>test</scope>
</dependency>
```

编写 API 测试：

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
            .body("name", equalTo("张三"))
            .body("email", containsString("@"));
    }

    @Test
    public void testCreateUser() {
        String requestBody = """
            {
                "name": "李四",
                "email": "lisi@example.com"
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

## 为什么选择 REST Assured？

- **Java 标准** - 最流行的 Java API 测试库
- **可读性好** - BDD 风格语法
- **功能强大** - 全面的验证选项
- **集成好** - 与 JUnit、TestNG 配合

## 定价

REST Assured 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方网站](https://rest-assured.io/)
- [文档](https://rest-assured.io/#documentation)
- [GitHub 仓库](https://github.com/rest-assured/rest-assured)
