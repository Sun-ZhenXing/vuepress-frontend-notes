# TypeScript 基本工具

## 1. 函数类型

### 1.1 函数类型表达式

函数类型表达式（Function Type Expressions）是声明函数的简单有效的方法，例如 `(s: string) => string`。

```ts
function greeter(fn: (s: string) => string) {
  fn("Hello, World")
}
```

### 1.2 函数调用签名

可以声明函数的调用签名（Call Signatures）来声明函数类型。

```ts
type Func = {
  (s: string): boolean
  description: string
}

function greeter(fn: Func) {
  fn("Hello, World")
  console.log(fn.description)
}
```

`Func` 也常常使用 `interface` 来声明。

```ts
interface Func {
  (s: string): boolean
  description: string
}
```

### 1.3 函数构造签名

如果函数需要支持 `new`，则需要使用 `new` 签名。

```ts
interface Func {
  (s: string): boolean
  new (s: string): Func
}

function greeter(fn: Func) {
  fn("Hello, World")
  return new fn("Hello, World")
}
```

`new` 签名和调用签名可以同时存在。

### 1.4 函数重载

函数重载声明也比较简单：

```ts
function makeDate(timestamp: number): Date
function makeDate(m: number, d: number, y: number): Date

function makeDate(mOrTimestamp: number, d?: number, y?: number): Date {
  if (d !== undefined && y !== undefined) {
    return new Date(y, mOrTimestamp, d)
  } else {
    return new Date(mOrTimestamp)
  }
}
```

### 1.5 泛型函数

最简单的泛型函数：

```ts
function firstElement<T>(arr: T[]): T | undefined {
  return arr[0]
}
```

也可以有多个参数：

```ts
function map<Input, Output>(arr: Input[], func: (arg: Input) => Output): Output[] {
  return arr.map(func)
}
```

泛型也可以像 Java 一样有约束类型：

```ts
function longest<Type extends { length: number }>(a: Type, b: Type) {
  if (a.length >= b.length) {
    return a
  } else {
    return b
  }
}
```

## 2. 编写声明文件

### 2.1 描述全局命名空间

```ts
declare namespace myLib {
  function makeGreeting(s: string): string
  let numberOfGreetings: number
}
```

### 2.2 声明全局变量

```ts
declare let myGlobal: string
declare const myConstant: string
declare function myFunction(a: number): string
```

### 2.3 声明重载函数

```ts
declare function fn(x: number): string
declare function fn(x: string): number
```

## 3. 常见工具类型

一些定义参考：

- `never` 类型是永远不会有值的类型
- `any` 类型是任意类型，任意类型都可以看做 `any` 类型
- `unknown` 类型是类型安全的 `any` 类型

| 类型                                | 描述                                       | 发布版本 |
| ----------------------------------- | ------------------------------------------ | -------- |
| `Awaited<T>`                        | 获取 `Promise` 的返回值                    | 4.5      |
| `Partial<T>`                        | 将类型 `T` 的所有属性设置为可选            | 2.1      |
| `Required<T>`                       | 将类型 `T` 的所有属性设置为必选            | 2.8      |
| `Readonly<T>`                       | 将类型 `T` 的所有属性设置为只读            | 2.1      |
| `Record<K, T>`                      | 由 `K` 指定属性并由 `T` 指定类型的对象类型 | 2.1      |
| `Pick<T, K>`                        | 从 `T` 中选择属性 `K` 的类型               | 2.1      |
| `Omit<T, K>`                        | 从 `T` 中排除属性 `K` 的类型               | 3.5      |
| `Exclude<UnionType, ExcludedUnion>` | 从 `UnionType` 中排除 `ExcludedUnion`      | 2.8      |
| `Extract<UnionType, IncludedUnion>` | 从 `UnionType` 中提取 `IncludedUnion`      | 2.8      |
| `NonNullable<T>`                    | 从 `T` 中排除 `null` 和 `undefined`        | 2.8      |
| `Parameters<T>`                     | 获取函数类型 `T` 的参数类型                | 3.1      |
| `ConstructorParameters<T>`          | 获取构造函数类型 `T` 的参数类型            | 3.1      |
| `ReturnType<T>`                     | 获取函数类型 `T` 的返回值类型              | 2.8      |
| `InstanceType<T>`                   | 获取构造函数类型 `T` 的实例类型            | 3.1      |
| `ThisParameterType<T>`              | 获取函数类型 `T` 的 `this` 类型            | 3.3      |
| `OmitThisParameter<T>`              | 从函数类型 `T` 中排除 `this` 类型          | 3.3      |
| `ThisType<T>`                       | 用于指定 `this` 类型                       | 2.3      |

