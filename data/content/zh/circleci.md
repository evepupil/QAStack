# CircleCI

CircleCI 是云原生持续集成和持续部署平台，帮助团队快速、可靠地构建和部署软件。

## 主要特点

- **云和自托管** - 灵活的部署选项
- **Docker 支持** - 原生 Docker 支持
- **并行执行** - 并行运行测试
- **缓存** - 智能依赖缓存
- **Orbs** - 可复用的配置包
- **洞察** - 测试和构建分析

## 快速开始

创建配置文件 `.circleci/config.yml`：

```yaml
version: 2.1

orbs:
  node: circleci/node@5.1

jobs:
  build-and-test:
    docker:
      - image: cimg/node:20.0
    steps:
      - checkout
      - node/install-packages:
          pkg-manager: npm
      - run:
          name: 运行 lint
          command: npm run lint
      - run:
          name: 运行测试
          command: npm test
      - store_test_results:
          path: test-results
      - store_artifacts:
          path: coverage

workflows:
  build-test:
    jobs:
      - build-and-test
```

并行测试配置：

```yaml
version: 2.1

jobs:
  test:
    docker:
      - image: cimg/node:20.0
    parallelism: 4
    steps:
      - checkout
      - run:
          name: 安装依赖
          command: npm ci
      - run:
          name: 并行运行测试
          command: |
            TESTFILES=$(circleci tests glob "tests/**/*.test.js" | circleci tests split)
            npm test -- $TESTFILES
      - store_test_results:
          path: test-results

workflows:
  test:
    jobs:
      - test
```

## 为什么选择 CircleCI？

- **快速** - 优化的构建速度
- **可靠** - 99.9% 正常运行时间
- **灵活** - 支持任何语言
- **洞察** - 深入的分析和指标

## 定价

- **免费版** - 6,000 分钟/月
- **性能版** - $15/月起
- **扩展版** - 定制价格
- **企业版** - 定制价格

## 相关资源

- [官方网站](https://circleci.com/)
- [文档](https://circleci.com/docs/)
- [Orbs 注册表](https://circleci.com/developer/orbs)
