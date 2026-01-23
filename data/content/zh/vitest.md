# Vitest

Vitest 是由 Vite 驱动的极速单元测试框架，原生支持 ESM 和 TypeScript，API 兼容 Jest。

## 主要特点

- **Vite 驱动** - 即时热模块替换
- **Jest 兼容** - 可作为 Jest 的替代品
- **TypeScript 原生** - 一流的 TypeScript 支持
- **ESM 优先** - 原生 ES 模块支持
- **监听模式** - 智能文件监听
- **UI 仪表板** - 精美的测试 UI

## 快速开始

安装 Vitest：

```bash
npm install -D vitest
```

在 `vite.config.ts` 中配置：

```typescript
import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
    coverage: {
      provider: 'v8',
      reporter: ['text', 'html']
    }
  }
})
```

编写测试：

```typescript
// sum.test.ts
import { describe, it, expect } from 'vitest'
import { sum } from './sum'

describe('sum', () => {
  it('1 + 2 应该等于 3', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it('负数相加', () => {
    expect(sum(-1, -2)).toBe(-3)
  })
})
```

运行测试：

```bash
# 运行测试
npx vitest

# 监听模式
npx vitest --watch

# 带 UI
npx vitest --ui

# 覆盖率
npx vitest --coverage
```

## 为什么选择 Vitest？

- **极速** - 最快的测试运行器
- **现代** - 为现代 JavaScript 构建
- **简单** - Vite 项目零配置
- **兼容** - 从 Jest 轻松迁移

## 定价

Vitest 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://vitest.dev/)
- [文档](https://vitest.dev/guide/)
- [GitHub 仓库](https://github.com/vitest-dev/vitest)
