# 191. Append Argument

<题目描述>

::: playground#ts 191. Append Argument

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type Case1 = AppendArgument<(a: number, b: string) => number, boolean>
type Result1 = (a: number, b: string, x: boolean) => number

type Case2 = AppendArgument<() => void, undefined>
type Result2 = (x: undefined) => void

type cases = [
  Expect<Equal<Case1, Result1>>,
  Expect<Equal<Case2, Result2>>,
  // @ts-expect-error
  AppendArgument<unknown, undefined>,
]

// ============= Your Code Here =============
type AppendArgument<Fn, A> = any
```

:::

::: details 点击查看答案

```ts
type AppendArgument<Fn extends (...args: any[]) => any, A> = Fn extends
  (...args: infer Args) => infer R ?
  (...args: [...Args, A]) => R : never
```

:::
