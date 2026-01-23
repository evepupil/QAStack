# sqlmap

sqlmap 是一款开源渗透测试工具，自动检测和利用 Web 应用程序中的 SQL 注入漏洞。

## 主要特点

- **自动检测** - 自动检测注入点
- **数据库支持** - MySQL、PostgreSQL、Oracle、MSSQL、SQLite 等
- **漏洞利用** - 提取数据、访问文件系统、执行命令
- **Tamper 脚本** - 绕过 WAF 和过滤器
- **指纹识别** - 识别数据库版本和配置
- **完全接管** - 数据库服务器完全接管

## 快速开始

安装 sqlmap：

```bash
# 克隆仓库
git clone https://github.com/sqlmapproject/sqlmap.git
cd sqlmap

# 或使用 pip
pip install sqlmap
```

基本用法：

```bash
# 测试 URL 是否存在 SQL 注入
sqlmap -u "https://example.com/page?id=1"

# POST 数据
sqlmap -u "https://example.com/login" --data="user=admin&pass=test"

# 提取数据库
sqlmap -u "https://example.com/page?id=1" --dbs

# 提取表
sqlmap -u "https://example.com/page?id=1" -D database_name --tables

# 导出数据
sqlmap -u "https://example.com/page?id=1" -D database_name -T users --dump
```

## 为什么选择 sqlmap？

- **强大** - 最全面的 SQL 注入工具
- **自动化** - 处理复杂的注入场景
- **持续更新** - 定期更新
- **教育价值** - 学习 SQL 注入的绝佳工具

## 定价

sqlmap 完全**免费开源**，采用 GPL 许可证。

## 相关资源

- [官方网站](https://sqlmap.org/)
- [GitHub 仓库](https://github.com/sqlmapproject/sqlmap)
- [使用文档](https://github.com/sqlmapproject/sqlmap/wiki/Usage)
