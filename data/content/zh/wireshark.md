# Wireshark

Wireshark 是世界上最重要的网络协议分析器，让你可以深入微观层面查看网络发生了什么。

## 主要特点

- **深度检查** - 分析数百种协议
- **实时捕获** - 实时捕获数据包
- **离线分析** - 分析保存的捕获文件
- **过滤** - 强大的显示和捕获过滤器
- **解密** - 解密 SSL/TLS、WPA/WPA2 等
- **跨平台** - Windows、macOS、Linux

## 快速开始

1. 下载并安装 Wireshark
2. 选择要捕获的网络接口
3. 开始捕获数据包
4. 应用显示过滤器聚焦特定流量

常用显示过滤器：

```
# 仅 HTTP 流量
http

# 特定 IP 的流量
ip.addr == 192.168.1.1

# TCP 端口 443（HTTPS）
tcp.port == 443

# DNS 查询
dns

# 按协议和 IP 过滤
http && ip.src == 10.0.0.1
```

## 为什么选择 Wireshark？

- **行业标准** - 数据包分析的黄金标准
- **免费** - 完全开源
- **全面** - 几乎分析任何协议
- **教育价值** - 学习网络的绝佳工具

## 定价

Wireshark 完全**免费开源**，采用 GPL 许可证。

## 相关资源

- [官方网站](https://www.wireshark.org/)
- [文档](https://www.wireshark.org/docs/)
- [用户指南](https://www.wireshark.org/docs/wsug_html_chunked/)
