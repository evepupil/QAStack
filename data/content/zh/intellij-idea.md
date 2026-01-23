# IntelliJ IDEA

IntelliJ IDEA 是 Java 开发者的终极 IDE，提供无与伦比的智能编码辅助，与 JUnit、TestNG、Selenium 等测试框架完美集成。

## 主要特点

- **智能补全** - 上下文感知的代码补全
- **重构** - 安全的自动化代码重构
- **内置工具** - 调试器、分析器、数据库工具
- **框架支持** - Spring、Jakarta EE、Micronaut
- **测试集成** - JUnit、TestNG、Spock 支持
- **版本控制** - Git、SVN、Mercurial 集成

## 快速开始

从 jetbrains.com 下载并安装。

直接在 IDE 中运行测试：
- 右键点击测试类 → 运行
- 使用装订线图标运行单个测试
- 在运行工具窗口查看结果

配置测试框架：

```xml
<!-- pom.xml -->
<dependencies>
    <dependency>
        <groupId>org.junit.jupiter</groupId>
        <artifactId>junit-jupiter</artifactId>
        <version>5.10.0</version>
        <scope>test</scope>
    </dependency>
</dependencies>
```

常用快捷键：
- `Ctrl+Shift+T`：创建/跳转到测试
- `Ctrl+Shift+F10`：运行当前测试
- `Ctrl+F5`：重新运行上次测试
- `Alt+Enter`：快速修复

## 为什么选择 IntelliJ IDEA？

- **智能** - 最佳的代码分析
- **高效** - 出色的开发体验
- **全面** - 所有工具集于一身
- **JetBrains** - 业界领先的 IDE 公司

## 定价

- **社区版** - 免费开源
- **旗舰版** - $599/年（首年，逐年递减）

## 相关资源

- [官方网站](https://www.jetbrains.com/idea/)
- [文档](https://www.jetbrains.com/help/idea/)
- [功能介绍](https://www.jetbrains.com/idea/features/)
