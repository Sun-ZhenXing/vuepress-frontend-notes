# 1. Kotlin 教程

[[TOC]]

## 1.1 Kotalin 简介

Kotlin 是一种在 Java 虚拟机上运行的静态类型编程语言，被称之为 Android 世界的 Swift，由 JetBrains 设计开发并开源。

Kotlin 可以编译成 Java 字节码，也可以编译成 JavaScript，方便在没有 JVM 的设备上运行。

在 Google I/O 2017 中，Google 宣布 Kotlin 成为 Android 官方开发语言。

为什么选择 Kotlin？

- 简洁: 大大减少样板代码的数量
- 安全: 避免空指针异常等整个类的错误
- 互操作性: 充分利用 JVM、Android 和浏览器的现有库。
- 工具友好: 可用任何 Java IDE 或者使用命令行构建

> [!TIP]
>
> - [Kotlin 语言官网](https://kotlinlang.org/)
> - [Kotlin 文档](https://kotlinlang.org/docs/getting-started.html)
> - [Kotlin 中文文档](https://book.kotlincn.net/)
> - [Kotlin 在线运行工具](https://play.kotlinlang.org/)

## 1.2 开发环境

推荐使用 [IntelliJ IDEA](https://www.jetbrains.com/idea/download/index.html) 开发 Kotlin 程序，如果您在开发安卓也可以直接使用 Android Studio。

创建项目流程：

1. 创建项目，选择 Java 项目，模板选择 Kotlin (Java) 即可
2. 任意名称保存创建即可，主意要选择正确的 JDK 版本
3. 等待 Sync 结束即可运行 Hello World

## 1.3 Hello Kotlin

和 Java 不同的是，Kotlin 允许顶级的函数，因此 `main()` 函数可以这样写：

```kt
package hello                       //  可选的包头

fun main(args: Array<String>) {     // 包级可见的函数，接受一个字符串数组作为参数
    println("Hello World!")         // 分号可以省略
}
```

如果您习惯面向对象，可以这样：

```kt
class Greeter(val name: String) {
    fun greet() {
        println("Hello, $name")
    }
}

fun main(args: Array<String>) {
    Greeter("World!").greet()       // 创建一个对象不用 new 关键字
}
```

## 1.4 命令行运行

在 Linux 上，可以用下面的命令安装 Kotlin 工具：

```bash
curl -s https://get.sdkman.io | bash
sdk install kotlin
```

编译应用：

```bash
kotlinc hello.kt -include-runtime -d hello.jar
```

参数说明：

- `-d`：用来设置编译输出的名称，可以是 `.class` 或 `.jar` 文件，也可以是目录
- `-include-runtime`：让 `.jar` 文件包含 Kotlin 运行库，从而可以直接运行

如果不包含 Kotlin 运行库，需要运行时在你的 `classpath` 上。

或者也可以使用 Kotlin 工具执行：

```bash
kotlin -classpath hello.jar HelloKt
```

## 1.5 脚本模式

可以使用交互式解释器来执行：

```bash
bin/kotlinc-jvm
```

也可以作为脚本执行：

```kt
import java.io.File

val folders = File(args[0]).listFiles { file -> file.isDirectory() }
folders?.forEach { folder -> println(folder) }
```

注意脚本文件后缀为 `.kts`，需要使用 `-script` 参数，执行命令：

```bash
kotlinc -script list_folders.kts $PATH_TO_FOLDER
```
