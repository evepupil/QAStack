# Jest

Jest 是由 Facebook（现 Meta）开发的 JavaScript 测试框架，以其零配置、快速执行和出色的开发体验而闻名。它是 React 项目的默认测试框架，但同样适用于任何 JavaScript 项目。

## 主要特点

- **零配置** - 开箱即用，无需复杂配置
- **快照测试** - 轻松测试 UI 组件
- **并行执行** - 自动并行运行测试
- **代码覆盖率** - 内置覆盖率报告
- **Mock 功能** - 强大的模拟和间谍功能
- **Watch 模式** - 智能监听文件变化
- **清晰的错误信息** - 详细的失败信息

## 使用场景

- JavaScript/TypeScript 单元测试
- React/Vue/Angular 组件测试
- Node.js 后端测试
- 快照测试
- 集成测试

## 快速开始

### 安装

```bash
npm install --save-dev jest
```

### 基础用法

```javascript
// sum.js
function sum(a, b) {
  return a + b;
}
module.exports = sum;

// sum.test.js
const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  expect(sum(1, 2)).toBe(3);
});
```

### 运行测试

```bash
npm test
```

## 优势

- ✅ **零配置** - 快速上手
- ✅ **快照测试** - 简化 UI 测试
- ✅ **优秀的 React 支持** - 与 React 完美集成
- ✅ **内置功能丰富** - 无需额外工具
- ✅ **社区庞大** - 丰富的资源和插件

## 局限性

- ⚠️ **启动速度** - 大型项目启动较慢
- ⚠️ **ESM 支持** - 对 ES 模块支持不够完善
- ⚠️ **配置复杂性** - 高级配置可能复杂

## 定价

Jest 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方文档](https://jestjs.io/)
- [GitHub 仓库](https://github.com/jestjs/jest)
- [React 测试指南](https://jestjs.io/docs/tutorial-react)

## 总结

Jest 是 JavaScript 生态系统中最流行的测试框架之一，特别适合 React 项目和需要快速上手的团队。
