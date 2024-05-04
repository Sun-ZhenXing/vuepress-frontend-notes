import process from 'node:process'
import { hopeTheme } from 'vuepress-theme-hope'
import { getDirname, path } from 'vuepress/utils'

import { config } from '../../config'
import { version } from '../../package.json'
import navbar from './navbar'
import sidebar from './sidebar'

const __dirname = getDirname(import.meta.url)
const ROOT_PATH = path.resolve(__dirname, '../..')
const CURRENT_PATH = path.resolve(__dirname, '.')

export default hopeTheme({
  author: {
    name: config.author.name,
    url: config.author.url,
  },
  displayFooter: true,
  docsDir: 'src',
  footer: config.footer,
  hostname: config.hostname,
  iconAssets: 'iconify',
  logo: '/logo.svg',
  // page meta
  metaLocales: {
    editLink: '在 GitHub 上编辑此页',
  },
  // navbar
  navbar,
  plugins: {
    // 自动目录
    catalog: {},
    // 复制代码
    copyCode: {
      showInMobile: true,
    },
    mdEnhance: {
      // GFM 警告
      alert: true,
      // 自定义对齐
      align: true,
      // 属性
      attrs: true,
      // Chart 图表
      chart: false,
      // 代码组
      codetabs: true,
      // 组件
      component: true,
      // 代码示例
      demo: true,
      // Echarts 图表
      echarts: true,
      // figure
      figure: true,
      // 流程图
      flowchart: true,
      // GFM 语法
      gfm: true,
      // 图片懒加载
      imgLazyload: true,
      // 图片标记
      imgMark: true,
      // 图片大小
      imgSize: true,
      // 包含文件
      include: {
        resolvePath: (file) => {
          if (file.startsWith('@/'))
            return file.replace(/^@\//, CURRENT_PATH)
          if (file.startsWith('/'))
            return file.replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
          return file
        },
      },
      // KaTeX 数学公式
      katex: {
        // 支持复制公式
        copy: true,
        // 化学公式扩展
        mhchem: true,
      },
      // 标注
      mark: true,
      // Markmap
      markmap: true,
      // Mermaid
      mermaid: true,
      // 幻灯片
      revealJs: true,
      // 风格化
      stylize: [
        {
          matcher: '@_VERSION',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip' },
                content: `v${version}`,
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@_BUILD_TIME',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip' },
                content: new Date().toString(),
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@_BUILD_ENV',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip' },
                content: `${process.platform}-${process.arch}-${process.release.name} ${process.version}`,
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: /@def/,
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'tip' },
                content: '定义',
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: /@note:.+/,
          replacer: ({ content, tag }) => {
            if (tag === 'em') {
              return {
                attrs: { style: 'user-select: none;', type: 'warning' },
                content: content.substring(6),
                tag: 'Badge',
              }
            }
          },
        },
        {
          matcher: '@TODO',
          replacer: ({ tag }) => {
            if (tag === 'em') {
              return {
                attrs: { type: 'danger' },
                content: 'TODO',
                tag: 'Badge',
              }
            }
          },
        },
      ],
      // 下标
      sub: true,
      // 上标
      sup: true,
      // 标签页分组
      tabs: true,
      // v-pre 容器
      vPre: true,
      // Vue Playground
      vuePlayground: false,
    },
    // 搜索
    docsearch: {
      apiKey: '3b6438cb1895eff367c5c84c8fa50383',
      appId: 'DF0MWQNCKW',
      indexName: 'alexsun_blog',
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonAriaLabel: '搜索文档',
              buttonText: '搜索文档',
            },
            modal: {
              errorScreen: {
                helpText: '你可能需要检查你的网络连接',
                titleText: '无法获取结果',
              },
              footer: {
                closeText: '关闭',
                navigateText: '切换',
                searchByText: '搜索提供者',
                selectText: '选择',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                reportMissingResultsLinkText: '点击反馈',
                reportMissingResultsText: '你认为该查询应该有结果？',
                suggestedQueryText: '你可以尝试查询',
              },
              searchBox: {
                cancelButtonAriaLabel: '取消',
                cancelButtonText: '取消',
                resetButtonAriaLabel: '清除查询条件',
                resetButtonTitle: '清除查询条件',
              },
              startScreen: {
                favoriteSearchesTitle: '收藏',
                noRecentSearchesText: '没有搜索历史',
                recentSearchesTitle: '搜索历史',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                saveRecentSearchButtonTitle: '保存至搜索历史',
              },
            },
          },
        },
      },
      placeholder: '搜索文档',
      searchParameters: {
        facetFilters: ['tags:frontend'],
      },
    },
  },
  repo: config.repo,
  // sidebar
  sidebar,
})
