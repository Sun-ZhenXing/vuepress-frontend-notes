import { viteBundler } from '@vuepress/bundler-vite'
import { slug as slugify } from 'github-slugger'
import { defineUserConfig } from 'vuepress'
import { getDirname, path } from 'vuepress/utils'

import theme from './theme'
import { config } from '../../config'

const __dirname = getDirname(import.meta.url)
const ROOT_PATH = path.resolve(__dirname, '../..')
const CURRENT_PATH = path.resolve(__dirname, '.')

export default defineUserConfig({
  alias: {
    '@': CURRENT_PATH,
  },
  base: config.base as `/${string}/`,
  bundler: viteBundler({
    viteOptions: {
      optimizeDeps: {
        include: [
          // BUG: https://github.com/mermaid-js/mermaid/issues/4320
          'mermaid',
        ],
      },
    },
  }),
  description: config.description,
  lang: 'zh-CN',
  markdown: {
    anchor: {
      level: [1, 2, 3, 4, 5, 6],
      slugify,
    },
    code: {
      lineNumbers: 10,
    },
    importCode: {
      handleImportPath: str => str
        .replace(/^\//, ROOT_PATH.replace(/(?:|\\|\/)$/, '/'))
        .replace(/^@\//, CURRENT_PATH.replace(/(?:|\\|\/)$/, '/')),
    },
  },
  theme,
  title: config.title,
})
