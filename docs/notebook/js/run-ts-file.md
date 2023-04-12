# 直接运行 TypeScript 文件

安装 `ts-node` 即可直接执行 TypeScript 文件，而不需要编译成 JavaScript 文件。

::: code-tabs

@tab npm

```bash
npm install -g @types/node typescript ts-node
```

@tab pnpm

```bash
pnpm add -g @types/node typescript ts-node
```

@tab yarn

```bash
yarn global add @types/node typescript ts-node
```

:::

使用 `ts-node` 执行 TypeScript 文件：

```bash
ts-node index.ts
```
