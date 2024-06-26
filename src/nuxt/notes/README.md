# Nuxt3 常见问题总结

[[TOC]]

## 1. 内部 BUG

### 1.1 远程调试无法使用

在手机上连接不到调试服务器，显示连接 `ws://localhost:4000` 错误。

::: tip 手机调试

推荐手机使用 Kiwi Browser，这个浏览器可以使用 Chrome 插件，还可以使用原生的开发者工具。

:::

无法解决，见 [nuxt/nuxt#15417](https://github.com/nuxt/nuxt/issues/15417) 有曲线救国的办法，具体见问题，太复杂了没有尝试。

::: details 已解决问题

### ~~快速触发导航导致 Vue 渲染错误~~（已解决）

参见 [nuxt/nuxt#13350](https://github.com/nuxt/nuxt/issues/13350)，此问题想了很久没有办法解决。

此问题可以追溯到 [vue/core#8105](https://github.com/vuejs/core/issues/8105)，是 Vue 的实验性特征 `<Suspense />` 导致的，而 Nuxt 的过渡动画是使用 `<Suspense />` 实现的，所以无法解决。

临时解决方法：

1. 禁用过渡动画
2. 阻止过快触发导航，[这一点我已经提出来了](https://github.com/nuxt/nuxt/issues/13350#issuecomment-1543968330)，但是不能解决 100% 的问题，因此需要配合方法 3
3. 监听全局错误然后强制刷新，参见下面的代码，体验很差

```ts
if (!import.meta.env.SSR) {
  // 当出现渲染错误时，自动刷新页面
  window.addEventListener('error', (event) => {
    if (event.message.includes('insertBefore')) {
      event.preventDefault()
      window.location.reload()
    }
  })
}
```

还有一种方法，可以临时解决此问题，不过可能导致过渡行为间歇性失效，原因未知。

```vue
<template>
  <nuxt-layout>
    <Transition name="page" mode="out-in">
      <div :key="$route.fullPath">
        <nuxt-page />
      </div>
    </Transition>
  </nuxt-layout>
</template>
```

### ~~dev 过慢~~（已解决）

更新后发现，Windows 下 `dev` 比 `build` 还慢，一直在执行 Nitro built，等了好几分钟才出来。

解决不了，见 [nuxt/nuxt#20990](https://github.com/nuxt/nuxt/issues/20990)，以上所有方法均无效，直接回滚版本吧。初步猜测是 Nuxt 依赖的 Nitro 依赖的 Rollup 依赖的 Babel 导致的，暂未解决。

### ~~如何调试 `error.vue`~~（已解决）

放弃调试了，这个页面如果有 `[...slug].vue`，那么这个页面显示不了，如果没有，那么调试的时候显示源代码，有点混乱。

最简单的办法是故意写错一段代码，然后这个页面就能正常渲染了（即错误页面确实只在错误的时候被正确渲染，但如果错误页面都错误了 Nuxt 就真的不知道干什么了）。

:::

## 2. 常规问题

### 2.1 类型异常

总是跳出莫名其妙的类型错误。

可能的解决方法：

1. 重新运行 `pnpm i`
2. VS Code 命令面板：**TypeScript: 重载项目** 或者 **TypeScript: 重启 TS 服务器**

如果 `server/tsconfig.json` 提示 **无法写入文件 XXX，因为它会覆盖输入文件。**，可以尝试下面的方法。

将出现问题的文件的路径添加到 `exclude` 中，使用 glob 语法描述路径：

```json
{
  "extends": "../.nuxt/tsconfig.server.json",
  "exclude": [
    "../eslint.config.*"
  ]
}
```

### 2.2 部分依赖加载太慢或无法使用

注意很多 `@nuxtjs/` 下的依赖都是仅适用于 Nuxt 2 的，但也有例外，而且有很多是 Alpha/Beta 版本，不稳定也不完整。

为什么我的 Pinia 无法持久化？安装这个 `@pinia-plugin-persistedstate/nuxt` 然后再看看文档。

### 2.3 如何使用 Axios

不要用，Axios 在 Nuxt 3 中被废除了，Axios 有报告在 SSR 中出现内存泄漏，所以也别用了。新的 API 代替就行了。

## 3. 总结

- 使用 `import.meta.env.SSR` 判断是否为 SSR 环境
- 使用 `process.env.NODE_ENV === 'development'` 判断是否为开发环境
- 使用 `process.env.NODE_ENV === 'production'` 判断是否为生产环境
- 可以在 `nuxt.config.ts` 中使用 `runtimeConfig.public` 指定特殊变量
  - 如 `buildTime: Date.now()` 表示打包时间
  - 如 `version: require('./package.json').version` 表示版本号

### ~~如何用 Nuxt 写一个 Nuxt 文档~~（已过时）

Nuxt 的文档显然是 Nuxt 做的，但是官方 GitHub 里面没有一个配置文件是和这个文档有关的，只有格式化 MarkDown，而且这个 MarkDown 格式很怪。

因为官方还没把文档的源码放上去，那个 MarkDown 文件只是临时给你提交的。[官方说了](https://github.com/nuxt/nuxt/tree/main/docs)：

> You can contribute directly on GitHub for now, we are planning to open source nuxt.com repo for everyone to contribute with ease very soon.

所以其实 Nuxt 的文档是 [Docus](https://docus.dev/) 做的，你可以做一个差不多的 Nuxt 文档。

其实这个生态并不如 VuePress，很多插件配置很痛苦而且不完整，建议使用 VuePress/VitePress 写文档。

> 不要把 VuePress 2 项目放在 Nuxt 项目下，编译报错，无法解决。应该是 Node 包导入机制的问题，这些包有许多冲突。
