# Mocha

Mocha 是功能丰富的 JavaScript 测试框架，运行在 Node.js 和浏览器中，让异步测试变得简单灵活。

## 主要特点

- **灵活** - 可与任何断言库配合
- **异步支持** - Promise、async/await、回调
- **浏览器支持** - 可在浏览器中运行测试
- **报告器** - 多种内置报告器
- **钩子** - before、after、beforeEach、afterEach
- **监听模式** - 文件变化时重新运行测试

## 快速开始

安装 Mocha：

```bash
npm install --save-dev mocha
```

编写测试：

```javascript
// test/example.test.js
const assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('当值不存在时应返回 -1', function() {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});

describe('异步测试', function() {
  it('应该支持 async/await', async function() {
    const result = await asyncFunction();
    assert.equal(result, 'expected');
  });

  it('应该支持 Promise', function() {
    return promiseFunction().then(result => {
      assert.equal(result, 'expected');
    });
  });
});
```

在 package.json 中配置：

```json
{
  "scripts": {
    "test": "mocha"
  }
}
```

运行测试：

```bash
npm test

# 带选项运行
mocha --watch --reporter spec
```

## 为什么选择 Mocha？

- **成熟** - 经过多年实战检验
- **灵活** - 使用任何断言/Mock 库
- **简单** - 易于学习和使用
- **生态** - 与 Chai、Sinon 等配合良好

## 定价

Mocha 完全**免费开源**，采用 MIT 许可证。

## 相关资源

- [官方网站](https://mochajs.org/)
- [文档](https://mochajs.org/#getting-started)
- [GitHub 仓库](https://github.com/mochajs/mocha)
