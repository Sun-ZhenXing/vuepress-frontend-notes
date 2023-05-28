# 119. Replaceall

<题目描述>

::: playground#ts 119. Replaceall

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<ReplaceAll<'foobar', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobar', 'bag', 'foo'>, 'foobar'>>,
  Expect<Equal<ReplaceAll<'foobarbar', 'bar', 'foo'>, 'foofoofoo'>>,
  Expect<Equal<ReplaceAll<'t y p e s', ' ', ''>, 'types'>>,
  Expect<Equal<ReplaceAll<'foobarbar', '', 'foo'>, 'foobarbar'>>,
  Expect<Equal<ReplaceAll<'barfoo', 'bar', 'foo'>, 'foofoo'>>,
  Expect<Equal<ReplaceAll<'foobarfoobar', 'ob', 'b'>, 'fobarfobar'>>,
  Expect<Equal<ReplaceAll<'foboorfoboar', 'bo', 'b'>, 'foborfobar'>>,
  Expect<Equal<ReplaceAll<'', '', ''>, ''>>,
]


// ============= Your Code Here =============
type ReplaceAll<S extends string, From extends string, To extends string> = any
```

:::

::: details 点击查看答案

注意不要重复替换，如果将 `${L}${To}${ReplaceAll<R, From, To>}` 的 `${To}` 放入递归的替换组中则出错。

```ts
type ReplaceAll<
  S extends string,
  From extends string,
  To extends string
> = From extends '' ? S :
  S extends `${infer L}${From}${infer R}` ?
  `${L}${To}${ReplaceAll<R, From, To>}` : S
```

:::
