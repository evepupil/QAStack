# Mockaroo

Mockaroo 是一款优秀的在线测试数据生成器，可以生成 CSV、JSON、SQL、Excel 等格式的逼真测试数据。

## 主要特点

- **150+ 数据类型** - 姓名、地址、日期、自定义公式
- **多种格式** - CSV、JSON、SQL、Excel、XML
- **自定义公式** - 创建复杂的数据关系
- **API 访问** - 编程方式生成数据
- **Schema 导入** - 从数据库导入结构
- **逼真数据** - 行业特定的真实值

## 快速开始

1. 访问 mockaroo.com
2. 定义字段名和类型
3. 配置行数
4. 下载所需格式

示例 Schema：

| 字段名 | 类型 | 选项 |
|--------|------|------|
| id | Row Number | |
| name | Chinese Name | |
| email | Email | |
| created_at | Datetime | 最近30天 |
| city | City | |

API 使用：

```bash
curl "https://api.mockaroo.com/api/generate.json?key=YOUR_API_KEY&count=100&schema=users"
```

## 为什么选择 Mockaroo？

- **易于使用** - 基础使用无需编码
- **灵活** - 高度可定制的数据生成
- **高质量** - 逼真的、生产级数据
- **免费层级** - 每天免费生成 1,000 行

## 定价

- **免费版** - 每天 1,000 行，功能有限
- **银牌** - $50/年，每天 100,000 行
- **金牌** - $500/年，无限行数，API 访问

## 相关资源

- [官方网站](https://www.mockaroo.com/)
- [API 文档](https://www.mockaroo.com/api/docs)
- [数据类型参考](https://www.mockaroo.com/docs)
