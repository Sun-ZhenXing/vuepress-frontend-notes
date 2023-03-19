# 3. Nuxt3 路由

[[TOC]]

## 3.1 开始使用路由

Nuxt3 配置好了文件系统路由，这意味着 `pages/` 下的 Vue 组件和页面对应。通过对每个页面使用动态导入，Nuxt3 利用代码拆分为请求的路由提供最少数量的 JavaScript。

项目默认生成了 `app.vue`，我们加入一个新的组件用于路由：

```vue
<template>
  <header>
    <h2>导航内容</h2>
  </header>
  <NuxtPage />
</template>
```

然后我们添加一个页面 `pages/about.vue`：

```vue
<template>
  <div>
    <h2>关于</h2>
    <p>这是关于页</p>
  </div>
</template>
```

然后打开 <http://localhost:3000/about> 可以看到内容。

目录下默认的组件是 `index.vue`。

Nuxt3 路由基于 [Vue Router](https://router.vuejs.org/)，根据文件名从 `pages/` 目录中创建的每个组件生成路由。文件系统路由规则如下，例如我有这样的文件结构：

- `pages/`
    - `about.vue`
    - `posts/`
        - `[id].vue`

Nuxt3 将自动生成下面的路由信息：

```json
{
  "routes": [
    {
      "path": "/about",
      "component": "pages/about.vue"
    },
    {
      "path": "/posts/:id",
      "component": "pages/posts/[id].vue"
    }
  ]
}
```

## 3.2 导航

`<NuxtLink>` 组件在它们之间链接页面。它表现为一个 `<a>` 标签，其中 `href` 属性设置为页面的路由。并且使用 JavaScript 进行切换 URL，阻止整个页面的刷新，并允许动画过渡。

例如，修改 `app.vue` 为下面的代码：

```vue{4-10}
<template>
  <header>
    <h2>导航内容</h2>
    <nav>
      <ul>
        <li><NuxtLink to="/about">关于</NuxtLink></li>
        <li><NuxtLink to="/posts/1">文章 1</NuxtLink></li>
        <li><NuxtLink to="/posts/2">文章 2</NuxtLink></li>
      </ul>
    </nav>
  </header>
  <NuxtPage />
</template>
```

## 3.3 读取路由参数

`useRoute()` 组合可以在 `<script setup>` 块或 Vue 组件的 `setup()` 方法中使用，以访问当前路由细节。

```vue
<script setup lang="ts">
const route = useRoute()

// 当进入 /posts/1 页面时 route.params.id 为 1
console.log(route.params.id)
</script>
<template>
  当前 ID: {{ route.params.id }}
</template>
```

## 3.4 子路由

路由组件可以嵌套，在父组件 `demo.vue` 中使用 `<NuxtPage />` 标签，然后在同级目录下创建 `demo/` 目录，其目录下的组件将展现为子组件。

## 3.5 自定义路由

新建 `app/router.options.ts`，然后进行配置即可。

```ts
import { type RouteRecordRaw } from 'vue-router'

const customRoutes: RouteRecordRaw[] = [
  {
    path: '/custom',
    name: 'custom',
    component: () => import('@/pages/test.vue')
  }
]

export default {
  routes: (_routes: RouteRecordRaw[]) => _routes.concat(customRoutes)
}
```
