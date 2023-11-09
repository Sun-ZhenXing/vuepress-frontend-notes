# Nuxt3 初始化和基础配置

[[TOC]]

## 1. 项目初始化

其中 `nuxt-demo` 为项目名称，可自行修改。

```bash
mkdir nuxt-demo
cd nuxt-demo
pnpm dlx nuxi init .
```

选择包管理器，这里选择 `pnpm`，初始化 Git 仓库。

## 2. 基础配置

### 1. ESlint

此处使用 [@antfu](https://github.com/antfu) 提供的方案。需要注意的是，`.eslintignore` 文件不再有效，并且也不再使用 Prettier。详情请阅读文档 [antfu/eslint-config](https://github.com/antfu/eslint-config)。

```bash
pnpm add -D eslint @antfu/eslint-config
```

在 `eslint.config.js` 中添加如下内容：

```js
import antfu from '@antfu/eslint-config'

export default antfu()
```

在 `package.json` 中添加如下内容：

```json
{
  "scripts": {
    "lint": "eslint .",
    "lint:fix": "eslint . --fix"
  }
}
```

::: details VS Code 自动修复

将下面的配置保存到 `.vscode/settings.json`：

```json
{
  // Enable the ESlint flat config support
  "eslint.experimental.useFlatConfig": true,

  // Disable the default formatter, use eslint instead
  "prettier.enable": false,
  "editor.formatOnSave": false,

  // Auto fix
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
    "source.organizeImports": false
  },

  // Silent the stylistic rules in you IDE, but still auto fix them
  "eslint.rules.customizations": [
    { "rule": "style/*", "severity": "off" },
    { "rule": "*-indent", "severity": "off" },
    { "rule": "*-spacing", "severity": "off" },
    { "rule": "*-spaces", "severity": "off" },
    { "rule": "*-order", "severity": "off" },
    { "rule": "*-dangle", "severity": "off" },
    { "rule": "*-newline", "severity": "off" },
    { "rule": "*quotes", "severity": "off" },
    { "rule": "*semi", "severity": "off" }
  ],

  // Enable eslint for all supported languages
  "eslint.validate": [
    "javascript",
    "javascriptreact",
    "typescript",
    "typescriptreact",
    "vue",
    "html",
    "markdown",
    "json",
    "jsonc",
    "yaml"
  ]
}
```

:::

### 2. Sass

只需要安装一个依赖即可：

```bash
pnpm add -D sass
```

### 3. UnoCSS

参见 [Nuxt 集成 UnoCSS 官方文档](https://unocss.dev/integrations/nuxt)。

```bash
pnpm add -D @unocss/nuxt @unocss/preset-uno
```

其中 `@unocss/preset-uno` 是标准预设，如果需要其他预设参见下方的 UnoCSS 预设。

配置：

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@unocss/nuxt',
  ],
})
```

添加 `uno.config.ts` 文件：

```ts
// uno.config.ts
import { defineConfig } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
})
```

建议安装 VS Code 插件 [UnoCSS](https://marketplace.visualstudio.com/items?itemName=antfu.unocss) 获得语法高亮和智能提示。

安装 `@unocss/eslint-config` 来获取 ESLint 配置，[详细信息](https://unocss.dev/integrations/eslint)：

```bash
pnpm add -D @unocss/eslint-config
```

在 `eslint.config.js` 中添加如下内容：

```js
// eslint.config.js
import unocss from '@unocss/eslint-config/flat'

export default [
  unocss,
  // other configs
]
```

或者在 `.eslintrc` 中添加：

```json
{
  "extends": [
    "@unocss"
  ]
}
```

::: details UnoCSS 预设

其他常见 [UnoCSS 预设](https://unocss.dev/presets/)：

```bash
# 支持属性模式（Attributify Mode）预设
pnpm add -D @unocss/preset-attributify

# Icon
pnpm add -D @unocss/preset-icons

# 排版预设
pnpm add -D @unocss/preset-typography

# 网络字体预设
pnpm add -D @unocss/preset-web-fonts

# TailwindCSS / WindiCSS 预设
pnpm add -D @unocss/preset-wind

# 最小预设
pnpm add -D @unocss/preset-mini

# 标签化预设
pnpm add -D @unocss/preset-tagify

# rem 到 px 单位转换预设
pnpm add -D @unocss/preset-rem-to-px

# 支持变量组
pnpm add -D @unocss/transformer-variant-group

# 支持指令
pnpm add -D @unocss/transformer-directives

# 支持混淆类名
pnpm add -D @unocss/transformer-compile-class

# JSX 标签化
pnpm add -D @unocss/transformer-attributify-jsx

# 编译 Pug 模板
pnpm add -D @unocss/extractor-pug

# 编译 MDC（如 *.md、*.mdc 和 *.markdown 文件）
pnpm add -D @unocss/extractor-mdc

# 支持 Svelte 语法
pnpm add -D @unocss/extractor-svelte
```

更多社区预设参见 [官方文档](https://unocss.dev/presets/community)。

:::

### 4. Iconfiy

Nuxt3 官方集成了 [Iconify](https://iconify.design/)，可以使用 [`nuxt-icon`](https://nuxt.com/modules/icon) 来快速使用图标。详细内容见 [GitHub](https://github.com/nuxt-modules/icon)。

```bash
pnpm add -D nuxt-icon
```

配置：

```ts
// nuxt.config.ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    'nuxt-icon',
  ],
})
```
