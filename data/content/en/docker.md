# Docker

Docker is the standard for containerization, enabling quick setup of test environments like Selenium Grid and databases, ensuring consistency across dev, test, and production.

## Key Features

- **Containers**: Lightweight, portable environments
- **Images**: Pre-built images for any service
- **Docker Compose**: Multi-container orchestration
- **Docker Hub**: Public image registry
- **Volumes**: Persistent data storage
- **Networks**: Container networking

## Quick Start

Install Docker from docker.com.

Run common testing services:

```bash
# PostgreSQL for testing
docker run -d --name test-db \
  -e POSTGRES_PASSWORD=test \
  -p 5432:5432 \
  postgres:15

# Selenium Grid
docker run -d -p 4444:4444 selenium/standalone-chrome

# Redis
docker run -d --name test-redis -p 6379:6379 redis:alpine
```

Docker Compose for test environment:

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

Run tests with Docker:

```bash
docker-compose up -d
npm test
docker-compose down
```

## Why Choose Docker?

- **Consistency**: Same environment everywhere
- **Isolation**: No conflicts between projects
- **Speed**: Fast environment setup
- **Standard**: Industry-standard containerization

## Pricing

- **Personal**: Free for personal use
- **Pro**: $5/user/month
- **Team**: $9/user/month
- **Business**: $24/user/month

## Learn More

- [Official Website](https://www.docker.com/)
- [Documentation](https://docs.docker.com/)
- [Docker Hub](https://hub.docker.com/)
