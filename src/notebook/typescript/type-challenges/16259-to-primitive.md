# 16259. To Primitive

<题目描述>

::: playground#ts 16259. To Primitive

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

type PersonInfo = {
  name: 'Tom'
  age: 30
  married: false
  addr: {
    home: '123456'
    phone: '13111111111'
  }
  hobbies: ['sing', 'dance']
  readonlyArr: readonly ['test']
  fn: () => any
}

type ExpectedResult = {
  name: string
  age: number
  married: boolean
  addr: {
    home: string
    phone: string
  }
  hobbies: [string, string]
  readonlyArr: readonly [string]
  fn: Function
}

type cases = [
  Expect<Equal<ToPrimitive<PersonInfo>, ExpectedResult>>,
]

// ============= Your Code Here =============
type ToPrimitive<T> = any
```

:::

::: details 点击查看答案

```ts
type ToPrimitive<T> = T extends object ? (
  T extends (...args: never[]) => unknown ? Function : {
    [Key in keyof T]: ToPrimitive<T[Key]>
  }
) : (
  T extends { valueOf: () => infer P } ? P : T
)
```

:::
