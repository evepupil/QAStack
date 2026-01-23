# Robot Framework

Robot Framework 是通用的开源自动化测试框架，使用关键字驱动的方法，支持验收测试和机器人流程自动化 (RPA)。

## 主要特点

- **关键字驱动** - 易读的测试语法
- **可扩展** - Python/Java 库扩展
- **丰富库** - SeleniumLibrary、RequestsLibrary 等
- **报告** - 详细的 HTML 报告
- **标签** - 灵活的测试组织
- **数据驱动** - 支持数据驱动测试

## 快速开始

安装 Robot Framework：

```bash
pip install robotframework
pip install robotframework-seleniumlibrary
pip install robotframework-requests
```

创建测试文件 `login_tests.robot`：

```robot
*** Settings ***
Library    SeleniumLibrary
Suite Setup    Open Browser    ${URL}    chrome
Suite Teardown    Close Browser

*** Variables ***
${URL}    https://example.com
${USERNAME}    testuser
${PASSWORD}    password123

*** Test Cases ***
有效用户登录
    [Tags]    smoke    login
    输入用户名    ${USERNAME}
    输入密码    ${PASSWORD}
    点击登录按钮
    验证登录成功

无效密码登录失败
    [Tags]    login    negative
    输入用户名    ${USERNAME}
    输入密码    wrongpassword
    点击登录按钮
    验证显示错误信息    密码错误

*** Keywords ***
输入用户名
    [Arguments]    ${username}
    Input Text    id:username    ${username}

输入密码
    [Arguments]    ${password}
    Input Text    id:password    ${password}

点击登录按钮
    Click Button    id:login-button

验证登录成功
    Wait Until Page Contains    欢迎

验证显示错误信息
    [Arguments]    ${message}
    Page Should Contain    ${message}
```

API 测试示例：

```robot
*** Settings ***
Library    RequestsLibrary
Library    Collections

*** Test Cases ***
获取用户列表
    Create Session    api    https://api.example.com
    ${response}=    GET On Session    api    /users
    Status Should Be    200    ${response}
    ${users}=    Set Variable    ${response.json()}
    Length Should Be    ${users}    10

创建新用户
    Create Session    api    https://api.example.com
    ${data}=    Create Dictionary    name=张三    email=zhangsan@example.com
    ${response}=    POST On Session    api    /users    json=${data}
    Status Should Be    201    ${response}
```

运行测试：

```bash
# 运行所有测试
robot tests/

# 运行特定标签的测试
robot --include smoke tests/

# 生成报告到指定目录
robot --outputdir results tests/
```

## 为什么选择 Robot Framework？

- **易读** - 关键字语法易于理解
- **灵活** - 支持多种测试类型
- **可扩展** - 丰富的库生态
- **报告** - 自动生成详细报告

## 定价

- **免费** - 开源免费使用

## 相关资源

- [官方网站](https://robotframework.org/)
- [用户指南](https://robotframework.org/robotframework/latest/RobotFrameworkUserGuide.html)
- [标准库](https://robotframework.org/robotframework/)