常见的类型等价表示：

```ts
type Pick<T, K extends keyof T> = {
  [P in K]: T[P]
}

type Omit<T, K extends string | number | symbol> = {
  [P in Exclude<keyof T, K>]: T[P]
}
```

另外由几个工具是用于字符串的：

- `Uppercase<StringType>`
- `Lowercase<StringType>`
- `Capitalize<StringType>`
- `Uncapitalize<StringType>`

## 4. 有用的类型

### 4.1 元组类型

元组类型描述一个集合对象的特征，例如 `[string, number]` 也是一种类型。元组类型还包含一种一个或多个的语法，使用 `...` 来表示可变参数（不定参数），例如：`[...args: number]`，这在函数中很常见。

### 4.2 可空类型

可空类型在类型后面加上 `?`，表示 `t | undefined` 的含义，注意不是 `t | null`。

```ts
interface A {
  a: number
  b?: string
}
```

`b` 的类型是 `t | undefined`。可空类型的设计和 C# 的可空类型（`Nullable` 类型）类似，原因是 TypeScript 的作者就是 C# 的作者，这使得两种语言的设计异常巧妙地吻合。

### 4.3 交叉类型

如果要满足两种以上的类型，可以使用 `&` 来交叉两种类型。交叉类型表示这个类型满足被交叉的所有类型。

```ts
type A = B & C
```

那么 `A` 同时具有 `B` 和 `C` 的结构。

例如：

```ts
type A = 1 | 2 | 3
type B = 1 | 3 | 4
type C = A & B
```

此时 `C` 的类型为 `1 | 3`，因为 `1 | 3` 同时满足 `A` 和 `B`。

但是 `interface` 的行为就有点不同了：

```ts
interface I1 {
  x: number
}

interface I2 {
  y: number
}

type I3 = I1 & I2

const a: I3 = {
  x: 1,
  y: 2
}
```

为了同时满足 `I1` 和 `I2`，`I3` 必须同时具有这两个接口的所有属性。

### 4.4 `as` 用法

`as` 总是将指定对象视为另一种类型的对象，并且这两种类型是可转换的。如果明显不能转换的类型将报错。

哪些类型可以转换？

- 可空类型和对应的原类型
- `a | null` 转换为 `a`
- `any` 的其他任意类型
- `unknown` 和其他任意类型
- ……

如果明显不能转换的类型，需要强制转换时，可以借助 `any`。

```ts
// 将 a 视为 string
const a = (3 as any) as string
```

例如：

```ts
const canvas = document.getElementById('canvas')
// canvas: HTMLElement | null
```

```ts
const canvas2 = document.getElementById('canvas') as HTMLCanvasElement
// canvas: HTMLCanvasElement
```

```ts
const ctx = canvas.getContext('2d')
// ctx: CanvasRenderingContext2D | null
```

```ts
const ctx = canvas.getContext('2d') as CanvasRenderingContext2D
// ctx: CanvasRenderingContext2D
```

### 4.5 高级特征

- 条件类型
- 映射类型
- 索引类型
- 区分类型
- 枚举类型
- 象征类型

这些类型在本文不会详细讨论，我们只会举例一些情况来说明。
