# Locust

Locust is a modern load testing framework written in Python that lets you define user behavior with Python code, supporting distributed and scalable testing.

## Key Features

- **Python-Based**: Write tests in pure Python
- **Distributed**: Scale to millions of users
- **Web UI**: Real-time monitoring dashboard
- **Flexible**: Test any system, not just HTTP
- **Hackable**: Extensible and customizable
- **Lightweight**: Minimal resource overhead

## Quick Start

Install Locust:

```bash
pip install locust
```

Create a locustfile.py:

```python
from locust import HttpUser, task, between

class WebsiteUser(HttpUser):
    wait_time = between(1, 5)

    @task
    def view_homepage(self):
        self.client.get("/")

    @task(3)
    def view_product(self):
        self.client.get("/product/1")

    @task
    def submit_form(self):
        self.client.post("/api/submit", json={
            "name": "Test User",
            "email": "test@example.com"
        })

    def on_start(self):
        # Login or setup
        self.client.post("/login", json={
            "username": "user",
            "password": "pass"
        })
```

Run Locust:

```bash
# Web UI mode
locust -f locustfile.py --host=https://example.com

# Headless mode
locust -f locustfile.py --host=https://example.com \
  --users 100 --spawn-rate 10 --run-time 5m --headless
```

## Why Choose Locust?

- **Pythonic**: Leverage Python ecosystem
- **Scalable**: Distributed testing out of the box
- **Real-time**: Live monitoring dashboard
- **Open Source**: Free and actively maintained

## Pricing

Locust is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://locust.io/)
- [Documentation](https://docs.locust.io/)
- [GitHub Repository](https://github.com/locustio/locust)
