# Espresso

Espresso is Android's official UI testing framework that allows you to write reliable UI tests with automatic synchronization and a simple API.

## Key Features

- **Auto Synchronization**: Waits for UI to be idle
- **Simple API**: Intuitive, readable test code
- **Fast**: Runs on device/emulator
- **Reliable**: Reduces flaky tests
- **Hermetic**: Isolated test environment
- **AndroidX**: Part of AndroidX Test library

## Quick Start

Add dependencies:

```groovy
// build.gradle
androidTestImplementation 'androidx.test.espresso:espresso-core:3.5.1'
androidTestImplementation 'androidx.test.espresso:espresso-intents:3.5.1'
androidTestImplementation 'androidx.test:runner:1.5.2'
androidTestImplementation 'androidx.test:rules:1.5.0'
```

Write tests:

```kotlin
@RunWith(AndroidJUnit4::class)
class LoginActivityTest {

    @get:Rule
    val activityRule = ActivityScenarioRule(LoginActivity::class.java)

    @Test
    fun loginWithValidCredentials() {
        // Enter username
        onView(withId(R.id.username))
            .perform(typeText("testuser"), closeSoftKeyboard())

        // Enter password
        onView(withId(R.id.password))
            .perform(typeText("password123"), closeSoftKeyboard())

        // Click login button
        onView(withId(R.id.loginButton))
            .perform(click())

        // Verify success
        onView(withText("Welcome"))
            .check(matches(isDisplayed()))
    }

    @Test
    fun showErrorOnInvalidCredentials() {
        onView(withId(R.id.username))
            .perform(typeText("wrong"), closeSoftKeyboard())

        onView(withId(R.id.password))
            .perform(typeText("wrong"), closeSoftKeyboard())

        onView(withId(R.id.loginButton))
            .perform(click())

        onView(withText("Invalid credentials"))
            .check(matches(isDisplayed()))
    }
}
```

Run tests:

```bash
./gradlew connectedAndroidTest
```

## Why Choose Espresso?

- **Official**: Google's recommended framework
- **Reliable**: Built-in synchronization
- **Fast**: No external server required
- **Integrated**: Works with Android Studio

## Pricing

Espresso is completely free and open-source under the Apache 2.0 license.

## Learn More

- [Official Documentation](https://developer.android.com/training/testing/espresso)
- [Android Testing Guide](https://developer.android.com/training/testing)
- [Espresso Cheat Sheet](https://developer.android.com/training/testing/espresso/cheat-sheet)
