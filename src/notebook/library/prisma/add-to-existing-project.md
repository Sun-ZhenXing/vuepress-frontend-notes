# 将 Prisma 添加到现有项目

[[TOC]]

## 1. 安装依赖

```bash
pnpm add -D prisma
```

现在可以执行 `prisma` 命令来查看操作：

```bash
npx prisma
```

初始化项目：

```bash
npx prisma init
```

这将会创建文件 `prisma/schema.prisma`。

我们需要准备一个数据库，这里以 MySQL 为例。

在 `.env` 文件中，保存了数据库的链接 `DATABASE_URL`，例如可以修改为 MySQL：

```properties
DATABASE_URL="mysql://root:password@localhost:3306/mydb"
```

## 2. 从数据库中逆向生成 Prisma 模型

使用下面的命令，从数据库中逆向生成 Prisma 模型：

```bash
npx prisma db pull
```

下面可以对 `prisma/schema.prisma` 进行一些修改。

## 3. 生成 Prisma Client

```bash
pnpm add -D @prisma/client
npx prisma generate
```
