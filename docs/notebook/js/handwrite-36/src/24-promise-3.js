// 解决链式调用，也就是第一次 then 的返回值是一个 Promise 对象
class Promise {
  constructor(excutor) {
    this.state = "pending"
    this.value = undefined
    this.reason = undefined
    // 数组存放状态函数回调
    this.OnResolvedCallbacks = []
    this.OnRejectedCallbacks = []
    let resolve = (value) => {
      if (this.state === "pending") {
        this.state = 'fullfilled'
        this.value = value
        this.OnRejectedCallbacks.forEach(fn => fn())
      }
    }
    let reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.OnRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      excutor(resolve, reject)
    } catch (error) {
      reject(error)
    }
  }
  then(onFinished, onRejected) {
    // 第一次会返回一个 Promise
    let Promise2 = new Promise((resolve, reject) => {
      if (this.state === 'pending') {
        // 成功
        this.OnResolvedCallbacks.push(() => {
          let x = onFinished(this.value)
          resolvePromise(Promise2, x, resolve, reject)
        })
        // 失败
        this.OnRejectedCallbacks.push(() => {
          let x = onRejected(this.reason)
          resolvePromise(Promise2, x, resolve, reject)
        })
      }
      // 成功状态
      if (this.state === 'fullfilled') {
        let x = onFinished(this.value)
        resolvePromise(Promise2, x, resolve, reject)
      }
      // 失败状态
      if (this.state === 'rejected') {
        let x = onRejected(this.reason)
        resolvePromise(Promise2, x, resolve, reject)
      }
    })
    return Promise2

  }
}