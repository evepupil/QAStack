# Hoppscotch

Hoppscotch is an open-source API development ecosystem, offering a lightweight, fast, and beautiful alternative to Postman with real-time collaboration.

## Key Features

- **Lightweight**: Fast, minimal resource usage
- **Real-time Collaboration**: Work with team members
- **PWA**: Works offline as a Progressive Web App
- **REST/GraphQL**: Support for multiple API types
- **Collections**: Organize requests in collections
- **Environments**: Manage multiple environments

## Quick Start

Visit hoppscotch.io or install locally:

```bash
# Self-hosted with Docker
docker run -p 3000:3000 hoppscotch/hoppscotch:latest
```

Make a request:

```
Method: GET
URL: https://api.example.com/users
Headers:
  Authorization: Bearer your-token
  Content-Type: application/json
```

GraphQL query:

```graphql
query GetUser($id: ID!) {
  user(id: $id) {
    name
    email
    posts {
      title
    }
  }
}
```

Environment variables:

```
baseUrl: https://api.example.com
token: your-api-token
```

Use in requests: `{{baseUrl}}/users`

## Why Choose Hoppscotch?

- **Open Source**: No vendor lock-in
- **Privacy**: Your data stays on your machine
- **Fast**: Instant, lightweight experience
- **Beautiful**: Modern, clean interface

## Pricing

Hoppscotch is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://hoppscotch.io/)
- [Documentation](https://docs.hoppscotch.io/)
- [GitHub Repository](https://github.com/hoppscotch/hoppscotch)
