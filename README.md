# VuePress Frontend Notes | 前端笔记

![](https://img.shields.io/github/actions/workflow/status/Sun-ZhenXing/vuepress-frontend-notes/deploy-docs.yml?branch=main)

🚀 [Online Reading](https://blog.alexsun.top/vuepress-frontend-notes/) | [在线阅读](https://blog.alexsun.top/vuepress-frontend-notes/).

## 🛠️ Build Docs | 构建文档

使用 `pnpm` 构建 | Build with `pnpm`:

```bash
pnpm i
pnpm build
```

使用 Docker 构建 | Build with Docker:

```bash
docker build -t my_docs:v1 .
docker run -itd -p 80:80 my_docs:v1
```

## 📜 License | 开源协议

- All files except `/docs/*` are licensed under [MIT License](https://mit-license.org/) | 除了文档外的其他文件（除了 `/docs/` 文件夹），使用 [MIT 协议](https://mit-license.org/) 开源
- `/docs/*` are licensed under [CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) | 文档（即 `/docs/` 下的文件）使用 [CC-BY-NC-SA 4.0](https://creativecommons.org/licenses/by-nc-sa/4.0/) 共享

For more details, please read [this series of documents license](https://github.com/Sun-ZhenXing/Sun-ZhenXing.github.io#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE). | 详情请阅读 [此系列文档开源协议](https://github.com/Sun-ZhenXing/Sun-ZhenXing.github.io#%E5%BC%80%E6%BA%90%E5%8D%8F%E8%AE%AE)。
