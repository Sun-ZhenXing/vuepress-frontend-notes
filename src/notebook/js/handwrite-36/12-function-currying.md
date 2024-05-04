# 12. 函数柯里化

函数柯里化就是将使用多个参数的函数转换成一系列使用一个参数的函数。

```js
function add(a, b, c) {
  return a + b + c;
}

console.log(add(1, 2, 3));
let addCurry = curry(add);
console.log(addCurry(1)(2)(3));
console.log(addCurry(3, 4)(5));
```

我们将调用 `add(1, 2, 3)` 的过程转换为了 `addCurry(1)(2)(3)`，每次只传递一个参数，调用上一步返回的函数。

@[code{1-4} js](./src/12-function-currying.js)
