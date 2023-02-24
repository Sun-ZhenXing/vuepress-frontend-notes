---
title: 03-数组去重
description: 03-数组去重
---

# 3. 数组去重

ES5 的写法：

@[code{4-9} js](./src/03-array-de-duplication.js)

上述的方法效率不高，ES6 的 `Set` 使用哈希表，有更好的效率：

@[code{14-14} js](./src/03-array-de-duplication.js)

*@note:新增* 标准一点的写法：

@[code{19-22} js](./src/03-array-de-duplication.js)

*@note:新增* 对于需要顺序的去重，则需要手写：

@[code{27-37} js](./src/03-array-de-duplication.js)
