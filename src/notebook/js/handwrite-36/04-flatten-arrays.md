# 4. 数组扁平化

数组扁平化就是将 `[1, [2, [3]]]` 这种多层的数组拍平成一层 `[1, 2, 3]`。使用 `Array.prototype.flat` 可以直接将多层数组拍平成一层：

```js
[1, [2, [3]]].flat(2)  // [1, 2, 3]
```

ES5 实现：

@[code{4-14} js](./src/04-flatten-arrays.js)

ES6 实现：

@[code{19-24} js](./src/04-flatten-arrays.js)

*@note:新增* 我的更简单实现：

@[code{29-31} js](./src/04-flatten-arrays.js)
