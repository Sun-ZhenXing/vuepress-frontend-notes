# 5. Readonly Keys

<题目描述>

::: playground#ts 5. Readonly Keys

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<'title', GetReadonlyKeys<Todo1>>>,
  Expect<Equal<'title' | 'description', GetReadonlyKeys<Todo2>>>,
]

interface Todo1 {
  readonly title: string
  description: string
  completed: boolean
}

interface Todo2 {
  readonly title: string
  readonly description: string
  completed?: boolean
}

// ============= Your Code Here =============
// type GetReadonlyKeys<T> = {
//   [K in keyof T]-?: (<U>() => U extends { -readonly [P in K]: T[K] } ? 1 : 2) extends (<U>() => U extends { [P in K]: T[K] } ? 1 : 2) ? never : K
// }[keyof T]

```

:::

::: details 点击查看答案

```ts
// 你的答案
```

:::
