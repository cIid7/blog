import { defineConfig } from 'vitepress'

export default defineConfig({
  lang: 'zh-CN',
  title: "longwei 的博客",
  description: '记录生活与想法',
  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/logo.svg' }]
  ],
  themeConfig: {
    logo: '/logo.svg',
    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' }
    ],
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '文章列表', link: '/posts/' },
          { text: '當下即是全部', link: '/posts/present-moment' },
          { text: '第一篇：博客开张', link: '/posts/hello' }
        ]
      }
    ],
    socialLinks: [],
    lastUpdated: {
      text: '最后更新于',
      formatOptions: {
        dateStyle: 'medium'
      }
    },
    footer: {
      message: '用 VitePress 构建 · 部署于 GitHub Pages',
      copyright: 'Copyright © 2026 longwei'
    }
  }
})
