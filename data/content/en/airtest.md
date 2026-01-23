# Airtest

Airtest is a cross-platform UI automation framework developed by NetEase, specializing in game testing through image recognition technology.

## Key Features

- **Image Recognition**: Locate elements using image matching
- **Cross-Platform**: Support for Android, iOS, Windows, and Unity games
- **IDE Support**: Airtest IDE for visual test development
- **Poco Framework**: Additional support for UI hierarchy-based testing
- **Recording**: Record and playback functionality

## Quick Start

Install Airtest:

```bash
pip install airtest
pip install pocoui
```

Basic test example:

```python
from airtest.core.api import *

# Connect to device
connect_device("Android:///")

# Use image recognition to click
touch(Template("login_button.png"))

# Wait for element
wait(Template("home_screen.png"))

# Swipe gesture
swipe((500, 1000), (500, 500))
```

## Why Choose Airtest?

- **Game Testing Expert**: Specifically designed for game automation
- **Visual Testing**: No need for element IDs or XPath
- **NetEase Backed**: Developed and maintained by NetEase Games
- **Python Based**: Easy to learn and integrate

## Pricing

Airtest is completely free and open-source.

## Learn More

- [Official Documentation](https://airtest.doc.io.netease.com/)
- [GitHub Repository](https://github.com/AirtestProject/Airtest)
- [Airtest IDE Download](https://airtest.netease.com/)
