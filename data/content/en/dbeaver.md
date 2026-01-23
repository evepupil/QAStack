# DBeaver

DBeaver is a universal database management tool supporting MySQL, PostgreSQL, Oracle, SQLite, and almost all other databases, essential for verifying test data.

## Key Features

- **Universal**: Supports 80+ databases
- **SQL Editor**: Advanced SQL editor with completion
- **ER Diagrams**: Visual database schema diagrams
- **Data Editor**: Spreadsheet-like data editing
- **Import/Export**: Multiple format support
- **SSH Tunneling**: Secure database connections

## Quick Start

Download from dbeaver.io and install.

Connect to a database:
1. Database → New Database Connection
2. Select database type (PostgreSQL, MySQL, etc.)
3. Enter connection details
4. Test connection and finish

Execute queries:

```sql
-- Select data
SELECT * FROM users WHERE status = 'active';

-- Check test data
SELECT COUNT(*) FROM orders WHERE created_at > '2024-01-01';

-- Verify foreign keys
SELECT u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id;
```

Export query results:
- Right-click results → Export
- Choose format (CSV, JSON, SQL, Excel)
- Configure options and export

## Why Choose DBeaver?

- **Free**: Community edition is free
- **Universal**: Works with almost any database
- **Full-Featured**: Complete database management
- **Cross-Platform**: Windows, macOS, Linux

## Pricing

- **Community**: Free and open-source
- **Pro**: $199/year for advanced features

## Learn More

- [Official Website](https://dbeaver.io/)
- [Documentation](https://dbeaver.com/docs/)
- [GitHub Repository](https://github.com/dbeaver/dbeaver)
