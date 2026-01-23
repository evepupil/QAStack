# JUnit 5

JUnit 5 是 Java 最流行的测试框架的新一代版本，为 JVM 上的开发者端测试提供现代化基础。

## 主要特点

- **模块化架构** - JUnit Platform、Jupiter 和 Vintage
- **参数化测试** - 使用多个输入测试
- **动态测试** - 运行时生成测试
- **嵌套测试** - 层次化组织测试
- **扩展** - 强大的扩展模型
- **断言** - 丰富的断言库

## 快速开始

添加 JUnit 5 到项目：

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

编写测试：

```java
import org.junit.jupiter.api.*;
import static org.junit.jupiter.api.Assertions.*;

class CalculatorTest {

    @Test
    @DisplayName("加法应该正确工作")
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
            // 嵌套测试
        }
    }
}
```

## 为什么选择 JUnit 5？

- **现代化** - 为 Java 8+ 特性构建
- **灵活** - 可扩展架构
- **IDE 支持** - 优秀的 IDE 集成
- **标准** - Java 测试的标准

## 定价

JUnit 5 完全**免费开源**，采用 EPL 2.0 许可证。

## 相关资源

- [官方网站](https://junit.org/junit5/)
- [用户指南](https://junit.org/junit5/docs/current/user-guide/)
- [GitHub 仓库](https://github.com/junit-team/junit5)
