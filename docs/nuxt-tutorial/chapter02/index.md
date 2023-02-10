---
title: 第 02 章：开始使用 Nuxt3
description: 创建第一个项目
---

# 2. 开始使用 Nuxt3

::: info 环境要求

如果你已经安装了 Node.js，请检查版本大于 16.11，命令：

```bash
node --version
```

推荐 VS Code 安装插件 TypeScript Vue Plugin (Volar)：

```bash
code --install-extension Vue.volar
```

:::

首先创建项目：

::: code-tabs#npm

@tab npx

```bash
npx nuxi init <project-name>
```

@tab pnpm

```bash
pnpm dlx nuxi init <project-name>
```

:::

然后安装依赖：

::: code-tabs#npm

@tab yarn

```bash
cd <project-name>
yarn install
```

@tab npm

```bash
cd <project-name>
npm install
```

@tab pnpm

```bash
cd <project-name>
pnpm install
```

:::

接着在 VS Code 中打开：

```bash
code .
```

启动开发模式：

::: code-tabs#npm

@tab yarn

```bash
yarn dev -o
```

@tab npm

```bash
npm run dev -- -o
```

@tab pnpm

```bash
pnpm dev -o
```

:::

其中 `-o` 表示自动打开浏览器页面（<http://localhost:3000>），这样你可以直接看到效果了，请等待一会完成初始渲染。
