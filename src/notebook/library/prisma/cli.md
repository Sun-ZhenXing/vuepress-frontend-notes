# Prisma 命令行

[[TOC]]

## 1. 常见命令

查看帮助：

```bash
npx prisma --help
```

许多命令支持 `--json` 参数，可以将输出转换为 JSON 格式。

初始化项目：

```bash
npx prisma init
```

使用 `--datasource-provider` 参数指定数据源，如 `sqlite`、`postgresql`、`mysql` 等。

生成 Prisma Client，这将安装 `@prisma/client` 依赖：

```bash
npx prisma generate
```

启动 Prisma Studio，用于查看数据库中的数据：

```bash
npx prisma studio
```

执行迁移，并生成客户端：

```bash
npx prisma migrate dev
```

使用 `--name` 参数指定迁移名称。

从数据库中拉取 Schema，更新 Prisma Schema：

```bash
npx prisma db pull
```

将 Prisma Schema 推送到数据库：

```bash
npx prisma db push
```

验证 Prisma Schema：

```bash
npx prisma validate
```

格式化 Prisma Schema：

```bash
npx prisma format
```

## 2. 命令行参考

::: info 官方文档

官方文档：[命令行参考](https://www.prisma.io/docs/reference/api-reference/command-reference)。

:::

| 命令       | 描述                             |
| ---------- | -------------------------------- |
| `init`     | 初始化 Prisma                    |
| `generate` | 生成 Prisma 客户端               |
| `db`       | 管理你的数据库 Schema 和生命周期 |
| `migrate`  | 迁移你的数据库                   |
| `studio`   | 使用 Prisma Studio 浏览你的数据  |
| `validate` | 验证你的 Prisma Schema           |
| `format`   | 格式化你的 Prisma Schema         |
