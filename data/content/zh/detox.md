# Detox

Detox 是专为 React Native 设计的灰盒端到端测试框架，通过同步机制消除测试的不稳定性。

## 主要特点

- **React Native 专用** - 专为 React Native 应用设计
- **自动同步** - 自动等待应用空闲状态
- **灰盒测试** - 可访问应用内部状态
- **跨平台** - 支持 iOS 和 Android
- **Jest 集成** - 与 Jest 测试运行器无缝集成

## 快速开始

安装 Detox：

```bash
npm install detox --save-dev
npx detox init
```

在 `package.json` 中配置：

```json
{
  "detox": {
    "configurations": {
      "ios.sim.debug": {
        "device": "simulator",
        "app": "ios.debug"
      }
    }
  }
}
```

编写测试：

```javascript
describe('登录功能', () => {
  beforeAll(async () => {
    await device.launchApp();
  });

  it('应该成功登录', async () => {
    await element(by.id('email')).typeText('test@example.com');
    await element(by.id('password')).typeText('password');
    await element(by.text('登录')).tap();
    await expect(element(by.text('欢迎'))).toBeVisible();
  });
});
```

## 为什么选择 Detox？

- **无抖动** - 同步机制消除竞态条件
- **高性能** - 针对 React Native 优化
- **Wix 维护** - 由 Wix 工程团队积极维护
- **CI 友好** - 易于集成到 CI/CD 流水线

## 定价

Detox 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方文档](https://wix.github.io/Detox/)
- [GitHub 仓库](https://github.com/wix/Detox)
- [入门指南](https://wix.github.io/Detox/docs/introduction/getting-started)
