# Vite 开发 Tampermonkey 脚本

[[TOC]]

## 1. 介绍

`vite-plugin-monkey` 是一个基于 Vite 的油猴脚本开发工具，可以使用 Vite 的开发模式开发油猴脚本，支持热更新。

参见 [中文文档](https://github.com/lisonge/vite-plugin-monkey/blob/main/README_zh.md) 了解更多。

使用模板快速创建项目：

```bash
pnpm create monkey
```

添加到现有项目：

```bash
pnpm add -D vite-plugin-monkey
```

::: warning

`vite-plugin-monkey` 必须是插件列表的最后一项。

:::

## 2. 使用

下面我们使用 Vue + TypeScript 模板开发一个油猴脚本。使用其他模板与之类似，如果你没有复杂的需求可以使用 Vanilla 模板。

### 2.1 配置

如果你希望脚本尽可能早地执行，例如你希望替换内置变量实现拦截网络请求，可以配置 `@run-at` 为 `document-start`。但是这样会出现一个问题，由于脚本是在 `DOMContentLoaded` 之前执行的，所以无法获取到 `unsafeWindow.document` 对象。

所以我们在页面 DOM 准备好时再挂载 Vue 实例，这样可以确保脚本能正常执行。

```ts
import { createApp } from 'vue'
import App from './App.vue'

async function main() {
  await new Promise((resolve) => {
    if (unsafeWindow.document.readyState === 'complete')
      resolve(undefined)
    else
      unsafeWindow.window.addEventListener('load', resolve)
  })
  const app = unsafeWindow.document.createElement('div')
  app.setAttribute('id', 'my-tamper-app')
  unsafeWindow.document.body.append(app)
  return app
}

createApp(App).mount(await main())
```

这样脚本仍然会在进入页面时立即执行 `mount()` 之前的代码，然后等待页面 DOM 准备好时再执行 `mount()` 挂载 Vue 实例。

### 2.2 CDN 引入

Vue 默认以 CDN 的形式引入，如果不使用 CDN 我们打包看一下大小：

```console
dist/monkey-test.user.js  167.24 kB │ gzip: 38.03 kB
```

下面是默认的状态下打包：

```console
dist/monkey-test.user.js  8.44 kB │ gzip: 3.47 kB
```

对比不使用 CDN，有几十倍的差距。

由于 jsDelivr 在大陆速度较慢，如果你的目标用户在大陆，可以考虑国内的 CDN，如 `npmmirror`、`staticfile`、`baomitu`、`bootcdn` 等。如果你使用的库很少见，可以试着在 `npmmirror` 上找。

需要注意不同 CDN 提供商的文件名和路径可能不同，例如下面对比 `vue` 的引入：

```ts
{
  externalGlobals: {
    vue: cdn.staticfile('Vue', 'vue.runtime.global.prod.min.js'),
  },
}
```

```ts
{
  externalGlobals: {
    vue: cdn.npmmirror('Vue', 'dist/vue.runtime.global.prod.js'),
  },
}
```

部分 `.min.js` 文件是由 CDN 提供商自行压缩，可以根据需求选择。

### 2.3 代码压缩

默认情况下代码不会压缩，这是考虑到 Greasy Fork 的 [代码规则](https://greasyfork.org/zh-CN/help/code-rules)：提交到 Greasy Fork 的代码不得混淆或最小化。如果你不打算提交到 Greasy Fork 等平台，可以开启打码压缩：

```ts
// vite.config.ts
export default defineConfig({
  build: {
    minify: true,
  },
})
```

### 2.4 自动导入

导入 `GM_*` 方法需要默认从 `$` 内导入，也可以开启自动导入。

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    monkey({
      server: {
        mountGmApi: true
      },
    }),
  ],
})
```

这种方法会将变量直接绑定到全局对象 `globalThis`。

下面推荐使用 `unplugin-auto-import` 插件实现自动导入：

安装插件：

```bash
pnpm add -D unplugin-auto-import
```

引入：

```ts
// vite.config.ts
import { defineConfig } from 'vite'
import monkey, { util } from 'vite-plugin-monkey'
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({
      imports: [util.unimportPreset],
    }),
    monkey({
      // ...
    }),
  ],
})
```

## 3. 常见功能实现

### 3.1 全局存储

我们常常需要在脚本内储存一些数据，以便下次打开网页时可以读取到。如果我们使用 `localStorage`，这些数据只会在同一个网站共享，不同网站无法访问，还可能污染原网站的数据。

Tampermonkey 提供了 `GM_getValue` 和 `GM_setValue` 方法，可以在油猴脚本内全局储存数据。

下面我们创建 `src/composables/useMonkeyStore.ts` 来封装一个响应式的油猴脚本存储钩子：

```ts
import { ref, watch } from 'vue'
import type { Ref, UnwrapRef } from 'vue'
import { GM_getValue, GM_setValue } from '$'

