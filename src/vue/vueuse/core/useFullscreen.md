# [useFullscreen](https://vueuse.org/core/useFullscreen/)

[[TOC]]

## 1. 介绍

响应式设置全屏。

## 2. 使用示例

全屏显示和隐藏：

```ts
import { useFullscreen } from '@vueuse/core'

const { isFullscreen, enter, exit, toggle } = useFullscreen()
```

全屏显示和隐藏某个元素：

```vue
<script setup lang="ts">
const el = ref<HTMLElement | null>(null)

const { isFullscreen, enter, exit, toggle } = useFullscreen(el)
</script>

<template>
  <video ref='el'>
</template>
```

使用 `@vueuse/components` 提供的无渲染版本：

```vue
<template>
  <UseFullscreen v-slot="{ toggle }">
    <video />
    <button @click="toggle">
      Go Fullscreen
    </button>
  </UseFullscreen>
</template>
```
