---
name: add-testing-tool
description: Add new testing tools to QAStack project by collecting tool information, generating content, and updating data files. Use when adding new tools, creating tool entries, or when user mentions adding testing tools to the directory.
---

# Add Testing Tool

自动化添加新测试工具到 QAStack 项目的完整流程。

## 快速开始

当用户说"添加一个新的测试工具"或"我想把 XXX 工具加入目录"时，使用此 Skill。

## 操作步骤

### 1. 智能识别工具信息

**优先使用已知信息**：对于常见的测试工具，直接使用已知信息，无需询问用户。

**常见工具列表**（我了解的工具，可直接添加）：
- Cypress, Playwright, Selenium, Puppeteer, WebdriverIO
- Jest, Mocha, Jasmine, Vitest, AVA
- Postman, Insomnia, REST Client
- JMeter, k6, Gatling, Locust
- TestCafe, Nightwatch, Protractor
- Cucumber, SpecFlow
- 等其他知名测试工具

**处理流程**：

1. **如果我了解这个工具**：
   - 直接使用我的知识填充所有必填字段
   - 生成合适的 slug（工具名小写，多词用连字符）
   - 提供准确的官网链接、定价模式、标签
   - 编写简短描述
   - Logo 设置为 null（提醒用户后续添加）
   - 继续执行步骤 2（验证数据）

2. **如果我不了解或不确定**：
   - 使用 AskUserQuestion 工具收集以下信息：

**必填字段**：
- **工具名称** (title): 工具的显示名称
- **Slug**: URL 友好的标识符（小写字母、数字、连字符）
- **简短描述** (description): 用于卡片显示的简短描述（1-2 句话）
- **官网链接** (affiliateLink): 工具的官方网站 URL
- **定价模式** (pricing): 选项为 `free`、`paid` 或 `freemium`
- **标签** (tags): 从以下选项中选择（可多选）：
  - `automation` - 自动化测试
  - `api-testing` - API 测试
  - `ui-testing` - UI 测试
  - `e2e-testing` - 端到端测试
  - `unit-testing` - 单元测试
  - `browser-automation` - 浏览器自动化
  - `performance` - 性能测试
  - `load-testing` - 负载测试

**可选字段**：
- **Logo 图片**: 工具的 logo（用户提供路径或 URL）

### 2. 验证数据完整性

在添加工具前，执行以下验证：

1. **检查 slug 唯一性**：
   ```bash
   # 读取 data/tools.json，确保 slug 不重复
   ```

2. **验证必填字段**：
   - 所有必填字段都已填写
   - slug 格式正确（仅包含小写字母、数字、连字符）
   - affiliateLink 是有效的 URL
   - pricing 值在允许的选项中
   - tags 都是有效的标签

3. **检查文件冲突**：
   - `data/content/{slug}.md` 不存在
   - 如果存在，询问用户是否覆盖

### 3. 处理 Logo 图片

根据用户提供的 logo 信息：

**情况 A - 用户提供本地文件路径**：
1. 验证文件存在
2. 复制到 `public/images/tools/{slug}.png` 或相应扩展名
3. 在 tools.json 中设置 logo 路径为 `/images/tools/{slug}.{ext}`

**情况 B - 用户提供 URL**：
1. 告知用户需要手动下载图片
2. 提供保存路径：`public/images/tools/{slug}.png`
3. 在 tools.json 中设置 logo 路径为 `/images/tools/{slug}.png`
4. 标记为待完成任务

**情况 C - 暂无 logo**：
1. 在 tools.json 中设置 logo 为 `null`
2. 提醒用户后续可以添加

### 4. 生成 Markdown 内容

使用模板生成 `data/content/{slug}.md` 文件：

参考 [templates/tool-content.md](templates/tool-content.md) 模板。

**内容结构**（混合模式）：
- 自动生成基础框架
- 使用 `<!-- TODO: ... -->` 标记需要用户补充的部分
- 包含常见章节：功能特点、使用场景、优缺点等

### 5. 更新 tools.json

1. 读取 `data/tools.json`
2. 添加新工具对象到数组末尾
3. 保持 JSON 格式化（2 空格缩进）
4. 写回文件

**工具对象格式**：
```json
{
  "slug": "tool-slug",
  "title": "Tool Name",
  "logo": "/images/tools/tool-slug.png",
  "description": "Short description",
  "affiliateLink": "https://example.com",
  "pricing": "free",
  "tags": ["automation", "ui-testing"],
  "content": "tool-slug.md"
}
```

### 6. 验证结果

完成后执行以下检查：

1. **文件存在性**：
   - `data/tools.json` 已更新
   - `data/content/{slug}.md` 已创建
   - Logo 文件已就位（如果提供）

2. **JSON 有效性**：
   ```bash
   # 验证 tools.json 是否为有效 JSON
   ```

3. **提供预览链接**：
   - 开发环境：`http://localhost:3000/tools/{slug}`
   - 提醒用户运行 `npm run dev` 查看效果

### 7. 后续任务提醒

完成后，提醒用户：

- [ ] 如果 logo 是 URL，需要手动下载并保存到指定路径
- [ ] 完善 Markdown 内容中标记为 TODO 的部分
- [ ] 运行 `npm run dev` 预览效果
- [ ] 运行 `npm run build` 确保构建成功
- [ ] 提交更改到 git

## 最佳实践

1. **Slug 命名规范**：
   - 使用工具的官方名称转小写
   - 多个单词用连字符分隔
   - 例如：`selenium-webdriver`、`cypress`、`jest`

2. **描述撰写**：
   - 简洁明了，突出核心功能
   - 避免营销语言
   - 长度控制在 100-150 字符

3. **标签选择**：
   - 选择 2-4 个最相关的标签
   - 优先选择主要功能标签
   - 避免过度标记

4. **内容质量**：
   - 提供足够的框架让用户快速开始
   - 标记需要补充的关键信息
   - 保持格式一致性

## 错误处理

**Slug 重复**：
- 提示用户该 slug 已存在
- 建议替代 slug（添加后缀或使用全称）
- 询问是否更新现有工具

**文件已存在**：
- 询问用户是否覆盖
- 提供备份选项
- 显示现有内容预览

**无效数据**：
- 明确指出哪个字段有问题
- 提供正确格式示例
- 重新收集该字段

## 示例

### 示例 1：添加 Playwright

用户输入：
```
添加 Playwright 工具
```

Skill 执行：
1. 收集信息（通过问答）
2. 验证 slug "playwright" 可用
3. 生成 `data/content/playwright.md`
4. 更新 `data/tools.json`
5. 提醒用户添加 logo 和完善内容

### 示例 2：批量添加

用户输入：
```
我要添加 3 个工具：Cypress、Jest、Mocha
```

Skill 执行：
1. 为每个工具分别收集信息
2. 逐个验证和创建
3. 汇总完成情况
4. 提供统一的后续任务清单

## 注意事项

- **不要自动启动开发服务器**（遵循用户的 CLAUDE.md 规则）
- **使用反斜杠路径**（Windows 系统）
- **保持 JSON 格式化**（2 空格缩进）
- **遵循原子化组件原则**（如果涉及前端修改）
- **添加中文注释**（如果生成代码）
