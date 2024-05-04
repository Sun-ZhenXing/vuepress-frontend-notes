// 首先是不考虑异步情况的话
class Promise {
  constructor(executor) {
    this.state = 'pending'
    this.value = undefined
    this.reason = undefined
    const resolve = (value) => {
      // 成功回调
      if (this.state === 'pending') {
        this.state = 'fullfilled'
        this.value = value
      }
    }
    const reject = (reason) => {
      if (this.state === 'pending') {
        this.state = 'rejected'
        this.reason = reason
      }
    }
    try {
      executor(resolve, reject)
    }
    catch (error) {
      reject(error)
    }
  }

  // then 方法有两个参数，表示成功函数和失败函数
  // 把获取到的值传入到对应的函数
  then(onFinished, onRejected) {
    // if (this.state === "pending") {
    // }
    if (this.state === 'fullfilled')
      onFinished(this.value)

    if (this.state === 'rejected')
      onRejected(this.reason)
  }
}
