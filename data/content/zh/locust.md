# Locust

Locust 是用 Python 编写的现代负载测试框架，使用 Python 代码定义用户行为，支持分布式和可扩展。

## 主要特点

- **Python 编写** - 使用纯 Python 编写测试
- **分布式** - 可扩展到数百万用户
- **Web UI** - 实时监控仪表板
- **灵活** - 测试任何系统，不仅限于 HTTP
- **可定制** - 可扩展和自定义
- **轻量** - 资源开销最小

## 快速开始

安装 Locust：

```bash
pip install locust
```

创建 locustfile.py：

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
            "name": "测试用户",
            "email": "test@example.com"
        })

    def on_start(self):
        # 登录或设置
        self.client.post("/login", json={
            "username": "user",
            "password": "pass"
        })
```

运行 Locust：

```bash
# Web UI 模式
locust -f locustfile.py --host=https://example.com

# 无头模式
locust -f locustfile.py --host=https://example.com \
  --users 100 --spawn-rate 10 --run-time 5m --headless
```

## 为什么选择 Locust？

- **Pythonic** - 利用 Python 生态
- **可扩展** - 开箱即用的分布式测试
- **实时** - 实时监控仪表板
- **开源** - 免费且积极维护

## 定价

Locust 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://locust.io/)
- [文档](https://docs.locust.io/)
- [GitHub 仓库](https://github.com/locustio/locust)
