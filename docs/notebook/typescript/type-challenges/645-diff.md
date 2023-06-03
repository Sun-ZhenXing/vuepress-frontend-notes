# 645. Diff

<题目描述>

::: playground#ts 645. Diff

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type Foo = {
  name: string
  age: string
}
type Bar = {
  name: string
  age: string
  gender: number
}
type Coo = {
  name: string
  gender: number
}

type cases = [
  Expect<Equal<Diff<Foo, Bar>, { gender: number }>>,
  Expect<Equal<Diff<Bar, Foo>, { gender: number }>>,
  Expect<Equal<Diff<Foo, Coo>, { age: string; gender: number }>>,
  Expect<Equal<Diff<Coo, Foo>, { age: string; gender: number }>>,
]


// ============= Your Code Here =============
type Diff<O, O1> = any
```

:::

::: details 点击查看答案

```ts
type Diff<O, O1> = {
  [K in Exclude<keyof O, keyof O1> | Exclude<keyof O1, keyof O>]:
    K extends keyof O ? O[K] : K extends keyof O1 ? O1[K] : never
}
```

思考，为什么下面的方法不行：

```ts
type Diff<O, O1> = {
  [P in keyof O as P extends keyof O1 ? never : P]: O[P]
} & {
  [P in keyof O1 as P extends keyof O ? never : P]: O1[P]
}
```

:::
