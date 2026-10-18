import { defineConfig } from 'vitepress'

export default defineConfig({
  title: "longwei 的博客",
  description: '记录生活与想法',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '文章列表', link: '/posts/' },
          { text: '第一篇：博客开张', link: '/posts/hello' }
        ]
      }
    ],
    socialLinks: [],
    footer: {
      copyright: 'Copyright © 2026 longwei'
    }
  }
})
