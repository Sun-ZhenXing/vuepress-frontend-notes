# 18220. Filter

<题目描述>

::: playground#ts 18220. Filter

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type Falsy = false | 0 | '' | null | undefined

type cases = [
  Expect<Equal<Filter<[0, 1, 2], 2>, [2]>>,
  Expect<Equal<Filter<[0, 1, 2], 0 | 1>, [0, 1]>>,
  Expect<Equal<Filter<[0, 1, 2], Falsy>, [0]>>,
]


// ============= Your Code Here =============
type Filter<T extends any[], P> = any
```

:::

::: details 点击查看答案

```ts
type Filter<T extends any[], P> = T extends [infer F, ...infer R] ?
  F extends P ?
  [F, ...Filter<R, P>] : Filter<R, P> : []
```

:::
