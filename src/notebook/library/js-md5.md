# MD5

[[TOC]]

## 1. js-md5

```bash
npm install js-md5
```

示例代码：

```ts
import { md5 } from 'js-md5'

const hash = md5.create()
hash.update('Message to hash')
hash.hex()
```

支持 HMAC：

```ts
import { md5 } from 'js-md5'

// HMAC
md5.hmac('key', 'Message to hash')

const hash = md5.hmac.create('key')
hash.update('Message to hash')
hash.hex()
```

支持不同的输出格式：

```ts
import { md5 } from 'js-md5'

md5(''); // d41d8cd98f00b204e9800998ecf8427e
md5.hex(''); // d41d8cd98f00b204e9800998ecf8427e
md5.array(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
md5.digest(''); // [212, 29, 140, 217, 143, 0, 178, 4, 233, 128, 9, 152, 236, 248, 66, 126]
md5.arrayBuffer(''); // ArrayBuffer
md5.base64(''); // 1B2M2Y8AsgTpgAmY7PhCfg==
```

详情可访问 [GitHub: emn178/js-md5](https://github.com/emn178/js-md5)，同时作者提供了 [在线测试](https://emn178.github.io/online-tools/md5.html) 地址。

## 2. ts-md5

`ts-md5` 是 TypeScript 实现的 MD5 算法，支持：

- 处理 Unicode 字符串
- 支持增量哈希
- 处理 `File` 和 `Blob`
- 异步处理，使用 `WebWorker`
- 基于 `Promise` 的请求，将任务提交到 `WebWorker` 排队处理

```bash
npm install ts-md5
```

示例代码：

```ts
import { Md5 } from 'ts-md5'

const md5 = new Md5()

// 增量哈希
md5.appendStr('somestring')
   .appendAsciiStr('a different string')
   .appendByteArray(blob)

// 生成 MD5 HEX 值
md5.end()
```

计算文件的 MD5 值：

```ts
import { ParallelHasher } from 'ts-md5'

const hasher = new ParallelHasher('/path/to/ts-md5/dist/md5_worker.js')

hasher.hash(fileBlob).then((result) => {
  console.log('md5 of fileBlob is', result)
})
```

详情可访问 [GitHub: cotag/ts-md5](https://github.com/cotag/ts-md5)。
