# Docker

Docker 是容器化技术的标准，用于快速搭建测试环境（如 Selenium Grid、数据库），保证开发、测试和生产环境的一致性。

## 主要特点

- **容器** - 轻量级、可移植的环境
- **镜像** - 任何服务的预构建镜像
- **Docker Compose** - 多容器编排
- **Docker Hub** - 公共镜像仓库
- **卷** - 持久化数据存储
- **网络** - 容器网络

## 快速开始

从 docker.com 安装 Docker。

运行常用测试服务：

```bash
# PostgreSQL 用于测试
docker run -d --name test-db \
  -e POSTGRES_PASSWORD=test \
  -p 5432:5432 \
  postgres:15

# Selenium Grid
docker run -d -p 4444:4444 selenium/standalone-chrome

# Redis
docker run -d --name test-redis -p 6379:6379 redis:alpine
```

Docker Compose 测试环境：

```yaml
# docker-compose.yml
version: '3.8'
services:
  db:
    image: postgres:15
    environment:
      POSTGRES_PASSWORD: test
    ports:
      - "5432:5432"

  selenium:
    image: selenium/standalone-chrome
    ports:
      - "4444:4444"
    shm_size: 2gb

  app:
    build: .
    depends_on:
      - db
      - selenium
    environment:
      DATABASE_URL: postgres://postgres:test@db:5432/test
```

运行测试：

```bash
docker-compose up -d
npm test
docker-compose down
```

## 为什么选择 Docker？

- **一致性** - 各环境相同
- **隔离** - 项目之间无冲突
- **快速** - 快速环境搭建
- **标准** - 行业标准容器化技术

## 定价

- **个人版** - 个人使用免费
- **专业版** - $5/用户/月
- **团队版** - $9/用户/月
- **商业版** - $24/用户/月

## 相关资源

- [官方网站](https://www.docker.com/)
- [文档](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
