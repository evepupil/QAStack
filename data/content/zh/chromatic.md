# Chromatic

Chromatic 是 Storybook 的视觉测试平台，自动化 UI 组件的视觉和交互测试。

## 主要特点

- **Storybook 集成** - 原生 Storybook 支持
- **视觉快照** - 捕获组件状态
- **交互测试** - 测试组件行为
- **UI 评审** - 协作处理 UI 变更
- **Turbosnap** - 只测试变更的组件
- **组件文档** - 生成文档

## 快速开始

安装 Chromatic：

```bash
npm install --save-dev chromatic
```

添加到 package.json：

```json
{
  "scripts": {
    "chromatic": "chromatic --project-token=your-token"
  }
}
```

配置 Storybook 交互：

```javascript
// Button.stories.js
import { Button } from './Button';
import { within, userEvent } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

export default {
  title: 'Components/Button',
  component: Button
};

export const Primary = {
  args: {
    label: '点击我',
    primary: true
  }
};

export const Clicked = {
  ...Primary,
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole('button');

    await userEvent.click(button);
    await expect(button).toHaveClass('clicked');
  }
};
```

运行 Chromatic：

```bash
npm run chromatic
```

## 为什么选择 Chromatic？

- **Storybook 原生** - Storybook 团队构建
- **快速** - 智能选择性测试
- **协作** - UI 评审工作流
- **设计系统** - 完美适合设计系统

## 定价

- **免费版** - 5,000 快照/月
- **专业版** - $149/月起
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://www.chromatic.com/)
- [文档](https://www.chromatic.com/docs/)
- [Storybook 集成](https://www.chromatic.com/docs/storybook)
