import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "UBC Community Wiki",
  description: "Guides, tools, and info relevant to UBC",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/community-ubc/wiki' }
    ]
  }
})
