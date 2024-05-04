# corepack - Node.js 包管理器的管理器

[[TOC]]

## 1. 简介

`corepack` 是一个 Node.js 包管理器的管理器，它可以帮助你管理全局的 Node.js 包管理器，例如 `yarn` 和 `pnpm`。

`corepack` 从 Node.js 14.19.0 开始就包含在 Node.js 中，你可以通过 `corepack` 命令来使用它。

## 2. 安装

如果你还没有使用过 `corepack`，你可以通过以下命令来激活它：

```bash
corepack enable
```

在一些系统上这需要管理员权限。

## 3. 使用

查看帮助：

```bash
corepack --help
```

使用 `corepack` 来激活 `pnpm` 的最新版本：

```bash
corepack prepare pnpm@latest --activate
```

也可以指定版本激活：

```bash
corepack prepare pnpm@7 --activate
```

激活 `yarn` 最新版本：

```bash
corepack prepare yarn@<版本> --activate
```

## 4. 使用代理

经过验证，大陆的网络环境下，使用 `corepack` 会出现网络问题，部分时间无法下载依赖。

可以通过设置 `HTTP_PROXY` 和 `HTTPS_PROXY` 环境变量来使用代理，例如：

在 Windows 上，`corepack` 不支持 SOCKS5 协议，所以 `HTTP_PROXY` 和 `HTTPS_PROXY` 需要使用 `http://` 协议。
