# 3. Omit

实现 `Omit<T, K>`，即从类型 `T` 中排除属性 `K`。

::: playground#ts 3. Omit

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Expected1, MyOmit<Todo, 'description'>>>,
  Expect<Equal<Expected2, MyOmit<Todo, 'description' | 'completed'>>>,
]

// @ts-expect-error
type error = MyOmit<Todo, 'description' | 'invalid'>

interface Todo {
  title: string
  description: string
  completed: boolean
}

interface Expected1 {
  title: string
  completed: boolean
}

interface Expected2 {
  title: string
}

// ============= Your Code Here =============
type MyOmit<T, K> = any
```

:::

::: details 点击查看答案

```ts
type MyOmit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>
```

```ts
type MyOmit<T, K extends keyof T> = {
  [P in Exclude<keyof T, K>]: T[P]
}
```

```ts
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as P extends K ? never : P]: T[P]
}
```

```ts
type MyOmit<T, K extends keyof T> = {
  [P in keyof T as Exclude<P, K>]: T[P]
}
```

:::
