# 10. Tuple To Union

<题目描述>

::: playground#ts 10. Tuple To Union

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<TupleToUnion<[123, '456', true]>, 123 | '456' | true>>,
  Expect<Equal<TupleToUnion<[123]>, 123>>,
]


// ============= Your Code Here =============
type TupleToUnion<T> = any
```

:::

::: details 点击查看答案

```ts
type TupleToUnion<T extends any[]> = T[number]
```

:::
