# 5. 深拷贝

浅拷贝：

@[code{1-11} js](./src/05-deep-copy-1.js)

简单的深拷贝，只考虑普通对象属性，不考虑内置对象和函数，不能解决循环引用问题：

@[code{13-22} js](./src/05-deep-copy-1.js)

复杂版深拷贝：基于简单版的基础上，还考虑了内置对象比如 `Date`、`RegExp` 等对象和函数以及解决了循环引用的问题：

@[code js](./src/05-deep-copy-2.js)
