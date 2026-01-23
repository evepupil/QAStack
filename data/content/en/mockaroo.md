# Mockaroo

Mockaroo is a realistic test data generator that lets you create custom datasets in various formats including CSV, JSON, SQL, and Excel.

## Key Features

- **150+ Data Types**: Names, addresses, dates, custom formulas
- **Multiple Formats**: CSV, JSON, SQL, Excel, XML
- **Custom Formulas**: Create complex data relationships
- **API Access**: Generate data programmatically
- **Schema Import**: Import from databases
- **Realistic Data**: Industry-specific realistic values

## Quick Start

1. Visit mockaroo.com
2. Define your schema with field names and types
3. Configure the number of rows
4. Download in your preferred format

Example schema:

| Field Name | Type | Options |
|------------|------|---------|
| id | Row Number | |
| first_name | First Name | |
| last_name | Last Name | |
| email | Email | |
| created_at | Datetime | Last 30 days |
| country | Country | |

API usage:

```bash
curl "https://api.mockaroo.com/api/generate.json?key=YOUR_API_KEY&count=100&schema=users"
```

## Why Choose Mockaroo?

- **Easy to Use**: No coding required for basic usage
- **Flexible**: Highly customizable data generation
- **Quality Data**: Realistic, production-like values
- **Free Tier**: Generate up to 1,000 rows free

## Pricing

- **Free**: 1,000 rows/day, limited features
- **Silver**: $50/year, 100,000 rows/day
- **Gold**: $500/year, unlimited rows, API access

## Learn More

- [Official Website](https://www.mockaroo.com/)
- [API Documentation](https://www.mockaroo.com/api/docs)
- [Data Types Reference](https://www.mockaroo.com/docs)
