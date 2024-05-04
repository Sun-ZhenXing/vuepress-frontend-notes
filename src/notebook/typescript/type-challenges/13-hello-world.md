# 13. Hello World

<题目描述>

::: playground#ts 13. Hello World

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect, NotAny } from '@type-challenges/utils'

type cases = [
  Expect<NotAny<HelloWorld>>,
  Expect<Equal<HelloWorld, string>>,
]

// ============= Your Code Here =============
type HelloWorld = any // expected to be a string
```

:::

::: details 点击查看答案

```ts
type HelloWorld = string
```

:::
