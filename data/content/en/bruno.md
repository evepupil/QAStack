# Bruno

Bruno is an open-source API client that serves as a lightweight, git-friendly alternative to Postman, storing collections directly in your filesystem.

## Key Features

- **Offline First**: Works completely offline
- **Git Friendly**: Collections stored as plain text files
- **Local Storage**: No cloud sync, your data stays on your machine
- **Scripting**: JavaScript-based pre/post request scripts
- **Environment Variables**: Flexible environment management
- **Open Source**: Fully transparent and community-driven

## Quick Start

Install Bruno:

```bash
# macOS
brew install bruno

# Or download from website
```

Collections are stored as `.bru` files:

```bru
meta {
  name: Get Users
  type: http
  seq: 1
}

get {
  url: https://api.example.com/users
  body: none
  auth: bearer
}

headers {
  Content-Type: application/json
}

auth:bearer {
  token: {{access_token}}
}
```

## Why Choose Bruno?

- **Privacy**: No account required, no cloud storage
- **Version Control**: Git-friendly format for team collaboration
- **Lightweight**: Fast and minimal resource usage
- **Open Source**: No vendor lock-in

## Pricing

Bruno is completely free and open-source under the MIT license.

## Learn More

- [Official Website](https://www.usebruno.com/)
- [GitHub Repository](https://github.com/usebruno/bruno)
- [Documentation](https://docs.usebruno.com/)
