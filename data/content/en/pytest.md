# Pytest

Pytest is the most popular testing framework in the Python ecosystem, known for its simple syntax, powerful features, and extensive plugin ecosystem.

## Key Features

- **Simple Syntax**: Write tests with plain assert statements
- **Fixtures**: Powerful test setup and teardown
- **Parametrization**: Run tests with multiple inputs
- **Plugins**: 1000+ plugins available
- **Markers**: Categorize and filter tests
- **Auto-discovery**: Automatic test discovery

## Quick Start

Install pytest:

```bash
pip install pytest
```

Write tests:

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

Run tests:

```bash
# Run all tests
pytest

# Run with verbose output
pytest -v

# Run specific test file
pytest test_example.py

# Run tests matching pattern
pytest -k "test_addition"
```

## Why Choose Pytest?

- **Pythonic**: Clean, readable test code
- **Powerful**: From simple to complex testing needs
- **Extensible**: Rich plugin ecosystem
- **Community**: Large, active community

## Pricing

Pytest is completely free and open-source under the MIT license.

## Learn More

- [Official Documentation](https://docs.pytest.org/)
- [GitHub Repository](https://github.com/pytest-dev/pytest)
- [Plugin List](https://docs.pytest.org/en/latest/reference/plugin_list.html)
