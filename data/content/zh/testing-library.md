# Testing Library

Testing Library 是一系列帮助你以用户视角测试 UI 组件的工具库。它通过让你编写与真实用户使用网页方式相似的测试，来鼓励良好的测试实践。

## 主要特点

- **用户视角测试**：以用户查找元素的方式查询（通过文本、标签、角色）
- **框架无关**：支持 React、Vue、Angular、Svelte 和原生 DOM
- **不依赖实现细节**：重构时测试不会失效
- **内置可访问性**：通过查询 API 鼓励可访问的标记
- **轻量级**：API 表面积小，易于学习

## 使用场景

Testing Library 适用于：

- React/Vue/Angular 组件的单元测试
- 用户流程的集成测试
- 确保组件标记的可访问性
- 编写能够经受重构的可维护测试
- 以用户交互的方式测试组件

## 快速开始

### 安装

```bash
# React 版本
npm install --save-dev @testing-library/react @testing-library/jest-dom

# Vue 版本
npm install --save-dev @testing-library/vue

# Angular 版本
npm install --save-dev @testing-library/angular
```

### 基础用法

```javascript
import { render, screen, fireEvent } from '@testing-library/react';
import Counter from './Counter';

test('点击按钮时计数器增加', () => {
  render(<Counter />);

  const button = screen.getByRole('button', { name: /增加/i });
  fireEvent.click(button);

  expect(screen.getByText('计数: 1')).toBeInTheDocument();
});
```

## 优势

- 鼓励编写可访问的应用
- 测试不受实现变化影响
- 直观的 API，模拟用户行为
- 优秀的文档和社区支持
- 与 Jest、Vitest 等测试运行器无缝集成

## 局限性

- 查询优先级有一定学习曲线（该用哪个查询）
- 异步工具需要理解 JavaScript Promise
- 某些复杂交互可能需要额外的库（如 user-event）

## 定价

Testing Library 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方文档](https://testing-library.com/)
- [GitHub 仓库](https://github.com/testing-library)
- [Testing Library Discord](https://discord.gg/testing-library)

## 总结

Testing Library 是现代 JavaScript 应用中测试 UI 组件的首选方案。其以用户为中心的理念帮助你编写能够确保应用为真实用户正常工作的测试，同时随着代码库的演进保持可维护性。
