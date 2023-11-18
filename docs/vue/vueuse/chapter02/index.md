# 2. VueUse 最佳实践

[[TOC]]

::: info Vue3 Ref 对象

在下文及后续文档中，`Ref` 对象指的是由 `ref()` 创建的响应式对象，也可以写作 ref，ref 的类型是 `Ref`。当宽泛地指代可能不止一个 `Ref` 对象时，使用 refs。

:::

## 1. 解构

VueUse 中的大多数函数都会返回一个 `Ref` 对象，你可以使用 ES6 的对象解构语法来获取你需要的东西，例如：

```ts
import { useMouse } from '@vueuse/core'

// "x" 和 "y" 都是 refs
const { x, y } = useMouse()
console.log(x.value)

const mouse = useMouse()
console.log(mouse.x.value)
```

如果你喜欢把它们作为对象属性的样式来使用，你可以通过使用 `reactive()` 来解除对 refs 的包装，例如：

```ts
import { reactive } from 'vue'
import { useMouse } from '@vueuse/core'

const mouse = reactive(useMouse())

// "x" 和 "y" 将自动解包装，不需要 `.value`
console.log(mouse.x)
```

## 2. 清除副作用

类似于 Vue 的 `watch` 和 `computed` 在组件被卸载时将被处置，VueUse 的函数也会自动清理副作用。

例如，`useEventListener` 会在组件卸载时调用 `removeEventListener`，所以你不需要担心这个问题。

```ts
// 将会自动清理
useEventListener('mousemove', () => {})
```

所有 VueUse 函数都遵循这个惯例。

为了手动处理副作用，一些函数像 `watch` 函数一样返回一个停止处理程序。例如：

```ts
const stop = useEventListener('mousemove', () => {})

// 手动解除事件监听器
stop()
```

虽然不是所有的函数都会返回处理程序，但一个更通用的解决方案是使用 Vue 的 `effectScope` API。

```ts
import { effectScope } from 'vue'

const scope = effectScope()

scope.run(() => {
  // ...

  useEventListener('mousemove', () => {})
  onClickOutside(el, () => {})
  watch(source, () => {})
})

// 所有在 `scope.run` 中调用的组合函数将自动解除
scope.stop()
```

了解更多关于作用范围的描述，阅读 [Vue RFC: Reactivity Effect](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0041-reactivity-effect-scope.md) 了解更多。

## 3. 将 ref 作为参数传递

在 Vue 中，我们使用 `setup()` 函数来构建数据和逻辑之间的连接。为了使其灵活，大部分 VueUse 函数也接受参数的 ref 版本。

下面以 [`useTitle`](https://vueuse.org/core/useTitle/) 为例，展示各种 ref 传参用法。

### 3.1 常规用法

通常，[`useTitle`](https://vueuse.org/core/useTitle/) 返回一个页面标题的引用。当你给这个引用分配新的值时，它会自动更新标题。

```ts
const isDark = useDark()
const title = useTitle('Set title')

watch(isDark, () => {
  title.value = isDark.value ? '🌙 Good evening!' : '☀️ Good morning!'
})
```

### 3.2 连接使用

如果用 “连接” 的思想来写，你可以传递一个 ref，使其与页面的标题绑定。

```ts
const isDark = useDark()
const title = computed(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')

useTitle(title)
```

### 3.3 响应式 Getter

从 VueUse 9.0 开始，我们引入了一个新的约定，将响应式 Getter 作为参数传递。这在处理响应式对象和 Reactivity Transform 中非常有效。

```ts
const isDark = useDark()

useTitle(() => isDark.value ? '🌙 Good evening!' : '☀️ Good morning!')
```
