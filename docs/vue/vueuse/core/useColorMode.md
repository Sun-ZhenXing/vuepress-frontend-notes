# [useColorMode](https://vueuse.org/core/useColorMode/)

[[TOC]]

## 1. 介绍

响应式设置颜色模式。

## 2. Nuxt 示例

```ts
// plugins/darkTheme.ts
import { storeToRefs } from 'pinia'
// import type { ConfigProviderTheme } from 'vant'

type ConfigProviderTheme = 'light' | 'dark'

export default defineNuxtPlugin((_) => {
  // 响应式获取系统偏好
  const colorMode = useColorMode()
  const appStore = useAppStore()

  // 响应式获取用户偏好设置
  const { isDarkTheme, isUsingSystemDarkMode } = storeToRefs(appStore)
  return {
    provide: {
      darkTheme: computed<ConfigProviderTheme>(() => {
        if (isUsingSystemDarkMode.value) {
          // 如果用户设置了跟随系统，则返回系统偏好
          // 如果没有在预设中，则默认为浅色
          if (['dark', 'light'].includes(colorMode.value))
            return colorMode.value as ConfigProviderTheme
          else
            return 'light'
        }
        else {
          // 否则返回用户设置的偏好
          return isDarkTheme.value ? 'dark' : 'light'
        }
      }),
    },
  }
})
```
