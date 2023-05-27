# 3060. Unshift

<题目描述>

::: playground#ts 3060. Unshift

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Unshift<[], 1>, [1]>>,
  Expect<Equal<Unshift<[1, 2], 0>, [0, 1, 2]>>,
  Expect<Equal<Unshift<['1', 2, '3'], boolean>, [boolean, '1', 2, '3']>>,
]


// ============= Your Code Here =============
type Unshift<T, U> = any
```

:::

::: details 点击查看答案

```ts
type Unshift<T extends any[], U> = [U, ...T]
```

:::
