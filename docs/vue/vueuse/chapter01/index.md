# 1. 开始使用 VueUse

::: warning 官方文档

此笔记不是官方文档，如果需要阅读官方文档请访问 [VueUse 官方文档](https://vueuse.org/guide/)。现在有第三方翻译的中文版本 [VueUse 中文文档](http://www.vueusejs.com/)，与英文版本一致。

:::

[[TOC]]

## 1. 什么是 VueUse

VueUse 是一个基于 **组合式 API**（Composition API）的实用函数的集合。如果不了解组合式 API，请阅读 Vue3：组合式 API。

## 2. 开始使用

::: tabs

@tab npm

```bash
npm i @vueuse/core
```

@tab pnpm

```bash
pnpm add @vueuse/core
```

@tab CDN

```html
<script src="https://unpkg.com/@vueuse/shared"></script>
<script src="https://unpkg.com/@vueuse/core"></script>
```

这将暴露全局变量到 `window.VueUse`。

:::

## 3. Nuxt 使用 VueUse

可以使用下面的命令安装依赖：

```bash
npm i -D @vueuse/nuxt @vueuse/core
```

或者

```bash
pnpm add -D @vueuse/nuxt @vueuse/core
```

配置：

::: code-tabs

@tab nuxt3

```ts
// nuxt.config.ts
export default defineNuxtConfig({
  modules: [
    '@vueuse/nuxt'
  ]
})
```

@tab nuxt2

```js
// nuxt.config.js
export default {
  buildModules: [
    '@vueuse/nuxt'
  ]
}
```

:::

配置之后可以在任意位置引入 VueUse 中的函数：

```vue
<script setup lang="ts">
const { x, y } = useMouse()
</script>

<template>
  <div>pos: {{ x }}, {{ y }}</div>
</template>
```

## 4. 使用示例

直接引入 `@vueuse/core` 即可。

```js
import { useLocalStorage, useMouse, usePreferredDark } from '@vueuse/core'

export default {
  setup() {
    // tracks mouse position
    const { x, y } = useMouse()

    // is user prefers dark theme
    const isDark = usePreferredDark()

    // persist state in localStorage
    const store = useLocalStorage(
      'my-storage',
      {
        name: 'Apple',
        color: 'red',
      }
    )

    return { x, y, isDark, store }
  }
}
```

[官方文档：函数列表](https://vueuse.org/functions.html) 可以索引所有的函数功能。
