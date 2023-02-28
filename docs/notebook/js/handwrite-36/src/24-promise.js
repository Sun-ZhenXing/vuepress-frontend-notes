// 首先是不考虑异步情况的话
class Promise {
    constructor(executor) {
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        let resolve = (value) => {
            // 成功回调
            if (this.state === 'pending') {
                this.state = 'fullfilled'
                this.value = value
            }
        }
        let reject = (reason) => {
            if (this.state === "pending") {
                this.state = 'rejected'
                this.reason = reason
            }
        }
        try {
            executor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    // then函数有两个参数，表示成功函数和失败函数
    // 把获取到的值传入到对应的函数
    then(onFinished, onRejected) {
        // if (this.state === "pending") {

        // }
        if (this.state === 'fullfilled') {
            onFinished(this.value)
        }
        if (this.state === "rejected") {
            onRejected(this.reason)
        }
    }
}

// 考虑异步情况的Promise
// 这边以setTimeout为例，在delay时间之前，我们是不知道状态会变为什么的，所以需要一个数组来记录状态，两个都记，到时候需要哪个选用哪个

class Promise {
    constructor(excutor) {
        // 状态
        this.state = 'pending'
        this.value = undefined
        this.reason = undefined
        // 回调函数记录
        this.OnResolvedCallbacks = []
        this.OnRejectedCallbacks = []
        // 成功回调
        let resolve = (value) => {
            if (this.state === "pending") {
                this.state = "fullfilled"
                this.value = value
                this.OnResolvedCallbacks.forEach((fn) => fn())
            }
        }
        // 失败回调
        let reject = (reason) => {
            if (this.state === "pending") {
                this.state = 'rejected'
                this.reason = reason
                this.OnRejectedCallbacks.forEach((fn) => fn())
            }
        }
        try {
            excutor(resolve, reject)
        } catch (error) {
            reject(error)
        }
    }
    then(onFinished, onRejected) {
        if (this.state === "pending") {
            // 以setTimeout为例，就是delay之前，不知道状态
            this.OnResolvedCallbacks.push(() => {
                onFinished(this.value)
            })
            this.OnRejectedCallbacks.push(() => {
                onRejected(this.reason)
            })
        }
        if (this.state === "rejected") {
            onRejected(this.reason)
        }
        if (this.state === "fullfilled") {
            onFinished(this.value)
        }
    }
}

// 解决链式调用，也就是第一次then的返回值是一个Promise对象

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
        // 第一次会返回一个Promise
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
// resolvePromise就是用来判断返回值是什么的
// x === promise2 => 错误
// x的类型不是函数也不是Object ，那么就直接进入resolve
// 否则的话，判断x的then类型，如果为函数，那么一定是Promise，然后判断这个时成功还是失败
// 否则的话，直接resolve

const resolvePromise = function (Promise2, x, resolve, reject) {
    if (x === Promise2) {
        // 直接报错
        return reject(new TypeError('Chaining cycle detected for promise'))
    }
    // 防止多次调用
    let called = false
    if (x !== null && (typeof x === 'object' || typeof x === 'function')) {
        try {
            // 那么可能是Promise
            // 接下来判断x.then 如果为func，那么一定是Promise
            let then = x.then
            if (typeof then === 'function') {
                // 那么一定是Promise
                // this指向x
                then.call(x, y => {
                    // 成功回调
                    if (called) {
                        return
                    }
                    called = true
                    resolvePromise(Promise2,y,resolve,reject)
                }, err => {
                    // 失败
                    if (called) return
                    called = true
                    resolvePromise(Promise2,err,resolve,reject)
                })
            }
        } catch (error) {
            // 如果调用过来，直接返回
            if (called) return
            called = true
            reject(error)
        }
    } else {
        resolve(x)
    }
}


class Promise{
    constructor(executor){
      this.state = 'pending';
      this.value = undefined;
      this.reason = undefined;
      this.onResolvedCallbacks = [];
      this.onRejectedCallbacks = [];
      let resolve = value => {
        if (this.state === 'pending') {
          this.state = 'fulfilled';
          this.value = value;
          this.onResolvedCallbacks.forEach(fn=>fn());
        }
      };
      let reject = reason => {
        if (this.state === 'pending') {
          this.state = 'rejected';
          this.reason = reason;
          this.onRejectedCallbacks.forEach(fn=>fn());
        }
      };
      try{
        executor(resolve, reject);
      } catch (err) {
        reject(err);
      }
    }
    then(onFulfilled,onRejected) {
      // onFulfilled如果不是函数，就忽略onFulfilled，直接返回value
      onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : value => value;
      // onRejected如果不是函数，就忽略onRejected，直接扔出错误
      onRejected = typeof onRejected === 'function' ? onRejected : err => { throw err };
      let promise2 = new Promise((resolve, reject) => {
        if (this.state === 'fulfilled') {
          // 异步
          setTimeout(() => {
            try {
              let x = onFulfilled(this.value);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        };
        if (this.state === 'rejected') {
          // 异步
          setTimeout(() => {
            // 如果报错
            try {
              let x = onRejected(this.reason);
              resolvePromise(promise2, x, resolve, reject);
            } catch (e) {
              reject(e);
            }
          }, 0);
        };
        if (this.state === 'pending') {
          this.onResolvedCallbacks.push(() => {
            // 异步
            setTimeout(() => {
              try {
                let x = onFulfilled(this.value);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0);
          });
          this.onRejectedCallbacks.push(() => {
            // 异步
            setTimeout(() => {
              try {
                let x = onRejected(this.reason);
                resolvePromise(promise2, x, resolve, reject);
              } catch (e) {
                reject(e);
              }
            }, 0)
          });
        };
      });
      // 返回promise，完成链式
      return promise2;
    }
  }