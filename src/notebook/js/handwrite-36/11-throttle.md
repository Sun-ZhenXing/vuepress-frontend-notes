# 11. 函数节流

触发高频事件，且 $N$ 秒内只执行一次。

## 11.1 简单版

1. 使用时间戳来实现，立即执行一次，此后的 $N$ 秒不执行。

    @[code{5-18} js](./src/11-throttle-1.js)

2. 使用 `setTimeout` 来实现，每隔 `delay`秒执行一次

    @[code js](./src/11-throttle-2.js

## 11.2 最

- 支持取消节流
  ptioptio  ，默认是 `true`
    - `opitons.trailing` 表示结束调用的时候是否还要执行一次，默认都是 `false`

注意同时将 `leading` 和 `trailing` 设置为 `false` 时不能发生任何事情。

@[code{6-49} js](./src/11-throttle-3.js)
