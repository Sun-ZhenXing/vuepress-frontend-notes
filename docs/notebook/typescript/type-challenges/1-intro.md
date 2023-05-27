# 1. TypeScript 类型体操练习

[[TOC]]

## 1.1 TypeScript 类型体操练习

- [type-challenges/type-challenges](https://github.com/type-challenges/type-challenges)

现在我们来尝试一下。点击右上角的按钮可以在新标签打开此编辑器，以便更好查看代码。

在 VS Code 中安装插件 `YRM.type-challenges`，以便获得更好的编码体验。

::: playground#ts 入门

@file index.ts

```ts
import type { Equal, Expect } from '@type-challenges/utils'

// 这是测试样例，你应该尝试使它不报错
type test = Expect<Equal<HelloWorld, string>>

// 这是你的代码
type HelloWorld = any
```

:::

::: details 点击查看答案

```ts
type HelloWorld = string
```

:::

## 1.2 模板

新建题目文件，如 `1-hello-world.md`，复制以下模板，然后根据题目要求修改即可。一般你只需要从 `import` 语句的下一行复制到底即可。

如果你有其他答案，或者更好的答案，请在下方记录，或者给 [GitHub 仓库](https://github.com/type-challenges/type-challenges) 提交 Issue。

````markdown
# <标题>

<题目描述>

::: playground#ts <标题>

@file index.ts

```ts
// ============= Test Cases =============
import type { Equal, Expect } from '@type-challenges/utils'

// 你的代码粘贴到这里
```

:::

::: details 点击查看答案

```ts
// 你的答案
```

:::
````

## 1.3 自动生成笔记

在当前文件夹下有一个 `gen.py` 文件，直接运行即可将你练习过的题目自动整理为笔记。
