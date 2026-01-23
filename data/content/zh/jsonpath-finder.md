# JSONPath Finder

JSONPath Finder 是 API 测试必备的辅助工具，帮助你快速找到 JSON 文档中任何元素的 JSONPath 表达式。

## 主要特点

- **可视化树** - 将 JSON 显示为可展开的树
- **点击复制** - 点击任意节点获取其 JSONPath
- **多种表示法** - 括号和点表示法
- **验证** - 验证 JSON 输入
- **免费** - 无需注册

## 快速开始

1. 访问 jsonpathfinder.com
2. 粘贴 JSON 数据
3. 点击树中的任意值
4. 复制生成的 JSONPath

示例 JSON：

```json
{
  "store": {
    "book": [
      {
        "title": "哈利波特",
        "price": 29.99
      },
      {
        "title": "指环王",
        "price": 39.99
      }
    ],
    "bicycle": {
      "color": "红色",
      "price": 199.99
    }
  }
}
```

生成的 JSONPath：

```
x.store.book[0].title     → "哈利波特"
x.store.book[1].price     → 39.99
x.store.bicycle.color     → "红色"
```

## 为什么选择 JSONPath Finder？

- **简单** - 无学习曲线
- **快速** - 即时路径生成
- **准确** - 处理复杂 JSON
- **免费** - 无费用、无注册

## 定价

JSONPath Finder 完全免费使用。

## 相关资源

- [官方网站](https://jsonpathfinder.com/)
- [JSONPath 语法](https://goessner.net/articles/JsonPath/)
