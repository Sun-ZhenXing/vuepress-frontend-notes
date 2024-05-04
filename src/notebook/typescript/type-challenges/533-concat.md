# 533. Concat

<题目描述>

::: playground#ts 533. Concat

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Concat<[], []>, []>>,
  Expect<Equal<Concat<[], [1]>, [1]>>,
  Expect<Equal<Concat<[1, 2], [3, 4]>, [1, 2, 3, 4]>>,
  Expect<Equal<Concat<['1', 2, '3'], [false, boolean, '4']>, ['1', 2, '3', false, boolean, '4']>>,
]

// ============= Your Code Here =============
type Concat<T, U> = any
```

:::

::: details 点击查看答案

```ts
type Concat<T extends any[], U extends any[]> = [...T, ...U]
```

:::