/**
 * Tampermonkey 存储钩子
 * @param key 存储键名称
 * @param defaultValue 默认值
 * @returns ref
 */
export function useMonkeyStore<T>(key: string, defaultValue?: T): Ref<UnwrapRef<T>> {
  const gmValue = GM_getValue<T>(key, defaultValue)
  const value = ref(gmValue)
  watch(value, (value) => {
    GM_setValue(key, value)
  }, { deep: true })
  return value
}
```

我们常常希望创建一些全局共享的数据。有时需要响应式地进行持久化，这个时候我们可以用 `@vueuse/core` 中的 `createGlobalState()` 函数创建全局状态。

```ts
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'
import { useMonkeyStore } from './useMonkeyStore'

/**
 * 全局状态，但是不会持久化
 */
export const useActivated = createGlobalState(() => {
  return {
    activated: ref(false),
  }
})

/**
 * 全局配置，可放置到公共配置文件中
 */
export const DefaultConfig = {
  isDark: false,
  isShowLogo: true,
  isShowTitle: true,
  // ...
}

/**
 * 全局配置，将响应式地持久化到 Tampermonkey 中
 */
export const useConfig = createGlobalState(() => {
  return {
    options: useMonkeyStore('myOptions', DefaultConfig),
  }
})
```

或者我们创建一个通用的钩子：

```ts
/**
 * Tampermonkey 全局存储状态钩子
 * @param key 存储键名称
 * @param defaultValue 默认值
 * @param exportName 导出名称，如果不填则默认为 `key`
 * @returns 导出的 `{ [exportName ?? key]: ref }`
 */
export function useGlobalState<T>(key: string, defaultValue?: T, exportName?: string | symbol) {
  return createGlobalState(() => {
    return { [exportName ?? key]: useMonkeyStore(key, defaultValue) }
  })()
}
```

注意这种响应式只能在同一个网页实现响应式，在不同网页想要实现响应需要，请继续看下面的监听变量的实现。

### 3.2 监听变量

### 3.3 元素拖拽

如果你希望开发一个可以拖拽的工具包，悬浮于目标网页之上，那么你很可能需要 `useDraggable` 钩子，它可以让你的元素拖拽起来。

推荐使用 [`@vueuse/core`](https://vueuse.org/) 中的 [`useDraggable`](https://vueuse.org/core/useDraggable/) 钩子，它可以让你的元素拖拽起来。

```ts
const { x, y, style } = useDraggable(target, {
  preventDefault: true,
  draggingElement: unsafeWindow,
  handle,
})
```

- `target`：被移动的目标元素
- `options.preventDefault`：是否阻止默认事件
- `options.draggingElement`：指定为目标窗口
- `options.handle`：被拖拽的元素，默认为 `target`
- 其他参数参见 [useDraggable](https://vueuse.org/core/useDraggable/) 文档

需要将 `style` 绑定到目标元素的 `style` 属性上，且需要设置 `position: absolute` 或 `position: fixed`。

下面是作者自己实现的 `useDraggable` 钩子，更简单容易理解，与框架无关。

::: details useDraggable.ts

通过调用 `destroy()` 方法可以销毁事件监听器。

```ts
/**
 * 支持元素拖拽
 * @param handleElement 可拖拽元素
 * @param targetElement 被拖拽目标元素，需要 `position: absolute` 或 `position: fixed`
 * @param doc 事件监听器所在的文档
 * @param initX 初始位置 `x` (px)
 * @param initY 初始位置 `y` (px)
 */
