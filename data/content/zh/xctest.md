# XCTest

XCTest 是 Apple 官方的测试框架，用于为 iOS、macOS、watchOS 和 tvOS 应用编写单元测试和 UI 测试。

## 主要特点

- **官方框架** - Apple 官方支持
- **单元测试** - 测试代码逻辑
- **UI 测试** - 自动化 UI 测试
- **性能测试** - 测量代码性能
- **Xcode 集成** - 深度 IDE 集成
- **CI/CD** - 支持 Xcode Cloud

## 快速开始

创建测试文件：

```swift
import XCTest
@testable import MyApp

class UserServiceTests: XCTestCase {

    var userService: UserService!

    override func setUp() {
        super.setUp()
        userService = UserService()
    }

    override func tearDown() {
        userService = nil
        super.tearDown()
    }

    func testUserLogin() {
        // Given
        let username = "testuser"
        let password = "password123"

        // When
        let result = userService.login(username: username, password: password)

        // Then
        XCTAssertTrue(result.success)
        XCTAssertEqual(result.user?.username, username)
    }

    func testInvalidPassword() {
        let result = userService.login(username: "testuser", password: "wrong")

        XCTAssertFalse(result.success)
        XCTAssertNil(result.user)
        XCTAssertEqual(result.error, .invalidPassword)
    }
}
```

UI 测试：

```swift
import XCTest

class LoginUITests: XCTestCase {

    let app = XCUIApplication()

    override func setUp() {
        continueAfterFailure = false
        app.launch()
    }

    func testSuccessfulLogin() {
        // 输入用户名
        let usernameField = app.textFields["username"]
        usernameField.tap()
        usernameField.typeText("testuser")

        // 输入密码
        let passwordField = app.secureTextFields["password"]
        passwordField.tap()
        passwordField.typeText("password123")

        // 点击登录
        app.buttons["登录"].tap()

        // 验证欢迎文本
        XCTAssertTrue(app.staticTexts["欢迎, testuser"].exists)
    }

    func testLoginButtonDisabledWithEmptyFields() {
        let loginButton = app.buttons["登录"]
        XCTAssertFalse(loginButton.isEnabled)
    }
}
```

性能测试：

```swift
func testPerformanceOfDataProcessing() {
    let data = generateTestData(count: 10000)

    measure {
        _ = processData(data)
    }
}
```

## 为什么选择 XCTest？

- **官方支持** - Apple 官方维护
- **集成** - Xcode 深度集成
- **全面** - 单元、UI、性能测试
- **生态** - Apple 平台首选

## 定价

- **免费** - 随 Xcode 免费提供

## 相关资源

- [官方文档](https://developer.apple.com/documentation/xctest)
- [测试指南](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/)
- [WWDC 视频](https://developer.apple.com/videos/testing)
