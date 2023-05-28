# 3312. Parameters

<题目描述>

::: playground#ts 3312. Parameters

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

const foo = (arg1: string, arg2: number): void => {}
const bar = (arg1: boolean, arg2: { a: 'A' }): void => {}
const baz = (): void => {}

type cases = [
  Expect<Equal<MyParameters<typeof foo>, [string, number]>>,
  Expect<Equal<MyParameters<typeof bar>, [boolean, { a: 'A' }]>>,
  Expect<Equal<MyParameters<typeof baz>, []>>,
]


// ============= Your Code Here =============
type MyParameters<T> = any
```

:::

::: details 点击查看答案

```ts
type MyParameters<
  T extends (...args: any[]) => any
> = T extends
  (...args: infer U) => any ? U : never
```

:::
