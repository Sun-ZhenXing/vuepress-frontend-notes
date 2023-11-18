---
date: 2023-11-14 22:00:00
---
# Tampermonkey 参考

[[TOC]]

::: warning 官方文档

文本翻译并修改自 [官方文档](https://www.tampermonkey.net/documentation.php)，请以官方文档为准。

:::

## 1. 头信息

### @name

脚本名称，可以通过后缀实现国际化。

```js
// @name    A test
// @name:de Ein Test
```

### @namespace

命名空间，用于区分不同的脚本。

### @copyright

版权声明，显示在脚本编辑器页眉的脚本名称下方。

### @version

脚本版本号，用于更新检测，每次更新必须增加，并且使用语义化的版本号。

### @description

脚本描述，可以通过后缀实现国际化。

### @icon

低分辨率的脚本图标。也可以使用 `@iconURL`、`@defaulticon`。

### @icon64

该脚本图标的像素为 64x64。如果给定了此标签，但未给定 `@icon`，则 `@icon` 图像将在选项页面的某些地方按比例缩放。

### @grant

`@grant` 用于授权 `GM_*` 和 `GM.*` 函数，还包括 `unsafeWindow` 对象和其他一些功能比较强的 `window` 函数。

```js
// @grant GM_setValue
// @grant GM_getValue
// @grant GM.setValue
// @grant GM.getValue
// @grant GM_setClipboard
// @grant unsafeWindow
// @grant window.close
// @grant window.focus
// @grant window.onurlchange
```

由于关闭和聚焦标签页是比较强的功能，因此也需要在 `@grant` 语句中添加这项功能。如果 `@grant` 后跟的是 `none`，则沙盒将被禁用。在这种模式下，`GM_*` 功能不可用，但 `GM_info` 仍然可用。

```js
// @grant none
```

如果没有给出 `@grant` 标记，则假定列表为空。但这与使用 `@grant none` 不同。

### @author

脚本作者。

## 2. API 接口

### unsafeWindow

*@note:TS* `unsafeWindow: Window & typeof globalThis`

`unsafeWindow` 对象提供了对 Tampermonkey 运行页面的 `window` 对象的访问权限，而不是 Tampermonkey 扩展的窗口对象。这在某些情况下非常有用，例如当用户脚本需要访问页面上定义的 JavaScript 库或变量时。

### 子资源整合

子资源整合（Subresource Integrity，SRI）是一项安全功能，可让用户脚本开发人员确保其用户脚本中包含的外部资源（如 JavaScript 库和 CSS 文件）未被篡改或修改。具体方法是生成资源的加密哈希值，并将其包含在 `@require` 和 `@resource` 标记中。安装用户脚本时，Tampermonkey 会计算资源的哈希值，并与包含的哈希值进行比较。如果两个哈希值不匹配，Tampermonkey 将拒绝加载资源，防止攻击者向用户脚本中注入恶意代码。

`@resource` 和 `@require` 标记的 URL 中的哈希标记的使用方法如下。

```js
// @resource SRIsecured1 http://example.com/favicon1.ico#md5=ad34bb...
// @resource SRIsecured2 http://example.com/favicon2.ico#md5=ac3434...,sha256=23fd34...
// @require              https://code.jquery.com/jquery-2.1.1.min.js#md5=45eef...
// @require              https://code.jquery.com/jquery-2.1.2.min.js#md5-ac56d...,sha256-6e789...
// @require              https://code.jquery.com/jquery-3.6.0.min.js#sha256-/xUj+3OJU...ogEvDej/m4=
```

Tampermonkey 本身支持 SHA-256 和 MD5 哈希值，其他所有哈希值（SHA-1、SHA-384 和 SHA-512）都依赖于 `window.crypto`。

如果给出多个哈希值（用逗号或分号分隔），Tampermonkey 将使用当前支持的最后一个哈希值。所有哈希值都需要以十六进制或 Base64 格式编码。

### GM_addElement

::: warning 实验性

此功能是实验性的，可能会在未来的版本中更改。

:::

*@note:TS* `GM_addElement(tag_name: string, attributes: ...): HTMLElement`

*@note:TS* `GM_addElement(parent_node: ..., tag_name: string, attributes: ...): HTMLElement`

```js
GM_addElement('script', {
  textContent: 'window.foo = "bar"'
})

GM_addElement('script', {
  src: 'https://example.com/script.js',
  type: 'text/javascript'
})

GM_addElement(document.getElementsByTagName('div')[0], 'img', {
  src: 'https://example.com/image.png'
})

GM_addElement(shadowDOM, 'style', {
  textContent: 'div { color: black; }'
})
```

### GM_addStyle

*@note:TS* `GM_addStyle(css: string): HTMLStyleElement`

将给定的样式添加到文档中，并返回注入的样式元素。

```js
GM_addStyle(`
 body {
    background-color: orange;
  }
`)
```

### GM_download

*@note:TS* `GM_download(options: DownloadOptions): { abort(): boolean }`

*@note:TS* `GM_download(url: string, name?: string): { abort(): boolean }`

下载文件。

```js
GM_download("http://example.com/file.txt", "file.txt")

const download = GM_download({
  url: "http://example.com/file.txt",
  name: "file.txt",
  saveAs: true
})

// 5 秒后取消下载
window.setTimeout(() => download.abort(), 5000)
```

### GM_getResourceText

允许用户脚本访问通过 `@resource` 包含在用户脚本中的资源（如 JavaScript 或 CSS 文件）的文本。

该函数接收一个参数，即要检索的资源的名称。它会以字符串形式返回资源文本。

下面是一个如何使用该函数的示例：

```js
const scriptText = GM_getResourceText('myscript.js')
const script = document.createElement('script')
script.textContent = scriptText
document.body.appendChild(script)
```

### GM_info

获取有关脚本和 TM 的一些信息。对象可能是这样的


