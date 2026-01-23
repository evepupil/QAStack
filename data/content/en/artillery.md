# Artillery

Artillery is a modern, powerful load testing toolkit supporting HTTP, WebSocket, Socket.io, and more with YAML-based test scenarios.

## Key Features

- **Multi-Protocol**: HTTP, WebSocket, Socket.io, GraphQL
- **YAML Config**: Simple, readable test definitions
- **Metrics**: Detailed performance metrics
- **Plugins**: Extensible plugin system
- **CI/CD Ready**: Easy pipeline integration
- **Cloud**: Optional cloud execution

## Quick Start

Install Artillery:

```bash
npm install -g artillery
```

Create a test file (`test.yml`):

```yaml
config:
  target: "https://api.example.com"
  phases:
    - duration: 60
      arrivalRate: 10
      name: "Warm up"
    - duration: 120
      arrivalRate: 50
      name: "Sustained load"
  defaults:
    headers:
      Authorization: "Bearer {{ $env.API_TOKEN }}"

scenarios:
  - name: "Browse products"
    flow:
      - get:
          url: "/products"
      - think: 1
      - get:
          url: "/products/{{ $randomNumber(1, 100) }}"

  - name: "Create order"
    weight: 2
    flow:
      - post:
          url: "/orders"
          json:
            productId: "{{ $randomNumber(1, 100) }}"
            quantity: 1
      - think: 2
```

Run test:

```bash
# Run test
artillery run test.yml

# With report
artillery run test.yml --output report.json
artillery report report.json
```

## Why Choose Artillery?

- **Modern**: Built for microservices and APIs
- **Simple**: Easy to learn YAML syntax
- **Versatile**: Multiple protocol support
- **Reporting**: Beautiful HTML reports

## Pricing

- **Open Source**: Free forever
- **Pro**: $99/month for advanced features
- **Enterprise**: Custom pricing

## Learn More

- [Official Website](https://artillery.io/)
- [Documentation](https://artillery.io/docs/)
- [GitHub Repository](https://github.com/artilleryio/artillery)
