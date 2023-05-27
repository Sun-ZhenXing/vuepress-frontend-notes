# 15. Last

<题目描述>

::: playground#ts 15. Last

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Last<[2]>, 2>>,
  Expect<Equal<Last<[3, 2, 1]>, 1>>,
  Expect<Equal<Last<[() => 123, { a: string }]>, { a: string }>>,
]


// ============= Your Code Here =============
type Last<T> = any
```

:::

::: details 点击查看答案

```ts
type Last<T extends any[]> = [any, ...T][T['length']]
```

:::
