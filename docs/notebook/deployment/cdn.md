# CDN 文件

[[TOC]]

## 2. CDN 推荐

| 名称                                      | 说明                                                 |
| ----------------------------------------- | ---------------------------------------------------- |
| [jsDelivr](https://www.jsdelivr.com/)     | 大陆速度较慢，有时被屏蔽，由 Cloudflare 等支持       |
| [unpkg](https://unpkg.com/)               | 大陆速度较慢，有时被屏蔽，由 Cloudflare 等支持       |
| [staticfile](https://www.staticfile.org/) | 国内 CDN，由七牛云支持                               |
| [bootcdn](https://www.bootcdn.cn/)        | 国内 CDN，由又拍云支持                               |
| [baomitu](https://cdn.baomitu.com/)       | 国内 CDN，由又 360 支持                              |
| [bytedance](https://cdn.bytedance.com/)   | 国内 CDN，由字节跳动支持                             |
| [npmmirror](https://npmmirror.com/)       | 国内 NPM 镜像，由阿里云支持，几乎和 npm 官方仓库一致 |

## 3. 使用 npmmirror

[npmmirror](https://npmmirror.com/) 是一个国内的开源 NPM 镜像，其前身是淘宝镜像，拥有国内最大的 NPM 镜像缓存。其 [源代码](https://github.com/cnpm/cnpmcore) 托管在 GitHub 上，可以自行搭建镜像。[^1]

[^1]: npmmirror 镜像站已内置支持类似 unpkg cdn 解析能力，<https://zhuanlan.zhihu.com/p/633904268>

- 获取目录信息 `/${pkg}/${versionOrTag}/files?meta`
    > <https://registry.npmmirror.com/antd/5.5.2/files?meta>
- 获取文件内容 `/${pkg}/${versionOrTag}/files/${path}`
    > <https://registry.npmmirror.com/antd/5.5.0/files/lib/index.js>
- 获取文件元信息 `/${pkg}/${versionOrTag}/files/${path}?meta`
    > <https://registry.npmmirror.com/antd/5.5.0/files/lib/index.js?meta>
- 获取入口文件内容 `/${pkg}/${versionOrTag}/files`
    > <https://registry.npmmirror.com/antd/latest/files>
- 支持 Semver Range
    > <https://registry.npmmirror.com/antd/^5/files/lib/index.js>
