# 24. Promise

[[TOC]]

## 1. 不考虑异步情况的 Promise

@[code js](./src/24-promise-1.js)

## 2. 考虑异步情况的 Promise

我们按照 `setTimeout` 为例，`setTimeOut(function, delay, args...)`：
- 函数名：那么等 `delay` 以后再去调用函数
- 函数：那么直接会调用函数
- 箭头函数包裹着的函数：等待 `delay` 以后调用

@[code js](./src/24-promise-2.js)

## 3. 考虑 Promise 链式调用情况

为了解决 `Promise` 的链式调用，所以第一次 `then` 的返回值是一个 `Promise` 对象，后续的每次 `then`，都需要借助上一个的返回值，如果没有那么就是 `undefined`。

@[code js](./src/24-promise-3.js)

## 4. 实现 resolvePromise

我们来实现一下，`resolvePromise`函数，其用于判断返回值：
- `x === promise2` 则错误
- `x` 的类型不是函数也不是 `Object`，那么就直接进入 `resolve`
- 否则的话，判断 `x` 的 `then` 类型，如果为函数，那么一定是 `Promise`，然后判断这个时成功还是失败
- 否则的话，直接 `resolve`

@[code js](./src/24-promise-4.js)

## 5. 完整 Promise 版本

因为 `then` 的两个参数 `onFinished` 和 `onRejected`：
- 不是必须的，如果是非函数，那么需要被忽略
- 不是同步的，必须是被异步调用的，这就需要用 `setTimeout` 包裹，并且使用 `try-catch` 进行错误捕捉

@[code js](./src/24-promise-5.js)
