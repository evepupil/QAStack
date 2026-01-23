# JSONPath Finder

JSONPath Finder is an essential tool for API testing that helps you quickly find the JSONPath expression for any element in a JSON document.

## Key Features

- **Visual Tree**: Display JSON as expandable tree
- **Click to Copy**: Click any node to get its JSONPath
- **Multiple Notations**: Bracket and dot notation
- **Validation**: Validate your JSON input
- **Free**: No registration required

## Quick Start

1. Visit jsonpathfinder.com
2. Paste your JSON data
3. Click on any value in the tree
4. Copy the generated JSONPath

Example JSON:

```json
{
  "store": {
    "book": [
      {
        "title": "Harry Potter",
        "price": 29.99
      },
      {
        "title": "Lord of the Rings",
        "price": 39.99
      }
    ],
    "bicycle": {
      "color": "red",
      "price": 199.99
    }
  }
}
```

Generated JSONPaths:

```
x.store.book[0].title     → "Harry Potter"
x.store.book[1].price     → 39.99
x.store.bicycle.color     → "red"
```

## Why Choose JSONPath Finder?

- **Simple**: No learning curve
- **Fast**: Instant path generation
- **Accurate**: Works with complex JSON
- **Free**: No cost, no signup

## Pricing

JSONPath Finder is completely free to use.

## Learn More

- [Official Website](https://jsonpathfinder.com/)
- [JSONPath Syntax](https://goessner.net/articles/JsonPath/)
