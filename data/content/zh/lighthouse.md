# Google Lighthouse

Lighthouse 是 Google 开源的自动化审计工具，用于提升网页的性能、无障碍性、SEO 和最佳实践。

## 主要特点

- **性能** - Core Web Vitals 和加载指标
- **无障碍** - WCAG 合规检查
- **最佳实践** - 安全和现代 Web 标准
- **SEO** - 搜索引擎优化审计
- **PWA** - 渐进式 Web 应用验证
- **多种模式** - CLI、DevTools、CI 集成

## 快速开始

在 Chrome DevTools 中运行：
1. 打开 Chrome DevTools（F12）
2. 转到 Lighthouse 标签
3. 选择要审计的类别
4. 点击"分析页面加载"

通过 CLI 运行：

```bash
# 安装
npm install -g lighthouse

# 运行审计
lighthouse https://example.com --output html --output-path ./report.html

# 指定类别
lighthouse https://example.com --only-categories=performance,accessibility
```

在 CI/CD 中运行：

```bash
# 安装 Lighthouse CI
npm install -g @lhci/cli

# 在 CI 中运行
lhci autorun
```

Lighthouse CI 配置：

```json
{
  "ci": {
    "collect": {
      "url": ["https://example.com/"]
    },
    "assert": {
      "assertions": {
        "categories:performance": ["error", {"minScore": 0.9}],
        "categories:accessibility": ["error", {"minScore": 0.9}]
      }
    }
  }
}
```

## 为什么选择 Lighthouse？

- **Google 标准** - Google 官方工具
- **全面** - 覆盖 Web 质量各方面
- **可操作** - 清晰的优化建议
- **免费** - 完全开源

## 定价

Lighthouse 完全**免费开源**，采用 Apache 2.0 许可证。

## 相关资源

- [官方文档](https://developers.google.com/web/tools/lighthouse)
- [GitHub 仓库](https://github.com/GoogleChrome/lighthouse)
- [web.dev](https://web.dev/)
