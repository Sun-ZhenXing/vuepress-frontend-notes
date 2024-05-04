# 2. Kotlin 语法概述

[[TOC]]

## 2.1 基本语法

Kotlin 文件以 `.kt` 为后缀。

和 Java 一样，`package` 用于包声明，不过是可选的，默认为 `default`。

下面的包都会默认导入：

- `kotlin.*`
- `kotlin.annotation.*`
- `kotlin.collections.*`
- `kotlin.comparisons.*`
- `kotlin.io.*`
- `kotlin.ranges.*`
- `kotlin.sequences.*`
- `kotlin.text.*`

使用 `var` 定义变量，使用 `val` 定义常量，Kotlin 支持声明时自动推导类型：

```kt
val a: Int = 1
val b = 1       // 系统自动推断变量类型为 Int
val c: Int      // 如果不在声明时初始化则必须提供变量类型
c = 1           // 明确赋值

var x = 5        // 系统自动推断变量类型为Int
x += 1           // 变量可修改
```

和类 C 语言一样，注释可以有单行注释（`// ...`）和多行的注释（`/* ... */`）。

类似于 C#，Kotlin 支持可空类型：

```kt
var age: String? = "23"
```

和 JavaScript 一样，如果需要对象为空时保留空，则加上 `?`，例如：

```kt
val ages2 = age?.toInt()
```

如果需要断言为非空则使用 `!!`，这样为空时将抛出空指针异常。

类似于 Python，Kotlin 使用 `is` 判断对象是对象的实例，相当于 Java 的关键字 `instanceof`，但是不是对象的实例也可以表示为 `!is`。

Kotlin 支持 `Any` 类型，表示任何类型。

## 2.2 数据类型

下面是基本类型：

| 类型     | 位宽度 |
| -------- | ------ |
| `Double` | 64     |
| `Float`  | 32     |
| `Long`   | 64     |
| `Int`    | 32     |
| `Short`  | 16     |
| `Byte`   | 8      |

- `Float` 类型使用 `f` 或者 `F` 作为后缀：`123.5f`
- 不支持八进制字面值，`0x` 和 `0b` 可以表示十六进制和二进制
- 大写 `L` 结尾为长整型

类型转换：较小类型并不是较大类型的子类型，较小的类型不能隐式转换为较大的类型。这意味着在不进行显式转换的情况下我们不能把 `Byte` 型值赋给一个 `Int` 变量。

可以使用 `byte.toInt()` 来转换。每种基本类型都可以转换：

```kt
toByte(): Byte
toShort(): Short
toInt(): Int
toLong(): Long
toFloat(): Float
toDouble(): Double
toChar(): Char
```

Kotlin 会自动根据上下文推断类型，默认情况下不损失精度。

类似于 JavaScript，在 Kotlin 中，三个等号 `===` 表示比较对象地址是否相等，两个 `==` 表示比较对象的值是否相等。

Kotlin 的位运算符也和 Java 不同：

| 运算符 | 说明       | 对应 Java 的运算符 |
| ------ | ---------- | ------------------ |
| `shl`  | 左移       | `<<`               |
| `shr`  | 右移       | `>>`               |
| `ushr` | 无符号右移 | `>>>`              |
| `and`  | 与         | `&`                |
| `or`   | 或         | `\|`               |
| `xor`  | 异或       | `^`                |
| `inv`  | 翻转       | `~`                |

支持布尔运算符 `&&`、`||` 和 `!`。

和 Java 不一样，Kotlin 中的 `Char` 不能直接和数字操作，`Char` 必需是单引号 `'` 包含起来的。比如普通字符 `'0'`，`'a'`。

数组用类 `Array` 实现，并且还有一个 `size` 属性及 `get` 和 `set` 方法，由于使用 `[]` 重载了 `get` 和 `set` 方法，所以我们可以通过下标很方便的获取或者设置数组对应位置的值。

数组的创建两种方式：一种是使用函数 `arrayOf()`，另外一种是使用工厂函数：

```kt
fun main(args: Array<String>) {
    // [1, 2, 3]
    val a = arrayOf(1, 2, 3)
    // [0, 2, 4]
    val b = Array(3, { i -> (i * 2) })

    // 读取数组内容
    println(a[0])    // 输出结果: 1
    println(b[1])    // 输出结果: 2
}
```

`Array` 工厂函数支持直接加上 Lambda 函数，这也是推荐的写法：

```kt
val b = Array(3) { i -> (i * 2) }
```

类似于 Python，字符串可以使用 `[]` 获取指定位置的字符，另外字符串是可迭代的：

```kt
for (c in str) {
    println(c)
}
```

和 Python 一样，字符串支持使用三个双引号来表示多行字符串 `"""`。

字符串有 `.trimMargin()` 方法用于删除两边空白，类似于 Java 的 `.trim()` 方法。但是 `.trimMargin()` 默认以 `|` 作为边界前缀：

