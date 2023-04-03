# soybean-admin 入门

[[TOC]]

## 1. 项目简介

[Soybean Admin](https://github.com/honghuangdc/soybean-admin) 是一个基于 Vue3、Vite4、TypeScript、Naive UI、Pinia 和 UnoCSS 的清新优雅的中后台模版。

- [在线预览](https://soybean.pro/)
- [项目文档](https://docs.soybean.pro/guide/)
- [官方文档](https://docs.soybean.pro/)
- [Tauri 版](https://github.com/honghuangdc/soybean-admin/tree/tauri)
- [精简版](https://github.com/honghuangdc/soybean-admin/tree/thin)
- [Java 后端示例](https://github.com/honghuangdc/soybean-admin-java)

::: info 使用说明

建议使用主分支的版本，其他分支或 Gitee 上的版本更新不及时。克隆主分支并随时保持更新，可以在本地 Git 选择多个远程仓库链接来合并更新。

:::

| 技术栈          | 依赖       |
| --------------- | ---------- |
| JS 框架         | Vue3       |
| 开发工具        | Vite4      |
| 语言            | TypeScript |
| 包管理器        | pnpm       |
| CSS 预处理      | Sass       |
| UI              | Naive UI   |
| 样式            | UnoCSS     |
| 图标            | Iconify    |
| 请求            | Axios      |
| 加密            | CryptoJS   |
| 时间日期        | dayjs      |
| 环境管理        | cross-env  |
| 组合式函数      | VueUse     |
| 图表            | ECharts    |
| 可视化          | AntV G2    |
| 存储            | Pinia      |
| Lint            | ESLint     |
| 代码格式化      | Prettier   |
| Markdown 编辑器 | Vditor     |
| Git 提交规范    | Commitizen |
| H5 视频播放器   | xgplayer   |

## 2. 开发环境

### 2.1 系统环境依赖

本地开发基础环境：
- VS Code
- Git
- Node.js 14.18+（推荐 18.x）
- pnpm@7.x（推荐 7.30+）

::: details Docker 配置指南

可选地，使用 Docker 容器开发：

```bash
docker run -itd --name soybean-admin \
    -p 8080:8080 \
    -p 3200:3200 \
    -v $PWD/app:/app \
    node:18.15-bullseye \
    /bin/bash

docker exec -it soybean-admin /bin/bash
```

虽然 `pnpm@v8` 已经正式发布，但我们仍然使用 `pnpm@v7`。在容器内安装 `pnpm@v7`：

```bash
npm install -g pnpm@7
SHELL=bash pnpm setup
source /root/.bashrc
```

:::

安装其他工具：

```bash
# 确保使用 pnpm@v7
pnpm add -g pnpm@7
# cz 提交规范
pnpm add -g commitizen
# http-server
pnpm add -g http-server
```

VS Code 插件可以直接安装项目内推荐的内容，也可以有选择地安装。

| 插件名称                      | 描述                                           | 需要 |
| ----------------------------- | ---------------------------------------------- | ---- |
| Vue Language Features (Volar) | Vue 服务插件                                   | 必须 |
| ESLint                        | 代码检查                                       | 必须 |
| TypeScript Vue Plugin (Volar) | Vue 的 TS 服务插件                             | 推荐 |
| Material Icon Theme           | 图标主题，显示文件和文件多种图标               | 推荐 |
| Iconify IntelliSense          | Iconify 图标实时显示的插件                     | 推荐 |
| UnoCSS                        | UnoCSS 写法提示插件                            | 推荐 |
| Vue VSCode Snippets           | Vue 写法提示                                   | 推荐 |
| Icônes                        | 搜索 iconify 图标的插件                        | 推荐 |
| Prettier                      | 代码格式化插件                                 | 推荐 |
| Color Highlight               | 颜色高亮插件                                   | 可选 |
| Auto Close Tag                | 自动添加 HTML/XML 结束标签                     | 可选 |
| Auto Complete Tag             | 为 HTML/XML 添加关闭标签和自动重命名成对的标签 | 可选 |
| Auto Rename Tag               | 自动重命名成对的 HTML/XML 标签                 | 可选 |
| DotENV                        | 高亮 `.env` 文件                               | 可选 |
| EditorConfig for VS Code      | 统一不同编辑器的一些配置                       | 可选 |
| Git Graph                     | Git 图形化操作工具                             | 可选 |
| GitLens                       | 显示具体某行代码的 Git 信息                    | 可选 |
| Path Intellisense             | 智能显示导入的路径                             | 可选 |

可以全部安装以使用全部功能。

### 2.2 项目依赖

克隆项目：

```bash
git clone https://github.com/honghuangdc/soybean-admin.git
cd soybean-admin
pnpm i
```

*@note:报错指南* 如果不安装 **TypeScript Vue Plugin** 插件，在打开一些源文件时报告无法解析 Vue 文件，创建 `src/env.d.ts` 即可，文件名可以任意写，内容是：

```ts
declare module '*.vue' {
  import type { ComponentOptions } from 'vue';
  const componentOptions: ComponentOptions;
  export default componentOptions;
}
```

## 3. 项目结构

### 3.1 目录结构

<div style="max-width: 100%; overflow-x: auto; overflow-y: clip;">
    <div style="min-width: 600px;">
        <TreeNode :items="menu" />
    </div>
</div>

<script setup lang="ts">
import TreeNode from '@/components/TreeNode.vue'
import 'font-awesome/css/font-awesome.css'
import menu from '@/data/menu.json'
</script>

### 3.2 路由

首先 `src\router\index.ts` 中从环境变量中读取 `VITE_HASH_ROUTE` 和 `VITE_BASE_URL` 决定创建路由的属性。
- 路由定义文件 `src\router\routes\index.ts`，路由使用了自定义类型

通过 `createRouterGuard` 创建路由守卫，此函数在路由前加载进度条，然后验证权限，路由后关闭进度条。
- 调用了 `createPermissionGuard` 来验证权限
- 通过 `createDynamicRouteGuard` 创建动态路由
- 使用策略模式 `StrategyAction` 封装了权限验证逻辑
