# Pytest

Pytest 是 Python 生态中最强大的测试框架，以简洁语法、强大功能和丰富插件生态著称。

## 主要特点

- **简洁语法** - 使用普通 assert 语句编写测试
- **Fixtures** - 强大的测试设置和清理
- **参数化** - 使用多个输入运行测试
- **插件** - 1000+ 插件可用
- **标记** - 分类和过滤测试
- **自动发现** - 自动发现测试

## 快速开始

安装 pytest：

```bash
pip install pytest
```

编写测试：

```python
# test_example.py
import pytest

def test_addition():
    assert 1 + 1 == 2

def test_string():
    assert "hello".upper() == "HELLO"

@pytest.fixture
def sample_data():
    return {"name": "test", "value": 42}

def test_with_fixture(sample_data):
    assert sample_data["name"] == "test"

@pytest.mark.parametrize("input,expected", [
    (1, 2),
    (2, 4),
    (3, 6),
])
def test_double(input, expected):
    assert input * 2 == expected
```

运行测试：

```bash
# 运行所有测试
pytest

# 详细输出
pytest -v

# 运行特定测试文件
pytest test_example.py

# 运行匹配模式的测试
pytest -k "test_addition"
```

## 为什么选择 Pytest？

- **Pythonic** - 简洁、易读的测试代码
- **强大** - 从简单到复杂的测试需求
- **可扩展** - 丰富的插件生态
- **社区** - 庞大、活跃的社区

## 定价

Pytest 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方文档](https://docs.pytest.org/)
- [GitHub 仓库](https://github.com/pytest-dev/pytest)
- [插件列表](https://docs.pytest.org/en/latest/reference/plugin_list.html)
