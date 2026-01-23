# Allure Report

Allure Report 是灵活的轻量级多语言测试报告工具，提供清晰简洁的测试执行报告。

## 主要特点

- **美观报告** - 现代化、交互式测试报告
- **多语言** - Java、Python、JavaScript、C# 等
- **详细信息** - 步骤、附件、历史趋势
- **分类** - 按功能、故事、严重程度分类
- **集成** - 与主流测试框架集成
- **CI/CD** - Jenkins、GitHub Actions 等插件

## 快速开始

安装 Allure：

```bash
# macOS
brew install allure

# Windows (scoop)
scoop install allure

# npm
npm install -g allure-commandline
```

与 pytest 集成：

```python
import allure
import pytest

@allure.feature('用户管理')
@allure.story('用户登录')
@allure.severity(allure.severity_level.CRITICAL)
def test_user_login():
    with allure.step('打开登录页面'):
        # 打开页面
        pass

    with allure.step('输入用户名和密码'):
        # 输入凭证
        pass

    with allure.step('点击登录按钮'):
        # 点击登录
        pass

    with allure.step('验证登录成功'):
        # 验证结果
        assert True

@allure.feature('用户管理')
@allure.story('用户注册')
def test_user_registration():
    allure.attach('测试数据', '用户名: testuser', allure.attachment_type.TEXT)
    # 测试逻辑
    assert True
```

生成报告：

```bash
# 运行测试并生成结果
pytest --alluredir=allure-results

# 生成并打开报告
allure serve allure-results

# 生成静态报告
allure generate allure-results -o allure-report
```

## 为什么选择 Allure？

- **开源免费** - 完全开源
- **美观** - 现代化 UI 设计
- **灵活** - 支持多种语言和框架
- **详细** - 丰富的测试信息展示

## 定价

- **免费** - 开源免费使用
- **Allure TestOps** - 企业版，提供更多功能

## 相关资源

- [官方网站](https://allurereport.org/)
- [文档](https://docs.qameta.io/allure/)
- [GitHub](https://github.com/allure-framework/allure2)
