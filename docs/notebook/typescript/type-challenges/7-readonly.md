# 7. Readonly

实现 `Readonly<T>` 类型，将 `T` 的所有属性设置为只读的，这意味着无法重新分配所构造类型的属性。

::: playground#ts 7. Readonly

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyReadonly<Todo1>, Readonly<Todo1>>>,
]

interface Todo1 {
  title: string
  description: string
  completed: boolean
  meta: {
    author: string
  }
}


// ============= Your Code Here =============
type MyReadonly<T> = any
```

:::

::: details 点击查看答案

```ts
type MyReadonly<T> = {
  readonly [K in keyof T]: T[K]
}
```

:::
