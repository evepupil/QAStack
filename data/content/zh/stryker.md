# Stryker

Stryker 是变异测试框架，通过在代码中引入小的变化（变异）来评估测试套件的质量和有效性。

## 主要特点

- **变异测试** - 评估测试质量
- **多语言** - JavaScript、C#、Scala
- **变异体** - 多种变异操作符
- **报告** - 详细的 HTML 报告
- **增量** - 只测试变更的代码
- **并行** - 并行执行变异测试

## 快速开始

安装 Stryker (JavaScript)：

```bash
npm install --save-dev @stryker-mutator/core
npx stryker init
```

配置文件 `stryker.conf.json`：

```json
{
  "$schema": "./node_modules/@stryker-mutator/core/schema/stryker-schema.json",
  "packageManager": "npm",
  "reporters": ["html", "clear-text", "progress"],
  "testRunner": "jest",
  "coverageAnalysis": "perTest",
  "mutate": [
    "src/**/*.js",
    "!src/**/*.test.js"
  ],
  "jest": {
    "projectType": "custom",
    "configFile": "jest.config.js"
  }
}
```

示例代码 `src/calculator.js`：

```javascript
// 计算器模块
function add(a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function isPositive(n) {
    return n > 0;
}

function divide(a, b) {
    if (b === 0) {
        throw new Error('除数不能为零');
    }
    return a / b;
}

module.exports = { add, subtract, isPositive, divide };
```

测试文件 `src/calculator.test.js`：

```javascript
const { add, subtract, isPositive, divide } = require('./calculator');

test('加法', () => {
    expect(add(1, 2)).toBe(3);
});

test('减法', () => {
    expect(subtract(5, 3)).toBe(2);
});

test('正数判断', () => {
    expect(isPositive(1)).toBe(true);
    expect(isPositive(-1)).toBe(false);
    expect(isPositive(0)).toBe(false); // 边界情况
});

test('除法', () => {
    expect(divide(6, 2)).toBe(3);
});

test('除零错误', () => {
    expect(() => divide(1, 0)).toThrow('除数不能为零');
});
```

运行变异测试：

```bash
npx stryker run
```

报告示例：

```
变异分数: 85.00%
已杀死: 17/20
存活: 3
超时: 0

存活的变异体:
- src/calculator.js:12 - 条件边界变异 (> 改为 >=)
- src/calculator.js:16 - 移除条件变异
```

## 为什么选择 Stryker？

- **测试质量** - 发现测试盲点
- **信心** - 提高对测试的信心
- **覆盖率** - 超越代码覆盖率
- **开源** - 完全免费开源

## 定价

- **免费** - 开源免费使用

## 相关资源

- [官方网站](https://stryker-mutator.io/)
- [文档](https://stryker-mutator.io/docs/)
- [GitHub](https://github.com/stryker-mutator/stryker-js)
