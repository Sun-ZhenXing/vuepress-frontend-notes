# Vue 树形组件

[[TOC]]

## 1. 实现原理

本示例使用 `font-awesome` 作为图标库，如果你没有安装，可以使用下面的命令或 HTML 代码安装。

::: code-tabs

@tab yarn

```bash
yarn add font-awesome
```

@tab npm

```bash
npm install font-awesome
```

@tab pnpm

```bash
pnpm add font-awesome
```

@tab CDN

```html
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
```

:::

在 Vue 的 `<template>` 中使用自身的名称即可实现树形组件。

```vue
@include(@/components/TreeTest.vue)
```

直接使用 `TreeTest` 组件即可：

```vue
<TreeTest :items="data" />
```

## 2. 示例

<TreeTest :items="data" />

<script setup lang="ts">
import TreeTest from '@/components/TreeTest.vue'
import 'font-awesome/css/font-awesome.css'
import data from '@/data/test-tree.json'
</script>

其中数据如下：

```json
@include(@/data/test-tree.json)
```

## 3. 递归修改名称

我们从后端获得的数据往往和树形组件名称不一致，这时候我们需要递归修改名称。

例如后端得到的数据的名称是 `label` 和 `subNodes`，我们需要将其修改为 `name` 和 `children`。

@[code ts](./src/transform-tree.ts)
