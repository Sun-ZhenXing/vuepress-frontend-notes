# 10969. Integer

<题目描述>

::: playground#ts 10969. Integer

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

let x = 1
let y = 1 as const

type cases1 = [
  Expect<Equal<Integer<1>, 1>>,
  Expect<Equal<Integer<1.1>, never>>,
  Expect<Equal<Integer<1.0>, 1>>,
  Expect<Equal<Integer<1.000000000>, 1>>,
  Expect<Equal<Integer<typeof x>, never>>,
  Expect<Equal<Integer<typeof y>, 1>>,
]

// ============= Your Code Here =============
type Integer<T> = any
```

:::

::: details 点击查看答案

```ts
type Integer<T extends number> = `${T}` extends `${bigint}` ? T : never
```

:::
