# Espresso

Espresso 是 Google 官方的 Android UI 测试框架，提供简洁的 API 用于编写可靠的 Android 应用 UI 测试。

## 主要特点

- **官方框架** - Google 官方支持
- **同步机制** - 自动同步等待
- **简洁 API** - 直观的测试 API
- **Hermetic 测试** - 隔离的测试环境
- **快速执行** - 在设备/模拟器上快速运行
- **IDE 集成** - Android Studio 深度集成

## 快速开始

添加依赖到 `build.gradle`：

```groovy
dependencies {
    androidTestImplementation 'androidx.test.espresso:espresso-core:3.5.1'
    androidTestImplementation 'androidx.test:runner:1.5.2'
    androidTestImplementation 'androidx.test:rules:1.5.0'
}

android {
    defaultConfig {
        testInstrumentationRunner "androidx.test.runner.AndroidJUnitRunner"
    }
}
```

编写测试：

```kotlin
import androidx.test.espresso.Espresso.onView
import androidx.test.espresso.action.ViewActions.*
import androidx.test.espresso.assertion.ViewAssertions.matches
import androidx.test.espresso.matcher.ViewMatchers.*
import androidx.test.ext.junit.rules.ActivityScenarioRule
import androidx.test.ext.junit.runners.AndroidJUnit4
import org.junit.Rule
import org.junit.Test
import org.junit.runner.RunWith

@RunWith(AndroidJUnit4::class)
class LoginActivityTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)

    @Test
    fun testSuccessfulLogin() {
        // 输入用户名
        onView(withId(R.id.username))
            .perform(typeText("testuser"), closeSoftKeyboard())

        // 输入密码
        onView(withId(R.id.password))
            .perform(typeText("password123"), closeSoftKeyboard())

        // 点击登录按钮
        onView(withId(R.id.login_button))
            .perform(click())

        // 验证跳转到主页
        onView(withId(R.id.welcome_text))
            .check(matches(withText("欢迎, testuser")))
    }

    @Test
    fun testEmptyPasswordError() {
        onView(withId(R.id.username))
            .perform(typeText("testuser"), closeSoftKeyboard())

        onView(withId(R.id.login_button))
            .perform(click())

        onView(withId(R.id.error_message))
            .check(matches(withText("请输入密码")))
    }
}
```

运行测试：

```bash
# 运行所有测试
./gradlew connectedAndroidTest

# 运行特定测试类
./gradlew connectedAndroidTest -Pandroid.testInstrumentationRunnerArguments.class=com.example.LoginActivityTest
```

## 为什么选择 Espresso？

- **官方支持** - Google 官方维护
- **可靠** - 自动同步机制减少 flaky 测试
- **快速** - 直接在设备上运行
- **集成** - 与 Android 开发工具链无缝集成

## 定价

- **免费** - 开源免费使用

## 相关资源

- [官方文档](https://developer.android.com/training/testing/espresso)
- [API 参考](https://developer.android.com/reference/androidx/test/espresso/package-summary)
- [示例项目](https://github.com/android/testing-samples)
