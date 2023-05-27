# 43. Exclude

<题目描述>

::: playground#ts 43. Exclude

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a'>, 'b' | 'c'>>,
  Expect<Equal<MyExclude<'a' | 'b' | 'c', 'a' | 'b'>, 'c'>>,
  Expect<Equal<MyExclude<string | number | (() => void), Function>, string | number>>,
]


// ============= Your Code Here =============
type MyExclude<T, U> = any
```

:::

::: details 点击查看答案

```ts
type MyExclude<T, U> = T extends U ? never : T
```

:::
