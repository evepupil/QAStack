# Maestro

Maestro is the simplest and most effective mobile UI testing framework, allowing you to define flows in YAML without compiling your app.

## Key Features

- **YAML-Based**: Write tests in simple, readable YAML
- **No Build Required**: Test without recompiling your app
- **Fast Execution**: Extremely fast test startup and execution
- **Self-Healing**: Robust element matching reduces flakiness
- **Cross-Platform**: Support for iOS and Android

## Quick Start

Install Maestro:

```bash
curl -Ls "https://get.maestro.mobile.dev" | bash
```

Create a flow file `flow.yaml`:

```yaml
appId: com.example.app
---
- launchApp
- tapOn: "Login"
- inputText:
    id: "email"
    text: "test@example.com"
- inputText:
    id: "password"
    text: "password123"
- tapOn: "Submit"
- assertVisible: "Welcome"
```

Run the test:

```bash
maestro test flow.yaml
```

## Why Choose Maestro?

- **Simplicity**: No code required, just YAML
- **Speed**: Fastest mobile testing framework
- **Reliability**: Built-in retry and self-healing mechanisms
- **Developer Experience**: Quick feedback loop

## Pricing

Maestro is free and open-source. Maestro Cloud offers paid plans for CI/CD integration.

## Learn More

- [Official Documentation](https://maestro.mobile.dev/)
- [GitHub Repository](https://github.com/mobile-dev-inc/maestro)
- [Maestro Cloud](https://cloud.mobile.dev/)
