# Mockito

Mockito 是 Java 单元测试中最流行的 Mock 框架，提供简洁的 API 用于创建 Mock 对象和验证交互。

## 主要特点

- **简洁 API** - 可读、直观的 Mock 语法
- **验证** - 验证方法调用和参数
- **桩** - 定义返回值和行为
- **Spy** - 部分 Mock 真实对象
- **参数匹配器** - 灵活的参数匹配
- **注解** - @Mock、@InjectMocks、@Spy

## 快速开始

添加 Mockito 到项目：

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

使用 Mock 编写测试：

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
        // 准备
        User expectedUser = new User(1, "张三");
        when(userRepository.findById(1)).thenReturn(expectedUser);

        // 执行
        User result = userService.getUserById(1);

        // 验证
        assertEquals("张三", result.getName());
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

## 为什么选择 Mockito？

- **简单** - 易于学习和使用
- **可读** - 测试读起来像文档
- **强大** - 处理复杂 Mock 场景
- **标准** - Java Mock 的事实标准

## 定价

Mockito 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://site.mockito.org/)
- [文档](https://javadoc.io/doc/org.mockito/mockito-core/latest/org/mockito/Mockito.html)
- [GitHub 仓库](https://github.com/mockito/mockito)
