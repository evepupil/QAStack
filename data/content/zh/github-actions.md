# GitHub Actions

GitHub Actions 是 GitHub 内置的 CI/CD 平台，允许你直接在 GitHub 仓库中自动化构建、测试和部署工作流。

## 主要特点

- **GitHub 原生** - 与 GitHub 深度集成
- **YAML 配置** - 简单的工作流定义
- **矩阵构建** - 跨多个版本/平台测试
- **市场** - 丰富的可复用 Actions
- **自托管** - 支持自托管运行器
- **免费额度** - 公开仓库免费

## 快速开始

创建工作流文件 `.github/workflows/test.yml`：

```yaml
name: 测试

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [18.x, 20.x]

    steps:
      - uses: actions/checkout@v4

      - name: 设置 Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v4
        with:
          node-version: ${{ matrix.node-version }}
          cache: 'npm'

      - name: 安装依赖
        run: npm ci

      - name: 运行 lint
        run: npm run lint

      - name: 运行测试
        run: npm test

      - name: 上传覆盖率
        uses: codecov/codecov-action@v3
        with:
          files: ./coverage/lcov.info
```

Python 测试示例：

```yaml
name: Python 测试

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest

    steps:
      - uses: actions/checkout@v4

      - name: 设置 Python
        uses: actions/setup-python@v5
        with:
          python-version: '3.11'

      - name: 安装依赖
        run: |
          pip install -r requirements.txt
          pip install pytest pytest-cov

      - name: 运行测试
        run: pytest --cov=src tests/
```

## 为什么选择 GitHub Actions？

- **集成** - 与 GitHub 无缝集成
- **免费** - 公开仓库免费使用
- **生态** - 庞大的 Actions 市场
- **灵活** - 支持任何语言和平台

## 定价

- **免费版** - 公开仓库无限制
- **Pro** - 3,000 分钟/月
- **Team** - 3,000 分钟/月
- **Enterprise** - 50,000 分钟/月

## 相关资源

- [官方网站](https://github.com/features/actions)
- [文档](https://docs.github.com/en/actions)
- [Actions 市场](https://github.com/marketplace?type=actions)
