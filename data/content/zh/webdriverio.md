# WebdriverIO

WebdriverIO 是下一代 Node.js 浏览器和移动端自动化测试框架，支持 WebDriver、DevTools 和云服务。

## 主要特点

- **多协议** - WebDriver、DevTools、云端
- **跨浏览器** - Chrome、Firefox、Safari、Edge
- **移动端支持** - iOS 和 Android 测试
- **组件测试** - 测试 UI 组件
- **云集成** - BrowserStack、Sauce Labs
- **丰富生态** - 100+ 插件可用

## 快速开始

安装 WebdriverIO：

```bash
npm init wdio@latest
```

配置（`wdio.conf.js`）：

```javascript
export const config = {
  specs: ['./test/specs/**/*.js'],
  capabilities: [{
    browserName: 'chrome'
  }],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    timeout: 60000
  }
}
```

编写测试：

```javascript
describe('登录应用', () => {
  it('应该使用有效凭证登录', async () => {
    await browser.url('https://example.com/login');

    await $('#username').setValue('testuser');
    await $('#password').setValue('password');
    await $('button[type="submit"]').click();

    await expect($('.welcome')).toHaveText('欢迎, testuser!');
  });
});
```

运行测试：

```bash
npx wdio run wdio.conf.js
```

## 为什么选择 WebdriverIO？

- **现代** - 原生 async/await
- **灵活** - 多协议支持
- **文档完善** - 优秀的文档
- **活跃** - 定期更新和庞大社区

## 定价

WebdriverIO 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://webdriver.io/)
- [文档](https://webdriver.io/docs/gettingstarted)
- [GitHub 仓库](https://github.com/webdriverio/webdriverio)
