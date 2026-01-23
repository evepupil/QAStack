# Wireshark

Wireshark is the world's foremost and most widely used network protocol analyzer, letting you see what's happening on your network at a microscopic level.

## Key Features

- **Deep Inspection**: Hundreds of protocols analyzed
- **Live Capture**: Capture packets in real-time
- **Offline Analysis**: Analyze saved capture files
- **Filtering**: Powerful display and capture filters
- **Decryption**: Decrypt SSL/TLS, WPA/WPA2, and more
- **Cross-Platform**: Windows, macOS, Linux

## Quick Start

1. Download and install Wireshark
2. Select a network interface to capture
3. Start capturing packets
4. Apply display filters to focus on specific traffic

Common display filters:

```
# HTTP traffic only
http

# Traffic to/from specific IP
ip.addr == 192.168.1.1

# TCP port 443 (HTTPS)
tcp.port == 443

# DNS queries
dns

# Filter by protocol and IP
http && ip.src == 10.0.0.1
```

## Why Choose Wireshark?

- **Industry Standard**: The gold standard for packet analysis
- **Free**: Completely open-source
- **Comprehensive**: Analyzes virtually any protocol
- **Educational**: Great for learning networking

## Pricing

Wireshark is completely free and open-source under the GPL license.

## Learn More

- [Official Website](https://www.wireshark.org/)
- [Documentation](https://www.wireshark.org/docs/)
- [User Guide](https://www.wireshark.org/docs/wsug_html_chunked/)
