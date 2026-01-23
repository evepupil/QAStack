# Visual Studio Code

Visual Studio Code 是目前最流行的代码编辑器，拥有丰富的插件生态，对 Playwright、Cypress、Postman 等测试工具有官方支持。

## 主要特点

- **扩展市场** - 数千个扩展可用
- **IntelliSense** - 智能代码补全
- **调试** - 内置多语言调试器
- **Git 集成** - 开箱即用的源代码管理
- **终端** - 集成终端
- **可定制** - 主题、快捷键、设置

## 快速开始

从 code.visualstudio.com 下载并安装。

必备测试扩展：

```
# Playwright
ms-playwright.playwright

# Jest
orta.vscode-jest

# Test Explorer
hbenl.vscode-test-explorer

# REST Client
humao.rest-client

# Thunder Client
rangav.vscode-thunder-client
```

配置 launch.json 用于调试测试：

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "type": "node",
      "request": "launch",
      "name": "Jest 测试",
      "program": "${workspaceFolder}/node_modules/.bin/jest",
      "args": ["--runInBand"],
      "console": "integratedTerminal"
    }
  ]
}
```

## 为什么选择 VS Code？

- **免费** - 完全免费开源
- **轻量** - 启动快速、性能好
- **可扩展** - 庞大的扩展生态
- **跨平台** - Windows、macOS、Linux

## 定价

VS Code 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://code.visualstudio.com/)
- [文档](https://code.visualstudio.com/docs)
- [扩展市场](https://marketplace.visualstudio.com/)
