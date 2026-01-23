# sqlmap

sqlmap is an open-source penetration testing tool that automates the detection and exploitation of SQL injection vulnerabilities in web applications.

## Key Features

- **Auto Detection**: Automatically detect injection points
- **Database Support**: MySQL, PostgreSQL, Oracle, MSSQL, SQLite, and more
- **Exploitation**: Extract data, access file system, execute commands
- **Tamper Scripts**: Bypass WAFs and filters
- **Fingerprinting**: Identify database version and configuration
- **Takeover**: Full database server takeover

## Quick Start

Install sqlmap:

```bash
# Clone repository
git clone https://github.com/sqlmapproject/sqlmap.git
cd sqlmap

# Or use pip
pip install sqlmap
```

Basic usage:

```bash
# Test a URL for SQL injection
sqlmap -u "https://example.com/page?id=1"

# With POST data
sqlmap -u "https://example.com/login" --data="user=admin&pass=test"

# Extract databases
sqlmap -u "https://example.com/page?id=1" --dbs

# Extract tables
sqlmap -u "https://example.com/page?id=1" -D database_name --tables

# Dump data
sqlmap -u "https://example.com/page?id=1" -D database_name -T users --dump
```

## Why Choose sqlmap?

- **Powerful**: Most comprehensive SQL injection tool
- **Automated**: Handles complex injection scenarios
- **Active Development**: Regular updates
- **Educational**: Great for learning SQL injection

## Pricing

sqlmap is completely free and open-source under the GPL license.

## Learn More

- [Official Website](https://sqlmap.org/)
- [GitHub Repository](https://github.com/sqlmapproject/sqlmap)
- [Usage Documentation](https://github.com/sqlmapproject/sqlmap/wiki/Usage)
