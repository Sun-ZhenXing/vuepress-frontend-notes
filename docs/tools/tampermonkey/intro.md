# Tampermonkey 快速入门

[[TOC]]

## 1. 入门

[Tampermonkey](https://www.tampermonkey.net/) 是一款免费的浏览器扩展和最为流行的用户脚本管理器，它适用于 Chrome、Microsoft Edge、Safari 以及其他 Chromium 和 Firefox 内核的浏览器。

## 2. 使用开放的用户脚本

下面这几个平台是寻找用户脚本的绝佳选择：

- [Greasy Fork](https://greasyfork.org/)
- [Userscript.Zone](https://www.userscript.zone/)
- [OpenUserJS](https://openuserjs.org/)

可以搜索你需要的脚本，然后点击安装即可。

注意用户脚本能代替你操作，还可能窃取你的授权或隐式信息。因此你应该只从受信任的渠道安装脚本。

## 3. 编写脚本

```js
// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://bbs.tampermonkey.net.cn/thread-1909-1-1.html
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tampermonkey.net.cn
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    // Your code here...
})();
```

### 3.1 脚本头信息

推荐阅读 [官方文档](https://www.tampermonkey.net/documentation.php)。

| 名称           | 描述             | 说明                                                                      |
| -------------- | ---------------- | ------------------------------------------------------------------------- |
| `@name`        | 脚本名称         |                                                                           |
| `@namespace`   | 脚本命名空间     |                                                                           |
| `@version`     | 脚本版本         | 语义化版本规则                                                            |
| `@author`      | 脚本作者         | -                                                                         |
| `@description` | 脚本描述         | -                                                                         |
| `@include`     | 脚本匹配地址     | 可以使用正则表达式                                                        |
| `@match`       | 脚本匹配地址     | 允许使用通配符，更加严格                                                  |
| `@exclude`     | 排除脚本匹配地址 | -                                                                         |
| `@require`     | 引入外部 JS 文件 | 指向脚本开始运行之前加载并执行的 JavaScript 文件                          |
| `@resource`    | 预加载资源       | 预加载的资源由 `GM_getResourceURL` 访问                                   |
| `@connect`     | 获取网站访问权限 | 允许由 `GM_xmlhttpRequest` 检索的子域                                     |
| `@run-at`      | 脚本的运行时机   | 可选项：`document-start`、`body`、`end`、`idle`、`menu`                   |
| `@grant`       | 申请 API 权限    | `none` 表示页面环境，`unsafeWindow` 表示沙盒环境，其他权限由 API 名称指定 |
| `@noframes`    | 脚本标记         | 标记使脚本在主页上运行，但不在 `<iframe>` 上运行                          |

### 3.2 API 说明

| 名称                           | 描述                                                                             |
| ------------------------------ | -------------------------------------------------------------------------------- |
| `GM_addStyle`                  | 将给定样式添加到文档中并返回注入的样式元素                                       |
| `GM_addElement`                | 创建指定的 HTML 元素，应用所有给定的属性并返回注入的 HTML 元素，此功能是实验性的 |
| `GM_setValue`                  | 存储一个给定名称的值                                                             |
| `GM_getValue`                  | 从 `GM_setValue` 存储的名称中获取值                                              |
| `GM_deleteValue`               | 将 `GM_setValue` 存储的名称删除                                                  |
| `GM_listValues`                | 列出存储的所有名称                                                               |
| `GM_addValueChangeListener`    | 侦听 `GM_setValue` 储存名称的值的更改并返回更改前和后的值                        |
| `GM_removeValueChangeListener` | 删除由 `GM_addValueChangeListener` 添加的侦听器                                  |
| `GM_log`                       | 向控制台记录消息                                                                 |
| `GM_getResourceText`           | 获取由 `@resource` 预加载的资源                                                  |
| `GM_getResourceURL`            | 获取由 `@resource` 预加载的 Base64 编码 URI                                      |
| `GM_registerMenuCommand`       | 注册一个菜单，在运行此脚本的页面的中显示                                         |
| `GM_registerMenuCommand`       | 取消由 `GM_registerMenuCommand` 注册的菜单                                       |
| `GM_openInTab`                 | 通过给定的 URL 打开一个新标签页                                                  |
| `GM_xmlhttpRequest`            | 通过脚本发送的 XHR 请求                                                          |
| `GM_download`                  | 通过给定的 URL 下载文件到本地                                                    |
| `GM_saveTab`                   | 保存选项卡对象，生命周期为选项卡的打开->关闭                                     |
| `GM_getTab`                    | 获取选项卡对象，生命周期为选项卡的打开->关闭                                     |
| `GM_getTabs`                   | 获取所有选项卡对象，生命周期为选项卡的打开->关闭                                 |
| `GM_notification`              | 显示桌面通知                                                                     |
| `GM_setClipboard`              | 将数据复制到剪贴板                                                               |
