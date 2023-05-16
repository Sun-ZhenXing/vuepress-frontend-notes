# Docker 部署前端项目

[[TOC]]

## 1. Nginx 快速演示

为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 `/dist/` 目录下。

我们需要在项目添加一个 `Dockerfile` 文件，内容如下：

```dockerfile
FROM nginx:1.24.0-alpine3.17-slim
COPY $PWD/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

可以在 Linux/WSL2 中使用下面的命令构建：

```bash
docker build -t my_test:v1 .
```

构建成功后运行容器：

```bash
docker run -itd -p 80:80 my_test:v1
```

打开 <http://localhost/> 即可看到内容。

## 2. 编译并部署

在同一个 `Dockerfile` 文件中，我们可以使用两个镜像来完成编译和部署。

如果项目的根目录不是 `/`，我们可以将 `index.html` 文件的内容设置为：

```html
<script>window.location.href = '/docs/'</script>
```

这样我们就会默认被定向到 `/docs/` 目录下，也可以使用 `nginx.conf` 文件来配置。

下面，我们构建一个基于 VuePress 的文档项目，默认页面是 `/vuepress-frontend-notes/`（即你现在正在看到的项目），使用 `pnpm` 编译。

@[code dockerfile](/Dockerfile)

你可以克隆本项目，即上放的 GitHub 地址，本项目提供了上述 `Dockerfile` 文件，你可以构建镜像：

```bash
docker build -t vuepress-frontend-notes .
```

构建成功后运行容器：

```bash
docker run -itd -p 80:80 vuepress-frontend-notes
```

打开 <http://localhost/> 即可看到被重定向到 <http://localhost/vuepress-frontend-notes/>，可以找到本页面的内容。

::: warning 溢出堆空间

如果你的项目比较大，或者服务器内存不足，可能在构建时出现 `FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory` 错误。

几种解决方法，其中 `4096`（4 GB）可改为你需要的空间大小：

- 在 `Dockerfile` 中添加 `ENV NODE_OPTIONS=--max-old-space-size=4096`
- 添加命令 `export NODE_OPTIONS=--max_old_space_size=4096`
- *@note:已弃用* 使用 [`increase-memory-limit`](https://www.npmjs.com/package/increase-memory-limit) 插件

:::
