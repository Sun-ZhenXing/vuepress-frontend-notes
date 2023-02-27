import { defineUserConfig, defaultTheme } from 'vuepress'
import { mdEnhancePlugin } from 'vuepress-plugin-md-enhance'
import { copyCodePlugin } from 'vuepress-plugin-copy-code2'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { autoCatalogPlugin } from 'vuepress-plugin-auto-catalog'

const USER_NAME = 'Sun-ZhenXing'
const BASE_PATH = '/vuepress-frontend-notes/'

export default defineUserConfig({
  lang: 'zh-CN',
  title: '前端笔记',
  description: '前端笔记',
  head: [
    ['link', { rel: 'icon', href: `${BASE_PATH}favicon.svg` }]
  ],
  base: BASE_PATH,
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  theme: defaultTheme({
    logo: '/favicon.svg',
    repo: `${USER_NAME}${BASE_PATH}`,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    contributorsText: '贡献者',
    lastUpdatedText: '上次更新',
    navbar: [
    ],
    sidebar: {
      '/nuxt-tutorial/': [
        '/nuxt-tutorial/chapter01/',
        '/nuxt-tutorial/chapter02/',
        '/nuxt-tutorial/chapter03/',
        '/nuxt-tutorial/chapter04/',
        '/nuxt-tutorial/chapter05/',
      ],
      '/android/kotlin/': [
        '/android/kotlin/chapter01/',
        '/android/kotlin/chapter02/',
        '/android/kotlin/chapter03/',
      ],
      '/notebook/js/handwrite-36/': [
        {
          text: 'JS 手写 36 题',
          link: '/notebook/js/handwrite-36/',
          collapsible: true,
          children: [
            '01-data-type-determination',
            '02-prototype-chain-inheritance',
            '03-array-de-duplication',
            '04-flatten-arrays',
            '05-deep-copy',
            '06-event-bus',
            '07-parse-url-param',
            '08-string-template',
            '09-image-lazyload',
            '10-debounce',
            '11-throttle',
            '12-function-currying',
            '13-partial-function',
            '14-jsonp',
            '15-ajax',
            '16-implement-array-prototype-method',
            '17-implement-function-prototype-method',
            '18-implement-new',
            '19-implement-instanceof',
            '20-implement-object-create',
            '21-implement-object-assign',
            '22-implement-json-stringify',
            '23-implement-json-parse',
            '24-implement-promise',
          ]
        }
      ]
    },
  }),
  plugins: [
    mdEnhancePlugin({
      gfm: true,
      container: true,
      linkCheck: true,
      vPre: true,
      tabs: true,
      codetabs: true,
      align: true,
      attrs: true,
      sub: true,
      sup: true,
      footnote: true,
      mark: true,
      imgLazyload: true,
      tasklist: true,
      katex: true,
      mermaid: true,
      delay: 200,
      stylize: [
        {
          matcher: '@def',
          replacer: ({ tag }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'tip' },
              content: '定义'
            }
          }
        },
        {
          matcher: /@note:.+/,
          replacer: ({ tag, content }) => {
            if (tag === 'em') return {
              tag: 'Badge',
              attrs: { type: 'warning' },
              content: content.substring(6)
            }
          }
        }
      ]
    }, false),
        docsearchPlugin({
      appId: 'DF0MWQNCKW',
      apiKey: '3b6438cb1895eff367c5c84c8fa50383',
      indexName: 'alexsun_blog',
      placeholder: '搜索文档',
      searchParameters: {
        facetFilters: ['tags:frontend'],
      },
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    autoCatalogPlugin({}),
    copyCodePlugin({
      showInMobile: true
    })
  ]
})
