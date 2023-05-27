# 16. Pop

<题目描述>

::: playground#ts 16. Pop

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Pop<[3, 2, 1]>, [3, 2]>>,
  Expect<Equal<Pop<['a', 'b', 'c', 'd']>, ['a', 'b', 'c']>>,
  Expect<Equal<Pop<[]>, []>>,
]


// ============= Your Code Here =============
type Pop<T> = any
```

:::

::: details 点击查看答案

```ts
type Pop<T extends any[]> = T extends [...infer R, any] ? R : []
```

:::
