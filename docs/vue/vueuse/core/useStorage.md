# [useStorage](https://vueuse.org/core/useStorage/)

[[TOC]]

## 1. 介绍

响应式的 `localStorage` / `sessionStorage`。

## 2. 使用示例

响应式的 `localStorage` / `sessionStorage`。

```ts
import { useStorage } from '@vueuse/core'

// bind object
const state = useStorage('my-store', { hello: 'hi', greeting: 'Hello' })

// bind boolean
const flag = useStorage('my-flag', true) // returns Ref<boolean>

// bind number
const count = useStorage('my-count', 0) // returns Ref<number>

// bind string with SessionStorage
const id = useStorage('my-id', 'some-string-id', sessionStorage) // returns Ref<string>

// delete data from storage
state.value = null
```

## 3. 合并缺省值

默认情况下，如果键已经存在，那么 `useStorage` 将使用来自存储的值，并忽略默认值。请注意，当你向默认值添加更多的属性时，如果客户端的存储没有该键，则该键可能是未定义的。

```ts
localStorage.setItem('my-store', '{"hello": "hello"}')

const state = useStorage('my-store', { hello: 'hi', greeting: 'hello' }, localStorage)

console.log(state.greeting) // undefined, since the value is not presented in storage
```

为了解决这个问题，可以传递 `mergeDefaults` 选项：

```ts
localStorage.setItem('my-store', '{"hello": "nihao"}')

const state = useStorage(
  'my-store',
  { hello: 'hi', greeting: 'hello' },
  localStorage,
  { mergeDefaults: true }
)

console.log(state.hello)    // 'nihao', from storage
console.log(state.greeting) // 'hello', from merged default value
```

当设置为 `true` 时，它将对对象执行 **浅层合并**。你可以传递一个函数来执行自定义的合并（例如，深度合并），例如：

```ts
const state = useStorage(
  'my-store',
  { hello: 'hi', greeting: 'hello' },
  localStorage,
  { mergeDefaults: (storageValue, defaults) => deepMerge(defaults, storageValue) }
)
```

## 4. 自定义序列化

默认情况下，`useStorage` 会根据提供的默认值的数据类型，智能地使用相应的序列化器。例如，`JSON.stringify` / `JSON.parse` 将被用于对象，`Number.toString` / `parseFloat` 用于数字，等等。

你也可以提供你自己的序列化函数给 `useStorage`：

```ts
import { useStorage } from '@vueuse/core'

useStorage(
  'key',
  {},
  undefined,
  {
    serializer: {
      read: (v: any) => v ? JSON.parse(v) : null,
      write: (v: any) => JSON.stringify(v),
    },
  },
)
```

请注意，当你提供 `null` 作为默认值时，`useStorage` 不能从它那里假设数据类型。在这种情况下，你可以提供一个自定义的序列化器，或者明确地重新使用内置的序列化器。

```ts
import { StorageSerializers, useStorage } from '@vueuse/core'

const objectLike = useStorage('key', null, undefined, { serializer: StorageSerializers.object })
objectLike.value = { foo: 'bar' }
```
