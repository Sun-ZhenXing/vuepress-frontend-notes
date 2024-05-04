# 4. Pick

实现 `Pick<T, K>`，从 `T` 中选取部分属性。

::: playground#ts <标题>

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyPick<Todo, 'title'>>>,
  Expect<Equal<Expected2, MyPick<Todo, 'title' | 'completed'>>>,
  // @ts-expect-error
  MyPick<Todo, 'title' | 'completed' | 'invalid'>,
]

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
}

interface Expected2 {
  title: string
  completed: boolean
}

// ============= Your Code Here =============
type MyPick<T, K> = any
```

:::

::: details 点击查看答案

```ts
type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}
```

:::
