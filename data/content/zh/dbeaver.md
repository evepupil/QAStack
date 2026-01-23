# DBeaver

DBeaver 是通用的数据库管理工具，支持 MySQL、PostgreSQL、Oracle、SQLite 等几乎所有数据库，是测试人员验证测试数据的必备工具。

## 主要特点

- **通用** - 支持 80+ 种数据库
- **SQL 编辑器** - 高级 SQL 编辑器带补全
- **ER 图** - 可视化数据库结构图
- **数据编辑** - 类似电子表格的数据编辑
- **导入导出** - 多种格式支持
- **SSH 隧道** - 安全的数据库连接

## 快速开始

从 dbeaver.io 下载并安装。

连接数据库：
1. 数据库 → 新建数据库连接
2. 选择数据库类型（PostgreSQL、MySQL 等）
3. 输入连接详情
4. 测试连接并完成

执行查询：

```sql
-- 查询数据
SELECT * FROM users WHERE status = 'active';

-- 检查测试数据
SELECT COUNT(*) FROM orders WHERE created_at > '2024-01-01';

-- 验证外键
SELECT u.name, o.total
FROM users u
JOIN orders o ON u.id = o.user_id;
```

导出查询结果：
- 右键点击结果 → 导出
- 选择格式（CSV、JSON、SQL、Excel）
- 配置选项并导出

## 为什么选择 DBeaver？

- **免费** - 社区版免费
- **通用** - 几乎支持任何数据库
- **功能完善** - 完整的数据库管理
- **跨平台** - Windows、macOS、Linux

## 定价

- **社区版** - 免费开源
- **专业版** - $199/年，高级功能

## 相关资源

- [官方网站](https://dbeaver.io/)
- [文档](https://dbeaver.com/docs/)
- [GitHub 仓库](https://github.com/dbeaver/dbeaver)
