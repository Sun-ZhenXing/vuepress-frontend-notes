class EventEmitter {
  constructor() {
    this.cache = {}
  }

  emit(name, once = false, ...args) {
    if (this.cache[name]) {
      // 创建副本，如果回调函数内继续注册相同事件，会造成死循环
      const tasks = this.cache[name].slice()
      for (const fn of tasks)
        fn(...args)

      if (once)
        delete this.cache[name]
    }
  }

  off(name, fn) {
    const tasks = this.cache[name]
    if (tasks) {
      const index = tasks.findIndex(f => f === fn || f.callback === fn)
      if (index >= 0)
        tasks.splice(index, 1)
    }
  }

  on(name, fn) {
    if (this.cache[name])
      this.cache[name].push(fn)
    else
      this.cache[name] = [fn]
  }
}

function test() {
  const eventBus = new EventEmitter()
  const fn1 = function (name, age) {
    console.log(`${name} ${age}`)
  }
  const fn2 = function (name, age) {
    console.log(`hello, ${name} ${age}`)
  }
  eventBus.on('aaa', fn1)
  eventBus.on('aaa', fn2)
  eventBus.emit('aaa', false, 'Alex', 12)
  // 'Alex 12'
  // 'hello, Alex 12'
}

test()
