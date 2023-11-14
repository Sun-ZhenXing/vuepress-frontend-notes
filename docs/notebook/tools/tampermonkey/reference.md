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
