# 116. Replace

<题目描述>

::: playground#ts 116. Replace

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Replace<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', 'foo'>, 'foofoobar'>>,
  Expect<Equal<Replace<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'foobarbar', 'bar', ''>, 'foobar'>>,
  Expect<Equal<Replace<'foobarbar', 'bra', 'foo'>, 'foobarbar'>>,
  Expect<Equal<Replace<'', '', ''>, ''>>,
]


// ============= Your Code Here =============
type Replace<S extends string, From extends string, To extends string> = any
```

:::

::: details 点击查看答案

```ts
type Replace<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S :
  S extends `${infer L}${From}${infer R}` ?
  `${L}${To}${R}` : S
```

:::
