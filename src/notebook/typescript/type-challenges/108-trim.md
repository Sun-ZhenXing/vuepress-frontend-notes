# 108. Trim

<题目描述>

::: playground#ts 108. Trim

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Trim<'str'>, 'str'>>,
  Expect<Equal<Trim<' str'>, 'str'>>,
  Expect<Equal<Trim<'     str'>, 'str'>>,
  Expect<Equal<Trim<'str   '>, 'str'>>,
  Expect<Equal<Trim<'     str     '>, 'str'>>,
  Expect<Equal<Trim<'   \n\t foo bar \t'>, 'foo bar'>>,
  Expect<Equal<Trim<''>, ''>>,
  Expect<Equal<Trim<' \n\t '>, ''>>,
]

// ============= Your Code Here =============
type Trim<S extends string> = any
```

:::

::: details 点击查看答案

```ts
type Trim<S extends string> = S extends
  `${' ' | '\n' | '\t'}${infer R}` ?
  Trim<R> :
  S extends `${infer R}${' ' | '\n' | '\t'}` ? Trim<R> : S
```

:::
