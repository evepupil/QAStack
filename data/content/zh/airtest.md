# Airtest

Airtest 是网易出品的跨平台 UI 自动化测试框架，基于图像识别技术，特别适合游戏和复杂 UI 的自动化测试。

## 主要特点

- **图像识别** - 使用图像匹配定位元素，无需元素 ID
- **跨平台** - 支持 Android、iOS、Windows 和 Unity 游戏
- **IDE 支持** - 提供 Airtest IDE 可视化开发工具
- **Poco 框架** - 额外支持基于 UI 层级的元素定位
- **录制回放** - 支持录制和回放功能

## 快速开始

安装 Airtest：

```bash
pip install airtest
pip install pocoui
```

基本测试示例：

```python
from airtest.core.api import *

# 连接设备
connect_device("Android:///")

# 使用图像识别点击
touch(Template("login_button.png"))

# 等待元素出现
wait(Template("home_screen.png"))

# 滑动操作
swipe((500, 1000), (500, 500))
```

## 为什么选择 Airtest？

- **游戏测试专家** - 专为游戏自动化测试设计
- **视觉测试** - 无需元素 ID 或 XPath
- **网易出品** - 由网易游戏开发和维护
- **Python 语言** - 易于学习和集成

## 定价

Airtest 完全**免费开源**。

## 相关资源

- [官方文档](https://airtest.doc.io.netease.com/)
- [GitHub 仓库](https://github.com/AirtestProject/Airtest)
- [Airtest IDE 下载](https://airtest.netease.com/)
