import { sidebar } from 'vuepress-theme-hope'

export default sidebar({
  '/': [
    '',
    {
      children: 'structure',
      collapsible: true,
      icon: 'fluent:document-bullet-list-24-filled',
      prefix: 'nuxt/',
      text: '1. Nuxt 笔记',
    },
  ],
})
