# 在 Vue 项目中引入 CDN 库

[[TOC]]

## 1. 全局引入

### 1.1 Webpack

在 `public/index.html` 中引入 `<script>` 标签

```html
<body>
  <div id="app"></div>
  <script src="..."></script>
</body>
```

在 `vue.config.js` 中配置：

```js
module.exports = {
  configureWebpack: {
    externals: {
      'function-plot': 'functionPlot'
    }
  }
}
```

### 1.2 Vite

安装 `vite-plugin-externals` 插件：

```bash
pnpm add -D vite-plugin-externals
```

在 `vite.config.ts` 中配置：

```ts
import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { viteExternalsPlugin } from 'vite-plugin-externals'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    viteExternalsPlugin({
      externals: [
        {
          module: 'function-plot',
          global: 'functionPlot'
        }
      ]
    })
  ]
})
```

如果你在开发环境中引入了生产环境的库，可能会使得 HMR 失败。

你也可以使用 `disableInServe: true` 避免在 Serve 模式中转换。

## 2. 在组件中引入

由于 `<template>` 中不能使用 `<script>` 标签，所以我们需要使用 `<component>` 组件来引入。

```vue
<template>
  <component is="script" src="https://unpkg.com/function-plot/dist/function-plot.js"></component>
</template>
```
