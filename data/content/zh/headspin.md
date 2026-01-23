# HeadSpin

HeadSpin 是 AI 驱动的数字体验测试平台，提供全球真实设备云和性能监控，用于移动应用和 Web 测试。

## 主要特点

- **全球设备云** - 全球真实设备访问
- **AI 分析** - AI 驱动的问题检测
- **性能监控** - 深度性能分析
- **网络模拟** - 真实网络条件测试
- **回归测试** - 自动回归分析
- **集成** - Appium、Selenium、CI/CD

## 快速开始

Appium 配置：

```python
from appium import webdriver

# HeadSpin 配置
headspin_api_token = "YOUR_API_TOKEN"
device_url = f"https://appium-dev.headspin.io/v0/{headspin_api_token}/wd/hub"

capabilities = {
    "platformName": "Android",
    "deviceName": "Samsung Galaxy S21",
    "automationName": "UiAutomator2",
    "app": "https://example.com/app.apk",
    "headspin:capture": True,
    "headspin:testName": "登录测试"
}

driver = webdriver.Remote(device_url, capabilities)

# 执行测试
driver.find_element("id", "username").send_keys("testuser")
driver.find_element("id", "password").send_keys("password123")
driver.find_element("id", "login").click()

# 获取性能数据
session_id = driver.session_id
driver.quit()

print(f"查看结果: https://ui.headspin.io/sessions/{session_id}")
```

iOS 测试示例：

```python
ios_caps = {
    "platformName": "iOS",
    "deviceName": "iPhone 14 Pro",
    "automationName": "XCUITest",
    "bundleId": "com.example.app",
    "headspin:capture": True,
    "headspin:networkCapture": True
}

driver = webdriver.Remote(device_url, ios_caps)

# 测试流程
driver.find_element("accessibility id", "登录").tap()
# ... 更多测试步骤

driver.quit()
```

性能测试集成：

```python
import requests

# 获取会话性能数据
api_url = f"https://api.headspin.io/v0/sessions/{session_id}/analysis"
headers = {"Authorization": f"Bearer {headspin_api_token}"}

response = requests.get(api_url, headers=headers)
data = response.json()

# 分析性能指标
print(f"应用启动时间: {data['app_launch_time']}ms")
print(f"页面加载时间: {data['page_load_time']}ms")
print(f"内存使用: {data['memory_usage']}MB")
print(f"CPU 使用率: {data['cpu_usage']}%")
```

CI/CD 集成：

```yaml
name: 移动应用测试

on: [push]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: 运行 HeadSpin 测试
        env:
          HEADSPIN_API_TOKEN: ${{ secrets.HEADSPIN_API_TOKEN }}
        run: |
          python -m pytest tests/mobile/ \
            --headspin-api-token=$HEADSPIN_API_TOKEN \
            --device="Samsung Galaxy S21"
```

## 为什么选择 HeadSpin？

- **真实设备** - 全球真实设备网络
- **AI 洞察** - 智能问题检测
- **深度分析** - 全面的性能监控
- **企业级** - 安全和合规

## 定价

- **免费试用** - 14 天免费试用
- **专业版** - 联系销售
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://www.headspin.io/)
- [文档](https://docs.headspin.io/)
- [API 参考](https://docs.headspin.io/api/)
