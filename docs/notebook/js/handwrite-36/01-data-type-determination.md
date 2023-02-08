---
title: 01-判断数据类型
description: 01-判断数据类型
---

# 1. 判断数据类型

`typeof` 可以正确识别：`Undefined`、`Boolean`、`Number`、`String`、`Symbol`、`Function` 等类型的数据，但是对于其他的都会认为是 `object`，比如 `Null`、`Date` 等，所以通过 `typeof` 来判断数据类型会不准确。但是可以使用 `Object.prototype.toString` 实现。

@[code js{1-4}](./src/01-data-type-determination.js)

一行实现：

```js
function typeOf() {
    return Object.prototype.toString.call(obj).slice(8, -1).toLowerCase();
}
```
