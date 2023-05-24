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
