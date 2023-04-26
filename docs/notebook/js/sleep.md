# 实现 sleep 函数

`await sleep(ms)` 的效果是等待 `ms` 毫秒后继续执行。下面使用 `Promise` 实现 `sleep` 函数：

```ts
const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

const main = async () => {
    console.log('Hello')
    await sleep(1000)
    console.log('World!')
}

main()
```
