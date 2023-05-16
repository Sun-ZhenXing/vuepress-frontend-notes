# Axios

[[TOC]]

::: info 官方文档

- [官方文档](https://axios-http.com/docs/intro)
- [官方中文文档](https://www.axios-http.cn/docs/intro)

:::

## 1. Axios

### 1.1 Axios 简介

Axios 是基于 `Promise` 可以用于浏览器和 Node.js 的网络请求库。

- 它是 **isomorphic** 的（即同一套代码可以运行在浏览器和 Node.js 中）
- 在服务端它使用原生 Node.js `http` 模块
- 而在客户端（浏览器）则使用 `XMLHttpRequests`

### 1.2 特性

- 从浏览器创建 `XMLHttpRequests`
- 从 Node.js 创建 HTTP 请求
- 支持 Promise API
- 拦截请求和响应
- 转换请求和响应数据
- 取消请求
- 自动转换 JSON 数据
- 客户端支持防御 [XSRF](http://en.wikipedia.org/wiki/Cross-site_request_forgery)

### 1.3 安装

安装依赖：

```sh
npm install axios
bower install axios
yarn add axios
```

浏览器端：

```html
<!-- jsDelivr CDN -->
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>
<!-- unpkg CDN -->
<script src="https://unpkg.com/axios/dist/axios.min.js"></script>
```

CommonJS：

```js
const axios = require('axios/dist/browser/axios.cjs'); // browser
const axios = require('axios/dist/node/axios.cjs'); // node
```

## 2. 用例

### 2.1 CommonJS

```js
const axios = require('axios').default;
```

### 2.2 浏览器

GET 请求示例：

```js
const axios = require('axios');

// 向给定 ID 的用户发起请求
axios.get('/user?ID=12345')
  .then(function (response) {
    // 处理成功情况
    console.log(response);
  })
  .catch(function (error) {
    // 处理错误情况
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });
```

上述请求也可以按以下方式完成

```js
axios.get('/user', {
    params: {
      ID: 12345
    }
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  })
  .then(function () {
    // 总是会执行
  });
```

支持 `async / await` 用法：

```js
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345');
    console.log(response);
  } catch (error) {
    console.error(error);
  }
}
```

发起一个 POST 请求：

```js
axios.post('/user', {
    firstName: 'Fred',
    lastName: 'Flintstone'
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });
```

发起多个并发请求：

```js
function getUserAccount() {
  return axios.get('/user/12345');
}

function getUserPermissions() {
  return axios.get('/user/12345/permissions');
}

Promise.all([getUserAccount(), getUserPermissions()])
  .then(function (results) {
    const acct = results[0];
    const perm = results[1];
  });
```

## 3. 下面学习什么

[API 参考手册](https://www.axios-http.cn/docs/api_intro) 的文档结构和讲解的内容，可用于参考和学习。

1. Axios API
    - 创建新的请求
        - `axios(config)`
        - `axios(url[, config])`
    - 列举可用的请求方式别名
2. Axios 实例
    - 使用 `axios.create([config])` 创建实例
    - 列举可以用的实例方法
3. 请求配置
    - 列举所有创建请求时可以用的配置选项
4. 响应结构
    - 列举一个请求的响应包含的信息
    - 列举在 `then()` 方法中包含的信息
    - 解释 `catch()` 方法可以捕获的错误信息
5. 默认配置
    - 如何设置全局 `axios` 默认值
    - 如何设置自定义实例默认值
    - 解释配置的优先级
6. 拦截器
    - 如何在请求或响应被 `then()` 或 `catch()` 处理前拦截它们
    - 如何移除拦截器
    - 如何给自定义的 `axios` 实例添加拦截器
7. 错误处理
    - 处理错误的一个示例
    - 如何使用 `validateStatus` 选项，自定义抛出错误的 HTTP code
    - 如何使用 `toJSON()` 获取更多关于 HTTP 错误的信息
8. 取消请求
    - 如何使用 `cancel token` 取消一个请求
    - 如何创建 `cancel token`
        - `CancelToken.source` 工厂方法创建一个 `cancel token`
        - 传递一个 `executor()` 函数到 `CancelToken` 的构造函数
    - 注意：可以使用同一个 `cancel token` 取消多个请求
9. 请求体编码
    - 默认情况下，将 JavaScript 对象序列化为 `JSON`
    - 如何以 `application/x-www-form-urlencoded` 格式发送数据
    - 在浏览器中
        - 可以使用 `URLSearchParams API`
        - 或者使用 `qs` 库编码数据
    - 在 Node.js 中
        - 可以使用 `querystring` 模块
        - 也可以使用 `qs` 库
        - 可以使用 `form-data` 库获取 `Form data`
        - 或者使用一个拦截器
10. 注意事项
    - **[兼容性]** 破坏性更改将以新的次要版本发布
    - **[兼容性]** `Promises` 不受支持的 [polyfill 方案](https://github.com/jakearchibald/es6-promise)
    - 包含了 TypeScript 类定义
    - 资源
        - [变更日志](https://github.com/axios/axios/blob/master/CHANGELOG.md)
        - [升级指南](https://github.com/axios/axios/blob/master/UPGRADE_GUIDE.md)
        - [生态系统](https://github.com/axios/axios/blob/master/ECOSYSTEM.md)
        - [贡献指南](https://github.com/axios/axios/blob/master/CONTRIBUTING.md)
        - [行为准则](https://github.com/axios/axios/blob/master/CODE_OF_CONDUCT.md)
    - 鸣谢
    - 开源协议 MIT
