// 考虑异步情况的 Promise
export class Promise {
  constructor(excutor) {
    // 状态
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    // 回调函数记录
    this.OnResolvedCallbacks = []
    this.OnRejectedCallbacks = []
    // 成功回调
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.state = 'fullfilled'
        this.value = value
        this.OnResolvedCallbacks.forEach(fn => fn())
      }
    }
    // 失败回调
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
        this.OnRejectedCallbacks.forEach(fn => fn())
      }
    }
    try {
      excutor(resolve, reject)
    }
    catch (error) {
      reject(error)
    }
  }

  then(onFinished, onRejected) {
    if (this.state === 'pending') {
      // 以 setTimeout 为例，就是 delay 之前，不知道状态
      this.OnResolvedCallbacks.push(() => {
        onFinished(this.value)
      })
      this.OnRejectedCallbacks.push(() => {
        onRejected(this.reason)
      })
    }
    if (this.state === 'rejected')
      onRejected(this.reason)

    if (this.state === 'fullfilled')
      onFinished(this.value)
  }
}
