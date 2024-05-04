// resolvePromise 就是用来判断返回值是什么的
// x === promise2 => 错误
// x 的类型不是函数也不是 Object，那么就直接进入 resolve
// 否则的话，判断 x的 then 类型，如果为函数，那么一定是 Promise，然后判断这个时成功还是失败
// 否则的话，直接 resolve
const resolvePromise = function (Promise2, x, resolve, reject) {
  if (x === Promise2) {
    // 直接报错
    return reject(new TypeError('Chaining cycle detected for promise'))
  }
  // 防止多次调用
  let called = false
  if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
    try {
      // 那么可能是 Promise
      // 接下来判断 x.then 如果为 func，那么一定是 Promise
      const then = x.then
      if (typeof then === 'function') {
        // 那么一定是 Promise
        // this 指向 x
        then.call(x, (y) => {
          // 成功回调
          if (called)
            return

          called = true
          resolvePromise(Promise2, y, resolve, reject)
        }, (err) => {
          // 失败
          if (called)
            return
          called = true
          resolvePromise(Promise2, err, resolve, reject)
        })
      }
    }
    catch (error) {
      // 如果调用过来，直接返回
      if (called)
        return
      called = true
      reject(error)
    }
  }
  else {
    resolve(x)
  }
}
