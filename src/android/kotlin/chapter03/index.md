# 3. Kotlin 面向对象

[[TOC]]

## 3.1 类

Kotlin 类可以包含：构造函数和初始化代码块、函数、属性、内部类、对象声明。

```kt
class Apple {
    // ...
}
```

也可以定义空类：

```kt
class Empty
```

类的属性可以用关键字 `var` 声明为可变的，否则使用只读关键字 `val` 声明为不可变。

```kt
class Runoob {
    var name: String = "alex"
    var url: String = "https://example.com/"
    var city: String = "Jiangsu"
}
```

创建类的实例不需要 `new` 关键字：

```kt
val site = Apple()
```

Kotlin 中的类可以有一个 **主构造器**，以及一个或多个 **次构造器**，主构造器是类头部的一部分，位于类名称之后:

```kt
class Person constructor(firstName: String) {}
```

如果主构造器没有任何注解，也没有任何可见度修饰符，那么 `constructor` 关键字可以省略：

```kt
class Person(firstName: String) {
}
```

## 3.2 属性

属性支持 getter/setter：

```kt
var <propertyName>[: <PropertyType>] [= <property_initializer>]
    [<getter>]
    [<setter>]
```

getter 和 setter 都是可选的：

```kt
var allByDefault: Int? // 错误：需要一个初始化语句，默认实现了 getter 和 setter 方法
var initialized = 1    // 类型为 Int，默认实现了 getter 和 setter
val simple: Int?       // 类型为 Int，默认实现 getter，但必须在构造函数中初始化
val inferredType = 1   // 类型为 Int，默认实现 getter
```

## 3.3 继承

Kotlin 中所有类都继承该 `Any` 类，它是所有类的超类，对于没有超类型声明的类是默认超类：

```kt
class Example // 从 Any 隐式继承
```

`Any` 默认提供了三个方法：

- `equals()`
- `hashCode()`
- `toString()`

如果一个类要被继承，可以使用 `open` 关键字进行修饰：

```kt
open class Base(p: Int)

class Derived(p: Int) : Base(p)
```

## 3.4 接口

Kotlin 接口与 Java 类似，使用 `interface` 关键字定义接口，允许方法有默认实现：

```kt
interface MyInterface {
    fun bar()
    fun foo() {
        println("foo")
    }
}
```

接口中的属性只能是抽象的，不允许初始化值，接口不会保存属性值，实现接口时，必须重写属性：

```kt
interface MyInterface {
    var name: String // 抽象属性 name
}

class MyImpl: MyInterface {
    override var name: String = "alex" // 重写属性
}
```

## 3.5 扩展

Kotlin 可以对一个类的属性和方法进行扩展，且不需要继承或使用 Decorator 模式。扩展是一种静态行为，对被扩展的类代码本身不会造成任何影响。

扩展函数语法：

```kt
fun receiverType.functionName(params) {
    body
}
```
