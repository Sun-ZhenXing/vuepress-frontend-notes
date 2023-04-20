# Docker 部署前端项目

[[TOC]]

## 1. Nginx 快速演示

为了快速演示，我们可以使用 Docker 快速部署一个前端项目。假设我们的项目构建输出在 `/dist/` 目录下。

我们需要在项目添加一个 `Dockerfile` 文件，内容如下：

```dockerfile
FROM nginx:1.23.3-alpine
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
docker run -itd \
    --name test \
    -p 80:80 \
    my_test:v1
```

打开 <http://localhost/> 即可看到内容。

## 2. 编译加部署

在同一个 `Dockerfile` 文件中，我们可以使用两个镜像来完成编译和部署。

如果项目的根目录不是 `/`，我们可以将 `index.html` 文件的内容设置为：

```html
<script>window.location.href = '/docs/'</script>
```

下面，我们构建一个基于 VuePress 的文档项目（就像本项目一样），使用 `pnpm` 编译。

```dockerfile
# Builder
FROM node:18.15-bullseye as builder

WORKDIR /app

COPY *.* ./
COPY docs/ ./docs/

RUN npm install -g pnpm && \
    pnpm install && \
    pnpm build

# Nginx Server
FROM nginx:1.23.3-alpine

ENV TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

WORKDIR /usr/share/nginx/html/docs/

RUN echo "<script>window.location.href = '/docs/'</script>" > /usr/share/nginx/html/index.html
COPY --from=builder /app/docs/.vuepress/dist/ ./

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
```

你可以克隆本项目，然后将上述内容保存为 `Dockerfile` 放到项目的根目录，然后运行：

```bash
docker build -t my_docs:v1 .
```

构建成功后运行容器：

```bash
docker run -itd \
    --name test \
    -p 80:80 \
    my_docs:v1
```

打开 <http://localhost/> 即可看到被重定向到 <http://localhost/docs/>，可以找到本页面的内容。
