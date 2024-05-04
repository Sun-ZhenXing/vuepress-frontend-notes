# Vue 发行版本文件含义

[[TOC]]

| 符号          | 含义                | 说明                                         |
| ------------- | ------------------- | -------------------------------------------- |
| `global`      | 将 `Vue` 暴露到全局 | 构建为 IIFEs                                 |
| `esm-browser` | ES 模块             | 浏览器需要使用 `<script type="module">` 引入 |
| `esm-bundler` | ES 模块             | 用于打包工具                                 |
| `runtime`     | 运行时              | 不带编译模块，不能动态编译 Vue 模板          |
| `prod`        | 生产环境            | 压缩后的代码                                 |
| `cjs`         | CommonJS 模块       | 用于 Node.js                                 |