```kt
fun main(args: Array<String>) {
    val text = """
    |多行字符串
    |我是多行字符串
    |多行字符串
    |Alex
    """.trimMargin()
    println(text)    // 前置空格删除了
}
```

这也可以指定。比如 `trimMargin(">")`。

类似于 JavaScript，字符串天生支持模板，例如：

```kt
fun main(args: Array<String>) {
    val s = "Alex"
    val str = "$s.length is ${s.length}"
    // 输出 "Alex.length is 4"
    println(str)
}
```

多数特殊字符支持 `\` 转义，但是 `$`，不支持，如果需要表示 `$` 则需要这样 `"${'$'}"`。

## 2.3 函数语法

```kt
fun sum(a: Int, b: Int): Int {   // Int 参数，返回值 Int
    return a + b
}
```

表达式作为函数体：

```kt
public fun sum(a: Int, b: Int): Int = a + b
```

类型推断支持不写返回值类型，但是 `public` 修饰的函数必须写。

空类型为 `Unit`，如果返回值为空可以省略。

函数的参数可以是可变长的：

```kt
fun vars(vararg v: Int) {
    for (vt in v) {
        print(vt)
    }
}

fun main(args: Array<String>) {
    vars(1, 2, 3, 4, 5)  // 输出 12345
}
```

## 2.4 条件语句

If 语句：

```kt
var max = a
if (a < b) max = b

// 使用 else
var max: Int
if (a > b) {
    max = a
} else {
    max = b
}
```

可以把 If 语句返回的值赋值给变量：

```kt
val max = if (a > b) {
    print("Choose a")
    a
} else {
    print("Choose b")
    b
}
```

Kotlin 支持区间表达式 `a..b`，类似于 Python / Go 的 `range`：

```kt
fun main(args: Array<String>) {
    val x = 5
    val y = 9
    if (x in 1..8) {
        println("x 在区间内")
    }
}
```

Kotlin 的 When 表达式类似于类 C 语言的 `switch`，使用 `else` 表示其他情况：

```kt
when (x) {
    1 -> print("x == 1")
    2 -> print("x == 2")
    else -> {
        print("x 不是 1 ，也不是 2")
    }
}
```

更复杂的示例：

```kt
fun main(args: Array<String>) {
    var x = 0
    when (x) {
        0, 1 -> println("x == 0 or x == 1")
        else -> println("otherwise")
    }

    when (x) {
        1 -> println("x == 1")
        2 -> println("x == 2")
        else -> {
            println("x 不是 1 ，也不是 2")
        }
    }

    when (x) {
        in 0..10 -> println("x 在该区间范围内")
        else -> println("x 不在该区间范围内")
    }
}
```

When 甚至可以这样写，用来代替大量的 `if...else...`：

```kt
fun main(args: Array<String>) {
    val items = setOf("apple", "banana", "kiwi")
    when {
        "orange" in items -> println("juicy")
        "apple" in items -> println("apple is fine too")
    }
}
```

## 2.5 循环语句

类似于 Python / Go，For 语句可以遍历任何迭代器和其他可迭代类型：

```kt
for (item: Int in int_array) {
    // ...
}
```

如果你想要通过索引遍历一个数组或者一个 `list`，你可以这么做：

```kt
for (i in array.indices) {
    print(array[i])
}
```

类似于 Python 的 `enumerate`，Kotlin 的 For 也具有类似功能：

```kt
for ((index, value) in array.withIndex()) {
    println("the element at $index is $value")
}
```

例子：

```kt
fun main(args: Array<String>) {
    val items = listOf("apple", "banana", "kiwi")
    for (item in items) {
        println(item)
    }

    for (index in items.indices) {
        println("item at $index is ${items[index]}")
    }
}
```

或者增加步长，反向循环：

```kt
fun main(args: Array<String>) {
    for (i in 1..4 step 2) print(i)       // 打印结果为: "13"
    println()
    for (i in 4 downTo 1 step 2) print(i) // 打印结果为: "42"
}
```

如果不包含最后一个可以：

```kt
fun main(args: Array<String>) {
    for (i in 1 until 10) { // i in [1, 10), 不包含 10
        print(i)
    }
}
```

Kotlin 支持 `while() { }` 和 `do { } while()`。也支持 `break` 和 `continue` 控制循环。

如果在 Lambda 函数中使用 `return` 则会返回上层函数，如果只返回 Lambda 函数可以返回到标签：

```kt
fun main(args: Array<String>) {
    foo()
}

fun foo() {
    val ints = arrayListOf(1, 2, 3, 0, 7, 8)
    ints.forEach lit@ {
        if (it == 0) return@lit
        print(it)
    }
    println()
    println("still running")
}
```

或者使用带 `fun` 的匿名函数：

```kt
fun foo() {
    ints.forEach(fun(value: Int) {
        if (value == 0) return
        print(value)
    })
}
```

如果有多个 `return`，当要返一个回值的时候，解析器优先选用标签限制的 `return`，即

```kt
return@a 1
```
