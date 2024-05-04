# pnpm 介绍

<!-- markdownlint-disable MD033 -->

[[TOC]]

## 1. pnpm 介绍

### 1.1 为什么使用 pnpm

`pnpm`（perfomance npm）源于对性能和更少空间的需求。

简单介绍：

1. `pnpm` 是一个包管理器，类似于 `npm` 和 `yarn`。
2. `pnpm` 极快且节省空间，因为它使用链接安装依赖，而且能避免 [幽灵依赖问题](https://zhuanlan.zhihu.com/p/412419619)。
3. `pnpm` 提供了兼容性选项，提供持续集成的可靠支持。

`pnpm` 分三个阶段执行安装：

1. 依赖解析：仓库中没有的依赖都被识别并获取到仓库。
2. 目录结构计算：`node_modules` 目录结构是根据依赖计算出来的。
3. 链接依赖项：所有以前安装过的依赖项都会直接从仓库中获取并链接到 `node_modules`。

### 1.2 安装 pnpm

安装 `pnpm`：

```bash
npm install -g pnpm
```

第一次使用 `pnpm` 可能需要配置：

```bash
pnpm setup
```

Linux 可能需要指定 Shell：

```bash
SHELL=bash pnpm setup
source /root/.bashrc
```

## 2. 依赖安装方式

由于 `pnpm` 使用链接安装依赖，所以 `node_modules` 目录结构与 `npm` 和 `yarn` 不同，下面介绍 `node_modules` 几种不同的安装方式。

### 2.1 嵌套安装

在 `npm@3` 之前，`node_modules` 结构是干净、可预测的，因为 `node_modules` 中的每个依赖项都有自己的 `node_modules` 文件夹，在 `package.json` 中指定了所有依赖项。例如下面所示，项目依赖了 `foo`，`foo` 又依赖了 `bar`，依赖关系如下图所示。[^2]

[^2]: 都 2022 年了，`pnpm` 快到碗里来，知乎，<https://zhuanlan.zhihu.com/p/457698236>

<TreeNode :items="nested" />

### 2.2 扁平安装

<TreeNode :items="flat" />

<script setup lang="ts">
import TreeNode from '@/components/TreeNode.vue'
const nested = [{
  "name": "node_modules",
  "show": true,
  "children": [
    {
      "name": "foo",
      "show": true,
      "children": [
        {
          "name": "index.js"
        },
        {
          "name": "package.json"
        },
        {
          "name": "node_modules",
          "show": true,
          "children": [
            {
              "name": "bar",
              "show": true,
              "children": [
                {
                  "name": "index.js"
                },
                {
                  "name": "package.json"
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}]
const flat = [{
  "name": "node_modules",
  "show": true,
  "children": [
    {
      "name": "foo",
      "show": true,
      "children": [
        {
          "name": "index.js"
        },
        {
          "name": "package.json"
        }
      ]
    },
    {
      "name": "bar",
      "show": true,
      "children": [
        {
          "name": "index.js"
        },
        {
          "name": "package.json"
        }
      ]
    }
  ]
}]
</script>
