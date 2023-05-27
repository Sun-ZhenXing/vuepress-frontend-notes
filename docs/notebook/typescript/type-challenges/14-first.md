# 14. First

<题目描述>

::: playground#ts 14. First

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<First<[3, 2, 1]>, 3>>,
  Expect<Equal<First<[() => 123, { a: string }]>, () => 123>>,
  Expect<Equal<First<[]>, never>>,
  Expect<Equal<First<[undefined]>, undefined>>,
]

type errors = [
  // @ts-expect-error
  First<'notArray'>,
  // @ts-expect-error
  First<{ 0: 'arrayLike' }>,
]


// ============= Your Code Here =============
type First<T> = any
```

:::

::: details 点击查看答案

```ts
type First<T extends any[]> = T extends [infer F, ...any[]] ? F : never
```

:::
