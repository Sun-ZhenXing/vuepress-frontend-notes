# TypeScript 快速入门

[[TOC]]

## 1. 类型推断

::: info 说明

本文参考了 [官方文档：*为 JavaScript 程序员准备的 TypeScript*](https://www.typescriptlang.org/zh/docs/handbook/typescript-in-5-minutes.html)，目标是给只熟悉 JavaScript 的开发者快速入门 TypeScript。

:::

TypeScript 提供了 JavaScript 的所有功能，并在这些功能之上添加了一层：TypeScript 的类型系统。

TypeScript 的主要好处是，它可以检查代码中的意外行为，从而降低出现错误的机会。

TypeScript 可以识别 JavaScript 语言，在许多情况下可以推断类型。例如，在创建变量并将其赋值给特定值时，TypeScript 将使用该值作为其类型。

```ts
const helloWorld = 'Hello World'
```

`helloWorld` 变量是 `string` 类型的。

TypeScript 能通过上下文得知变量类型的能力，例如：

```ts
// declare 语句用于声明一个变量
declare const a: any

if (typeof a === 'number') {
  // 此时 TypeScript 知道 a 的类型是 number
  console.log(a.toFixed())
}
```

基于上下文，我们可以排除一些情况，关于联合类型的内容将在后面介绍。

```ts
declare const a: number | undefined

if (a !== undefined) {
  // 此时 a 也是 number 类型
  console.log(a.toFixed())
}
```

## 2. 定义类型

`interface` 用于定义接口，**接口用于描述对象的结构**，即接口约束了对象应该具有什么成员，而不约束对象不包含什么成员。

因此，TypeScript 的 `interface` 实际上是鸭子类型的，即只要对象的结构和接口一致，那么这个对象就是这个接口的实例。这一点区别于 Java 的 `interface`。

```ts
interface User {
  name: string
  id: number
}
```

被这个接口描述的对象都具有和这个接口所有的成员，否则将在静态检查中报错。

要给变量标注类型，使用 TypeScript 类型注解的语法，`variable: type`：

```ts
const user: User = {
  name: 'Hayes',
  id: 0,
}
```

如果不满足，TypeScript 将给出错误和理由：

```ts
const user = {
  username: 'Hayes',
  // Error:
  // Type '{ username: string; id: number; }' is not assignable to type 'User'.
  // Object literal may only specify known properties, and 'username' does not exist in type 'User'.
  id: 0,
}
```

上面的写法也可以使用 `class` 来创建：

```ts
class UserAccount {
  name: string
  id: number

  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}

const user: User = new UserAccount('Murphy', 1)
```

在 TypeScript 中，每一个类和函数的参数都需要声明成员或参数的类型。

如果需要声明返回值类型，可以：

```ts
function getAdminUser(): User {
  // ...
}
```

## 3. 组合类型

在 TypeScript 中，类型可以通过简单的组合产生复杂类型。复杂的类型的产生方式：

- 通过联合类型（Union）产生
- 通过交叉类型（Intersect）产生
- 通过元组类型（Tuple）产生
- 通过可空类型（Nullable）产生
- 通过泛型（Generic）产生

常量（Literal）、内置（Built-in）类型或用户定义类型通过上述方式组合可以产生更多新的类型。

如果需要将组合类型绑定到一个名字上，使用 `type` 关键字。`type` 的行为和 `interface` 有点相似，但是接口和类型是两种不同的对象。

### 3.1 联合类型

联合类型使用 `|` 组合，表示可以是多个中的任意一个。

```ts
type LockStates = 'locked' | 'unlocked'
```

联合类型的一个流行用法是描述 `string` 或者 `number` 的字面量的合法值。

```ts
type WindowStates = "open" | "closed" | "minimized";
type LockStates = "locked" | "unlocked";
type PositiveOddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

### 3.2 泛型

泛型编程是普遍的程序设计模式。泛型是类型的模板（也就是泛化的类型，一个类型可以表示很多类型），通过泛型可以随时创建灵活的类型。同样， TypeScript 的泛型和 C# 的泛型类似。

泛型通常可以理解为一个类型模板，即新的类型是通过这个模板复制出来的（实际上的行为和语言有关），`<>` 的内容为模板的参数，给定参数即产出一个新的类型。

在 TypeScript 中，参数可以有默认值，这意味着 `<>` 也不是必须的。

```ts
interface A<T> {
  x: number | T
  y: number
}

interface B<T = string> {
  x: number | T
  y: number
}

type A_string = A<string>
type B_string = B
```

一些例子：

- `number[]` 数字型的数组
- `(number | string)[]` 数字或字符串数组
- `(a: string, ...args: number) => string` 以一个字符串和多个数字为参数的函数，返回字符串
- `Promise<{ data: User[], message: string }>` 一个 `Promise` 对象
- `A<B<string>>` 嵌套的泛型类型

## 4. 结构化的类型系统

TypeScript 的一个核心原则是类型检查基于对象的属性和行为（type checking focuses on the shape that values have）。这有时被叫做“鸭子类型”或“结构类型”（structural typing）。
