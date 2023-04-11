# 创建项目

[[TOC]]

## 1. 创建 Nuxt3 项目

本文全部使用 `pnpm` 作为包管理器，并全面使用 TypeScript。下面创建 Nuxt3 项目：

```bash
pnpm dlx nuxi init twitter-clone
cd twitter-clone
```

::: details 执行错误

如果执行出错，可以参考 [配置 hosts 文件](https://blog.alexsun.top/posts/envs/use-hosts-file.html)，也可以直接克隆 [nuxt-starter](https://github.com/nuxt/starter)：

```bash
git clone -b v3 https://github.com/nuxt/starter.git twitter-clone
cd twitter-clone

# 删除 .git 文件夹
# Linux/MacOS
rm -rf .git
# Windows
rd /s /q .git
```

:::

现在安装依赖：

```bash
pnpm i
```

创建 Git 仓库：

```bash
git init
git add .
git commit -m "init"
git branch -M main
```

添加 `@types/node` 依赖防止 VS Code 无法解析 Node 类型：

```bash
pnpm add -D @types/node
```

打开 VS Code 进行开发：

```bash
code .
```

运行项目：

```bash
pnpm dev -o
```

## 2. 添加依赖

现在需要停止运行项目，然后添加依赖。

首先是 TailwindCSS 插件，由于 `@nuxtjs/tailwindcss` 依赖于 Webpack，所以先安装 Webpack：

```bash
pnpm add -D webpack
```

然后安装 TailwindCSS，这个步骤也可以参考 [TailwindCSS 官方文档](https://tailwindcss.com/docs/guides/nuxtjs#3)：

```bash
pnpm add -D @nuxtjs/tailwindcss tailwindcss@latest postcss@latest autoprefixer@latest
```

生成配置文件：

```bash
pnpm tailwindcss init -p --ts
```

配置 `nuxt.config.ts`：

```ts
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss'
  ],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
```

配置 `tailwind.config.ts`：

```js
import type { Config } from 'tailwindcss'

export default {
  darkMode: 'class',
  theme: {
    screens: {
      xs: "614px",
      sm: "1002px",
      md: "1022px",
      lg: "1092px",
      xl: "1280px",
    },
    extend: {
      colors: {
        dim: {
          50: "#5F99F7",
          100: "#5F99F7",
          200: "#38444d",
          300: "#202e3a",
          400: "#253341",
          500: "#5F99F7",
          600: "#5F99F7",
          700: "#192734",
          800: "#162d40",
          900: "#15202b",
        },
      },
    },
  },
  plugins: [],
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
} satisfies Config
```

编辑 `App.vue` 文件，测试 TailWindCSS 是否生效：

```vue
<script setup lang="ts">
const darkMode = ref(true)
</script>

<template>
  <div :class="{ dark: darkMode }">
    <h1 class="text-red-500 dark:text-dim-600">Twitter clone</h1>
  </div>
</template>
```

现在查看效果：

```bash
pnpm dev -o
```

如果看到红色标题代表 TailWindCSS 已经生效了。

## 3. 个性化配置

Vue 开发必备 *Vue Language Features (Volar)*，也可以额外安装 Vue TypeScript 插件：

```bash
code --install-extension Vue.volar
code --install-extension Vue.vscode-typescript-vue-plugin
```

这两个插件想必 Vue 开发者都已经安装了，就不放在推荐列表里了。

我们可能需要让 VS Code 的图标更美观一点，需要安装 `material-icon-theme` 主题：

```bash
code --install-extension pkief.material-icon-theme
```

然后配置 `.vscode/settings.json`：

```json
{
  "workbench.iconTheme": "material-icon-theme"
}
```

如果没有安装 *Tailwind CSS IntelliSense*，那么可以安装此插件获得良好的开发体验：

```bash
code --install-extension bradlc.vscode-tailwindcss
```

现在愉快地开发吧！
