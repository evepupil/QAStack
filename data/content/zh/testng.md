# TestNG

TestNG 是受 JUnit 和 NUnit 启发的测试框架，引入了依赖测试、并行执行和数据驱动等强大功能。

## 主要特点

- **注解** - 丰富的测试注解
- **并行执行** - 并发运行测试
- **数据提供者** - 数据驱动测试支持
- **依赖** - 定义测试方法依赖
- **分组** - 将测试组织成组
- **监听器** - 自定义测试行为

## 快速开始

添加 TestNG 到项目：

```xml
<!-- Maven -->
<dependency>
    <groupId>org.testng</groupId>
    <artifactId>testng</artifactId>
    <version>7.8.0</version>
    <scope>test</scope>
</dependency>
```

编写测试：

```java
import org.testng.annotations.*;
import static org.testng.Assert.*;

public class SampleTest {

    @BeforeClass
    public void setUp() {
        // 设置代码
    }

    @Test(priority = 1)
    public void testMethod1() {
        assertEquals(1 + 1, 2);
    }

    @Test(dependsOnMethods = "testMethod1")
    public void testMethod2() {
        // 在 testMethod1 之后运行
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
        // 数据驱动测试
    }
}
```

TestNG XML 配置：

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

## 为什么选择 TestNG？

- **灵活** - 比 JUnit 功能更多
- **并行测试** - 内置并行执行
- **企业级** - Selenium 自动化的流行选择
- **报告** - 详细的 HTML 报告

## 定价

TestNG 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方网站](https://testng.org/)
- [文档](https://testng.org/doc/documentation-main.html)
- [GitHub 仓库](https://github.com/testng-team/testng)
