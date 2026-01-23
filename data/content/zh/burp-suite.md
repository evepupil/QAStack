# Burp Suite

Burp Suite 是 Web 安全测试领域的瑞士军刀，提供 Web 应用程序安全测试所需的一切工具。

## 主要特点

- **代理拦截** - 拦截和修改 HTTP/HTTPS 流量
- **漏洞扫描** - 自动化漏洞扫描
- **Intruder** - 自动化定制攻击
- **Repeater** - 手动请求操作
- **Sequencer** - Token 和会话分析
- **Decoder** - 编码/解码工具
- **Comparer** - 可视化数据对比

## 快速开始

1. 从 PortSwigger 下载 Burp Suite
2. 配置浏览器使用 Burp 作为代理 (127.0.0.1:8080)
3. 安装 Burp CA 证书用于 HTTPS 拦截
4. 开始拦截和分析流量

拦截请求：

```
代理 → 拦截 → 拦截已开启
浏览目标网站
在 Burp 中修改请求
转发继续
```

## 为什么选择 Burp Suite？

- **行业标准** - 全球安全专业人员使用
- **功能全面** - 所有安全测试工具合一
- **可扩展** - 丰富的扩展市场 (BApp Store)
- **持续更新** - 定期添加新功能

## 定价

- **社区版** - 免费，功能有限
- **专业版** - $449/用户/年
- **企业版** - 团队定制价格

## 相关资源

- [官方网站](https://portswigger.net/burp)
- [文档](https://portswigger.net/burp/documentation)
- [Web 安全学院](https://portswigger.net/web-security)