export function useDraggable(handleElement: HTMLElement, targetElement: HTMLElement, doc: Document, initX?: number, initY?: number) {
  let offsetX = 0
  let offsetY = 0

  // 当鼠标按下时，开始拖拽
  handleElement.addEventListener('mousedown', dragStart)

  function dragStart(event: MouseEvent) {
    event.preventDefault()
    offsetX = event.clientX - targetElement.offsetLeft
    offsetY = event.clientY - targetElement.offsetTop
    doc.addEventListener('mousemove', drag)
    doc.addEventListener('mouseup', dragEnd)
  }

  // 拖拽过程中的处理函数
  function drag(event: MouseEvent) {
    event.preventDefault()
    targetElement.style.left = `${event.clientX - offsetX}px`
    targetElement.style.top = `${event.clientY - offsetY}px`
  }

  // 拖拽结束时的处理函数
  function dragEnd() {
    doc.removeEventListener('mousemove', drag)
    doc.removeEventListener('mouseup', dragEnd)
  }

  // 设置初始位置
  if (initX !== undefined)
    targetElement.style.left = `${initX}px`
  if (initY !== undefined)
    targetElement.style.top = `${initY}px`

  // 销毁时移除事件监听器
  function destroy() {
    handleElement.removeEventListener('mousedown', dragStart)
  }

  return {
    destroy,
  }
}
```

:::

### 3.4 网络请求

如果你需要模拟当前网页的请求，可以直接使用 `unsafeWindow.fetch()` 方法或者 `unsafeWindow.XMLHttpRequest()` 对象。

下面是一个请求示例：

```ts
interface MyParams {
  id: number
  name: string
}

export async function request<T extends MyParams>(params: T): Promise<Response> {
  const queryString = new URLSearchParams(p as unknown as Record<string, string>).toString()
  const url = `https://example.com/api?${queryString}`
  const response = await unsafeWindow.fetch(url, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
  })
  return response
}
```

如果网站的鉴权使用的是 Cookie，要带上 `credentials: 'include'`，才会携带 Cookie 进行请求。如果网站使用的是 Token，可以在请求头中添加 `Authorization` 字段。

如果你需要更加强大的请求方式，如发起跨域请求，可以使用 Tampermonkey 提供的 `GM_xmlhttpRequest()` 方法。

由于部分 Cookie 是 `HttpOnly` 的，无法通过 `document.cookie` 获取。因此使用自定义的 `GM_xmlhttpRequest()` 并不能模拟当前网页的请求，因为受保护的 Cookie 脚本是无法获取的。

```ts

```

### 3.5 拦截请求

一般拦截请求都是靠重写 `XMLHttpRequest` 对象和 `fetch` 方法来实现的，所以这种方法只能拦截 Ajax 请求，不能拦截 `document` / `script` / `ws` 等请求。

如果需要拦截复杂的请求需要重写更复杂的对象。例如拦截 JSONP 请求，需要知道当前网页是如何创建 `<script>` 元素的。

在拦截之前，我们希望我们的脚本尽可能早地执行，因此我们需要配置 `@run-at` 为 `document-start`，这样我们的脚本会在 `DOMContentLoaded` 之前执行。

```ts
// vite.config.ts
export default defineConfig({
  plugins: [
    monkey({
      userscript: {
        'run-at': 'document-start',
      },
    }),
  ],
})
```

下面我们重写 `fetch` 方法：

```ts
const originFetch = fetch
unsafeWindow.fetch = (url, options) => {
  return originFetch(url, options).then(async (response) => {
    if (url.match(/\/api\/test/)) {
      const responseClone = response.clone()
      const res = await responseClone.json()
      // 此处可以修改数据
      res.data.push('...')
      const responseNew = new Response(JSON.stringify(res), response)
      return responseNew
    } else {
      return response​
    }
  })
}
```

总之，重写请求方法可以完成取消请求、拦截请求、修改数据、修改结果等任何操作。

重写 `XMLHttpRequest` 对象也是类似的，但是更加复杂，还好我们可以借助第三方库来实现。

[`ajax-hook`](https://github.com/wendux/ajax-hook) 是一个可以拦截 `XMLHttpRequest` 对象的库，兼容 ES5 与 ES6。下面安装 `ajax-hook`：

```bash
pnpm add -D ajax-hook
```

示例代码：

```ts
import { proxy } from 'ajax-hook'

proxy({
  //请求发起前进入
  onRequest: (config, handler) => {
    console.log(config.url)
    handler.next(config);
  },
  //请求发生错误时进入，比如超时
  // 注意，不包括 HTTP 状态码错误，如 404、500
  onError: (err, handler) => {
    console.log(err.type)
    handler.next(err)
  },
  //请求成功后进入
  onResponse: (response, handler) => {
    console.log(response.response)
    handler.next(response)
  }
})
```

此外也可以使用更高级的 `hook()` 函数来拦截各个请求阶段的回调。

```ts
hook({
  // 参数 `xhr` 为原生 XHR 对象
  onload: function (xhr, event) {
    // this 为代理 XHR 对象
    // 原生 XHR 对象扩展了一个 `getProxy()` 方法，调用它可以获取代理 XHR 对象
    // this === xhr.getProxy()
    // 可以通过代理 XHR 对象的 `xhr` 属性获取原生 XHR 对象
    // this.xhr === xhr
    console.log("onload called")
    return false
  },
})
```
