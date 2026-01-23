# CircleCI

CircleCI is a cloud-native CI/CD platform offering fast builds, easy configuration, and excellent Docker support for modern development workflows.

## Key Features

- **Fast Builds**: Parallel execution and caching
- **Docker Support**: First-class Docker integration
- **Orbs**: Reusable configuration packages
- **Insights**: Build analytics and optimization
- **SSH Debug**: Debug failed builds via SSH
- **Self-hosted**: Option for self-hosted runners

## Quick Start

Create `.circleci/config.yml`:

```yaml
version: 2.1

orbs:
  node: circleci/node@5.1.0

jobs:
  test:
    docker:
      - image: cimg/node:20.0
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: Run tests
          command: npm test
      - store_test_results:
          path: test-results
      - store_artifacts:
          path: coverage

  build:
    docker:
      - image: cimg/node:20.0
    steps:
      - checkout
      - node/install-packages
      - run: npm run build
      - persist_to_workspace:
          root: .
          paths:
            - dist

workflows:
  test-and-build:
    jobs:
      - test
      - build:
          requires:
            - test
```

Matrix testing:

```yaml
jobs:
  test:
    parameters:
      node-version:
        type: string
    docker:
      - image: cimg/node:<< parameters.node-version >>
    steps:
      - checkout
      - run: npm ci
      - run: npm test

workflows:
  test-matrix:
    jobs:
      - test:
          matrix:
            parameters:
              node-version: ["18.0", "20.0"]
```

## Why Choose CircleCI?

- **Fast**: Industry-leading build speeds
- **Flexible**: Powerful configuration options
- **Insights**: Detailed analytics
- **Support**: Excellent documentation and support

## Pricing

- **Free**: 6,000 build minutes/month
- **Performance**: Starting at $15/month
- **Scale**: Custom pricing

## Learn More

- [Official Website](https://circleci.com/)
- [Documentation](https://circleci.com/docs/)
- [Orbs Registry](https://circleci.com/developer/orbs)
