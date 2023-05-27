# 189. Awaited

<题目描述>

::: playground#ts 189. Awaited

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type X = Promise<string>
type Y = Promise<{ field: number }>
type Z = Promise<Promise<string | number>>
type Z1 = Promise<Promise<Promise<string | boolean>>>
type T = { then: (onfulfilled: (arg: number) => any) => any }

type cases = [
  Expect<Equal<MyAwaited<X>, string>>,
  Expect<Equal<MyAwaited<Y>, { field: number }>>,
  Expect<Equal<MyAwaited<Z>, string | number>>,
  Expect<Equal<MyAwaited<Z1>, string | boolean>>,
  Expect<Equal<MyAwaited<T>, number>>,
]

// @ts-expect-error
type error = MyAwaited<number>


// ============= Your Code Here =============
type MyAwaited<T> = any
```

:::

::: details 点击查看答案

```ts
type MyAwaited<T extends PromiseLike<any>> = T extends PromiseLike<
  infer U extends PromiseLike<any>
> ? MyAwaited<U> : T extends PromiseLike<infer U> ? U : never
```

:::
