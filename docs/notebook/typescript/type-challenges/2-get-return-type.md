# 2. ReturnType

获取函数的返回类型，即实现 `ReturnType<T>`。

::: playground#ts 2. ReturnType

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<string, MyReturnType<() => string>>>,
  Expect<Equal<123, MyReturnType<() => 123>>>,
  Expect<Equal<ComplexObject, MyReturnType<() => ComplexObject>>>,
  Expect<Equal<Promise<boolean>, MyReturnType<() => Promise<boolean>>>>,
  Expect<Equal<() => 'foo', MyReturnType<() => () => 'foo'>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn>>>,
  Expect<Equal<1 | 2, MyReturnType<typeof fn1>>>,
]

type ComplexObject = {
  a: [12, 'foo']
  bar: 'hello'
  prev(): number
}

const fn = (v: boolean) => v ? 1 : 2
const fn1 = (v: boolean, w: any) => v ? 1 : 2


// ============= Your Code Here =============
type MyReturnType<T> = any
```

:::

::: details 点击查看答案

```ts
type MyReturnType<T> = T extends (...args: any[]) => infer R ? R : never
```

:::
