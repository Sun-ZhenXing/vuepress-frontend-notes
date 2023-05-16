# WebSocket

[[TOC]]

## 1. WebSocket 简介

本文参考地址在页面最下方。[^1][^2]

[WebSocket](https://websocket.org/) 是一种网络通信协议，由于 HTTP 不支持服务端主动推送，WebSocket 就是为了解决这个问题诞生的。

这种单向请求的特点，注定了如果服务器有连续的状态变化，客户端要获知就非常麻烦。我们只能使用 *轮询*：每隔一段时候，就发出一个询问，了解服务器有没有新的信息。最典型的场景就是聊天室。

轮询的效率低，非常浪费资源（因为必须不停连接，或者 HTTP 连接始终打开），我们在这种场景下使用 WebSocket 可以显著提升性能。

WebSocket 协议在 2008 年诞生，2011 年成为国际标准。所有浏览器都已经支持了。

它的最大特点就是，服务器可以主动向客户端推送信息，客户端也可以主动向服务器发送信息，是真正的双向平等对话，属于 [服务器推送技术](https://en.wikipedia.org/wiki/Push_technology) 的一种。

其他特点包括：

1. 建立在 TCP 协议之上，服务器端的实现比较容易
2. 与 HTTP 协议有着良好的兼容性。默认端口也是 80 和 443，并且握手阶段采用 HTTP 协议，因此握手时不容易屏蔽，能通过各种 HTTP 代理服务器
3. 数据格式比较轻量，性能开销小，通信高效
4. 可以发送文本，也可以发送二进制数据
5. 没有同源限制，客户端可以与任意服务器通信
6. 协议标识符是 `ws`（如果加密，则为 `wss`），服务器网址就是 URL

例如 `ws://example.com/some/path` 就是 WebSocket 的一个地址。

WebSocket 连接也是由一个标准的 HTTP 请求发起，格式如下：

```yaml
GET ws://localhost:3000/ws/chat HTTP/1.1
Host: localhost
Upgrade: websocket
Connection: Upgrade
Origin: http://localhost:3000
Sec-WebSocket-Key: client-random-string
Sec-WebSocket-Version: 13
```

支持 Websocket 的服务器在收到请求后会返回一个响应，格式如下：

```yaml
HTTP/1.1 101 Switching Protocols
Upgrade: websocket
Connection: Upgrade
Sec-WebSocket-Accept: server-random-string
```

## 2. 客户端的简单示例

下面是一个网页脚本的例子，[在线示例](http://jsbin.com/muqamiqimu/edit?js,console)：

```js
const ws = new WebSocket('wss://echo.websocket.org')

ws.onopen = (event) => {
  console.log('Connection open ...')
  ws.send('Hello WebSockets!')
}

ws.onmessage = (event) => {
  console.log('Received Message:', event.data)
  ws.close()
}

ws.onclose = (event) => {
  console.log('Connection closed.')
}
```

## 3. 客户端的 API

### 3.1 `WebSocket` 构造函数

[`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket) 对象作为一个构造函数，用于新建 `WebSocket` 实例。

```js
const ws = new WebSocket('ws://localhost:8080')
```

执行上面语句之后，客户端就会与服务器进行连接。

实例对象的所有属性和方法清单，参见 [`WebSocket`](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)。

### 3.2 `ws.readyState`

`readyState` 属性返回实例对象的当前状态，共有四种：

- `CONNECTING`：值为 0，表示正在连接
- `OPEN`：值为 1，表示连接成功，可以通信了
- `CLOSING`：值为 2，表示连接正在关闭
- `CLOSED`：值为 3，表示连接已经关闭，或者打开连接失败

下面是一个示例：

```js
switch (ws.readyState) {
  case WebSocket.CONNECTING:
    // ...
    break
  case WebSocket.OPEN:
    // ...
    break
  case WebSocket.CLOSING:
    // ...
    break
  case WebSocket.CLOSED:
    // ...
    break
  default:
    // 不可能执行到这里
    break
}
```

### 3.3 `ws.onopen`

实例对象的 `onopen` 属性，用于指定连接成功后的回调函数。

```js
ws.onopen = () => {
  ws.send('Hello Server!')
}
```

如果要指定多个回调函数，可以使用 `addEventListener` 方法。

```js
ws.addEventListener('open', (event) => {
  ws.send('Hello Server!')
})
```

### 3.4 `ws.onclose`

实例对象的 `onclose` 属性，用于指定连接关闭后的回调函数。

```js
ws.onclose = (event) => {
  const code = event.code
  const reason = event.reason
  const wasClean = event.wasClean
  // 处理关闭连接事件
}

ws.addEventListener('close', (event) => {
  const code = event.code
  const reason = event.reason
  const wasClean = event.wasClean
  // 处理关闭连接事件
})
```

### 3.5 `ws.onmessage`

实例对象的 `onmessage` 属性，用于指定收到服务器数据后的回调函数。

```js
ws.onmessage = (event) => {
  const data = event.data;
  // 处理数据
}

ws.addEventListener('message', (event) => {
  const data = event.data
  // 处理数据
})
```

注意，服务器数据可能是文本，也可能是二进制数据（`blob` 对象或 `Arraybuffer` 对象）。

```js
ws.onmessage = (event) => {
  if (typeof event.data === String) {
    console.log('Received data string')
  }

  if (event.data instanceof ArrayBuffer) {
    const buffer = event.data
    console.log('Received arraybuffer')
  }
}
```

除了动态判断收到的数据类型，也可以使用 `binaryType` 属性，显式指定收到的二进制数据类型。

```js
// 收到的是 blob 数据
ws.binaryType = 'blob'
ws.onmessage = (event) => {
  console.log(event.data.size)
}

// 收到的是 ArrayBuffer 数据
ws.binaryType = 'arraybuffer'
ws.onmessage = (event) => {
  console.log(event.data.byteLength)
}
```

### 3.6 `ws.send()`

实例对象的 `send()` 方法用于向服务器发送数据。

发送文本的例子：

```js
ws.send('your message')
```

发送 `Blob` 对象的例子：

```js
const file = document
  .querySelector('input[type="file"]')
  .files[0]
ws.send(file)
```

发送 `ArrayBuffer` 对象的例子：

```js
// 发送 canvas ImageData，数据类型 ArrayBuffer
const img = canvas_context.getImageData(0, 0, 400, 320)
const binary = new Uint8Array(img.data.length)
for (let i = 0; i < img.data.length; ++i) {
  binary[i] = img.data[i]
}
ws.send(binary.buffer)
```

### 3.7 `ws.bufferedAmount`

实例对象的 `bufferedAmount` 属性，表示还有多少字节的二进制数据没有发送出去。它可以用来判断发送是否结束。

```js
const data = new ArrayBuffer(10000000)
ws.send(data)

if (socket.bufferedAmount === 0) {
  // 发送完毕
} else {
  // 发送还没结束
}
```

### 3.8 `ws.onerror`

实例对象的 `onerror` 属性，用于指定报错时的回调函数。

```js
ws.onerror = (event) => {
  // 处理错误
};

ws.addEventListener('error', (event) => {
  // 处理错误
});
```

## 4. WebSocket 服务器

WebSocket 协议需要服务器支持。各种服务器的实现，可以查看维基百科的列表。

常用的 Node 实现有以下三种：

- [µWebSockets](https://github.com/uWebSockets/uWebSockets)
- [Socket.IO](http://socket.io/)
- [WebSocket-Node](https://github.com/theturtle32/WebSocket-Node)

## 5. Unix 风格的 WebSocket 服务器

[Websocketd](http://websocketd.com/) 的最大特点，就是后台脚本不限语言，标准输入（stdin）就是 WebSocket 的输入，标准输出（stdout）就是 WebSocket 的输出。

举例来说，下面是一个 Bash 脚本 `counter.sh`：

```bash
#!/bin/bash

echo 1
sleep 1

echo 2
sleep 1

echo 3
```

命令行下运行这个脚本，会输出 `1`、`2`、`3`，每个值之间间隔 1 秒。

现在，启动 `websocketd`，指定这个脚本作为服务：

```bash
websocketd --port=8080 bash ./counter.sh
```

上面的命令会启动一个 WebSocket 服务器，端口是 8080。每当客户端连接这个服务器，就会执行 `counter.sh` 脚本，并将它的输出推送给客户端。

```js
const ws = new WebSocket('ws://localhost:8080/')

ws.onmessage = (event) => {
  console.log(event.data)
}
```

上面是客户端的 JavaScript 代码，运行之后会在控制台依次输出 `1`、`2`、`3`。

有了它，就可以很方便地将命令行的输出，发给浏览器：

```bash
websocketd --port=8080 ls
```

上面的命令会执行 `ls` 命令，从而将当前目录的内容，发给浏览器。使用这种方式实时监控服务器，简直是轻而易举。

::: info 有关项目

[joewalnes/web-vmstats](https://github.com/joewalnes/web-vmstats) 监视服务器运行项目。

:::

更多的用法可以参考 [官方示例](https://github.com/joewalnes/websocketd/tree/master/examples/bash)：

- [Bash 脚本读取客户端输入的例子](https://github.com/joewalnes/websocketd/blob/master/examples/bash/greeter.sh)
- [五行代码实现一个最简单的聊天服务器](https://github.com/joewalnes/websocketd/blob/master/examples/bash/chat.sh)

`websocketd` 的实质，就是命令行的 WebSocket 代理。只要命令行可以执行的程序，都可以通过它与浏览器进行 WebSocket 通信。下面是一个 Node 实现的 Echo 服务 [`greeter.js`](https://github.com/joewalnes/websocketd/blob/master/examples/nodejs/greeter.js)：

```js
process.stdin.setEncoding('utf8')

process.stdin.on('readable', () => {
  const chunk = process.stdin.read()
  if (chunk !== null) {
    process.stdout.write('data: ' + chunk)
  }
})
```

启动这个脚本的命令如下：

```bash
websocketd --port=8080 node ./greeter.js
```

官方仓库还有 [其他各种语言的例子](https://github.com/joewalnes/websocketd/tree/master/examples)。

## 6. Node 的 WebSocket 协议

安装 WebSocket 包：

```bash
npm i ws
```

服务端：

```js
// server.js
const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server

// 创建 websocket 服务器 监听在 3000 端口
const wss = new WebSocketServer({ port: 3000 })

wss.on('connection', (ws) => {
  var i = 0
  setInterval(() => {
    ws.send(i++) // 每隔 1 秒给连接方报一次数
  }, 1000)
})
```

客户端：

```js
// client.js
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:3000')

// 接受
ws.on('message', (message) => {
  console.log(message)
  // 当数字达到 10 时，断开连接
  if (message == 10) {
    ws.send('close')
    ws.close()
  }
})
```

功能扩充：我们让双方一来一回通信，下面是服务端代码：

```js
// server.js
const WebSocket = require('ws')
const WebSocketServer = WebSocket.Server

// 创建 websocket 服务器 监听在 3000 端口
const wss = new WebSocketServer({port: 3000})

// 服务器被客户端连接
wss.on('connection', (ws) => {
    // 接收客户端信息并把信息返回发送
    ws.on('message', (message) => {
      ws.send(message, (err) => {
        if (err) {
          console.log(`[SERVER] error: ${err}`);
        }
    })
  })
})
```

客户端代码：

```js
// client.js
const WebSocket = require('ws')
const ws = new WebSocket('ws://localhost:3000')

// 发送
ws.on('open', () => {
  ws.send('Hello')
})

// 接受
ws.on('message', (message) => {
  console.log(message)
})
```

浏览器：上面的 WebSocket 客户端，是基于 Node.js 构建的，通常 WebSocket 的应用场景，更多时候面对的客户端是浏览器，我们下面来一个 JavaScript 版本的 `client.js`：

```html
<!DOCTYPE html>
<html>
<head>
  <title>WebSocket</title>
</head>

<body>
  <script type="text/javascript">
    // 浏览器提供 WebSocket 对象
    var ws = new WebSocket('ws://localhost:3000')

    // 发送
    ws.onopen = function () {
      ws.send('hello')
    }

    // 接收
    ws.onmessage = function (mes) {
      alert(mes.data)
      if (mes.data === 'hello') {
        ws.close()
      }
    }
  </script>
</body>
</html>
```

## 7. 附录

::: info 推荐学习

廖雪峰的官方网站：[WebSocket 教程](https://www.liaoxuefeng.com/wiki/1022910821149312/1103303693824096)。

:::

[^1]: 阮一峰的网络日志，<https://www.ruanyifeng.com/blog/2017/05/websocket.html>

[^2]: 简明教程：Node.js WebSocket 协议，<https://www.jmjc.tech/less/114>
