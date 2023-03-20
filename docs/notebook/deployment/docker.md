# Docker 快速部署前端

为了快速演示，我们可以使用 Docker 快速部署一个前端项目。

首先我们需要在前端项目添加一个 `Dockerfile` 文件，内容如下：

```dockerfile
FROM nginx:1.23.3-alpine
COPY $PWD/dist/ /usr/share/nginx/html/

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
```

接着使用下面的命令构建（如果是 Windows 在 WSL 中操作）：

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

打开 <http://localhost> 即可看到内容。
