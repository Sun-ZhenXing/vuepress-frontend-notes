# 6141. ⚡Binary To Decimal

<题目描述>

::: playground#ts 6141. Binary To Decimal

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<BinaryToDecimal<'10'>, 2>>,
  Expect<Equal<BinaryToDecimal<'0011'>, 3>>,
  Expect<Equal<BinaryToDecimal<'00000000'>, 0>>,
  Expect<Equal<BinaryToDecimal<'11111111'>, 255>>,
  Expect<Equal<BinaryToDecimal<'10101010'>, 170>>,
]

// ============= Your Code Here =============
type BinaryToDecimal<S extends string> = any

```

:::

::: details 点击查看答案

```ts
// 你的答案
```

:::
