# 1042. Isnever

<题目描述>

::: playground#ts 1042. Isnever

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<IsNever<never>, true>>,
  Expect<Equal<IsNever<never | string>, false>>,
  Expect<Equal<IsNever<''>, false>>,
  Expect<Equal<IsNever<undefined>, false>>,
  Expect<Equal<IsNever<null>, false>>,
  Expect<Equal<IsNever<[]>, false>>,
  Expect<Equal<IsNever<{}>, false>>,
]

// ============= Your Code Here =============
type IsNever<T> = Equal<T, never> extends true ? true : false

```

:::

::: details 点击查看答案

```ts
// 你的答案
```

:::
