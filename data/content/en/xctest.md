# XCTest

XCTest is Apple's official testing framework for iOS, macOS, tvOS, and watchOS, fully integrated with Xcode for unit and UI testing.

## Key Features

- **Native Integration**: Built into Xcode
- **Unit Testing**: Test functions and methods
- **UI Testing**: Automate UI interactions
- **Performance Testing**: Measure code performance
- **Async Testing**: Test async code easily
- **Code Coverage**: Built-in coverage reports

## Quick Start

Create a test class:

```swift
import XCTest
@testable import MyApp

class UserServiceTests: XCTestCase {

    var sut: UserService!

    override func setUpWithError() throws {
        sut = UserService()
    }

    override func tearDownWithError() throws {
        sut = nil
    }

    func testFetchUserReturnsUser() async throws {
        let user = try await sut.fetchUser(id: 1)

        XCTAssertEqual(user.name, "John")
        XCTAssertEqual(user.email, "john@example.com")
    }

    func testInvalidIdThrowsError() async {
        do {
            _ = try await sut.fetchUser(id: -1)
            XCTFail("Expected error")
        } catch {
            XCTAssertEqual(error as? UserError, .invalidId)
        }
    }
}
```

UI Testing:

```swift
class LoginUITests: XCTestCase {

    let app = XCUIApplication()

    override func setUpWithError() throws {
        continueAfterFailure = false
        app.launch()
    }

    func testSuccessfulLogin() throws {
        let usernameField = app.textFields["username"]
        usernameField.tap()
        usernameField.typeText("testuser")

        let passwordField = app.secureTextFields["password"]
        passwordField.tap()
        passwordField.typeText("password123")

        app.buttons["Login"].tap()

        XCTAssertTrue(app.staticTexts["Welcome"].exists)
    }
}
```

Performance testing:

```swift
func testPerformance() {
    measure {
        // Code to measure
        _ = sut.processData(largeDataSet)
    }
}
```

## Why Choose XCTest?

- **Official**: Apple's official framework
- **Integrated**: Seamless Xcode integration
- **Complete**: Unit, UI, and performance testing
- **Swift Native**: First-class Swift support

## Pricing

XCTest is completely free, included with Xcode.

## Learn More

- [Official Documentation](https://developer.apple.com/documentation/xctest)
- [Testing Guide](https://developer.apple.com/library/archive/documentation/DeveloperTools/Conceptual/testing_with_xcode/)
- [WWDC Videos](https://developer.apple.com/videos/testing)
