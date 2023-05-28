# 298. Length Of String

<题目描述>

::: playground#ts 298. Length Of String

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<LengthOfString<''>, 0>>,
  Expect<Equal<LengthOfString<'kumiko'>, 6>>,
  Expect<Equal<LengthOfString<'reina'>, 5>>,
  Expect<Equal<LengthOfString<'Sound! Euphonium'>, 16>>,
]


// ============= Your Code Here =============
type LengthOfString<S extends string> = any
```

:::

::: details 点击查看答案

```ts
type StringToTuple<
  S extends string,
  R extends string[] = []
> = S extends `${infer Char}${infer Rest}` ?
  StringToTuple<Rest, [...R, Char]> : R

type LengthOfString<S extends string> = StringToTuple<S>['length']
```

:::
