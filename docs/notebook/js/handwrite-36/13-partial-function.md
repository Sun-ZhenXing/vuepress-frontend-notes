---
title: 13-偏函数
description: 13-偏函数
---

# 13. 偏函数

偏函数就是将一个 $n$ 参数的函数转换成固定 $x$ 参的函数，剩余 $n - x$ 个参数将在下次调用全部传入。

样例如下：

```js
function add(a, b, c) {
  return a + b + c;
}

const partialAdd = partial(add, 1)
console.log(partialAdd(2, 3))
```

`partial()` 函数实现如下：

@[code{1-1} js](./src/13-partial-function-1.js)

有时候我们想要一个占位符功能，使用 `placeholder` 占据一个位置，然后在下一次传递即可：

用起来就像这样：

```js
function add(a, b, c) {
  return a + b + c;
}

const partialAdd2 = partial(add, 1, placeholder, 3)
console.log(partialAdd(2))
```

代码实现：

@[code{1-6} js](./src/13-partial-function-2.js)
