# 自动化部署

[[TOC]]

## 1. CI/CD

CI/CD 是指持续集成（Continuous Integration）和持续部署（Continuous Deployment）。如果你正在使用 GitHub，那么你可以使用 GitHub Actions 来实现 CI/CD。如果你在维护大型项目，建议使用一些成熟的 CI/CD 系统来保证你的项目的可用性。

## 2. 通过定时任务实现自动化部署

下面使用简单的定时任务来实现自动化部署，仅用于个人项目或测试。正式环境中请勿使用此方法，推荐使用成熟的 CI/CD 系统。

首先，可用使用 `release.sh` 脚本来实现自动化编译并上传到服务器，脚本内容如下：

::: code-tabs

@tab Linux

```bash:no-line-numbers
# release.sh
pnpm build

zip -r dist.zip ./.output/*

scp -i root-user.pem dist.zip root@123.123.123.123:/home/admin/

rm dist.zip
```

@tab Windows

```bat:no-line-numbers
@REM release.cmd
@echo off
call pnpm build

@REM use 7z to zip
7z a dist.zip ./.output/* -r

@REM use WSL to upload file, you can change to other tools
bash -c "scp -i root-user.pem dist.zip root@123.123.123.123:/home/admin/"

del dist.zip
```

:::

下面，我们在服务器上编写一个 `deploy.sh` 脚本，用于自动部署。我们以部署静态文件为例：

```bash
pushd /home/admin/
echo 'deploy static files ...'

if [ -f "dist.zip" ];then
  rm /usr/share/nginx/html/docs/* -rf
  unzip -qo dist.zip -d /usr/share/nginx/html/docs
  rm dist.zip -rf
else
  echo "dist.zip not found!"
fi
```

::: warning 文件不完整

以上脚本存在问题，当上传未完成但文件存在时，会导致文件错误部署，另外，如果部署过程过长而导致两次部署任务重叠也会破坏任务。此时使用下面的脚本，给任务加锁，避免任务重叠。

脚本中的 `sleep 60` 为了防止文件上传未完成就开始部署，可以根据实际情况调整。

:::

```bash
pushd /home/admin/
if [ -f "locked_deploy.sock" ];then
  exit
else
  touch locked_deploy.sock
fi

echo 'deploy static files ...'

if [ -f "dist.zip" ];then
  sleep 60
  rm /usr/share/nginx/html/docs/* -rf
  unzip -qo dist.zip -d /usr/share/nginx/html/docs
  rm dist.zip -rf
else
  echo "dist.zip not found!"
fi

rm locked_deploy.sock
popd
```

为了让脚本能定期运行，我们需要使用 `crontab` 命令计划定时任务，下面创建定时任务：

```bash
crontab -e
```

建议使用 Root 用户来创建定时任务，当需要以其他用户身份运行时，可以使用 `su` 命令来切换用户。

然后指定定时任务的执行时间，比如每分钟执行一次：

```properties
* * * * * /bin/bash /home/admin/deploy.sh
```

现在，每次运行 `release.sh` 脚本后，都会自动部署到服务器上。

## 3. 部署 Docker 项目

下面我们部署一个 Nuxt3 项目，此项目运行在 Docker 环境下，这是我们的 `Dockerfile` 文件：

```dockerfile
FROM node:18.16.0-alpine3.17

ENV NODE_OPTIONS=--max-old-space-size=4096 \
    TZ=Asia/Shanghai \
    LANG=C.UTF-8 \
    LANGUAGE=C.UTF-8 \
    LC_ALL=C.UTF-8

WORKDIR /app

COPY $PWD/.output ./.output/

EXPOSE 3000

CMD ["node", ".output/server/index.mjs"]
```

我们的部署脚本 `deploy.sh` 如下：

```bash
pushd /home/admin/
if [ -f "locked_deploy.sock" ];then
  exit
else
  touch locked_deploy.sock
fi

if [ -f "dist.zip" ];then
  sleep 60
  unzip -qo dist.zip -d repo/.output
  docker stop test-nuxt-1
  docker rm test-nuxt-1
  docker rmi test-nuxt -f

  cd repo
  docker build . -t test-nuxt
  docker run -d -p 3000:3000 --name test-nuxt-1 test-nuxt

  cd ..
  rm repo/.output -rf
  rm dist.zip -rf
else
  echo 'not found!'
fi

rm locked_deploy.sock
popd
```

下面的步骤和上面的一样，设置好定时任务后，每次运行 `release.sh` 脚本后，都会自动部署到服务器上。
