module.exports = {
  ga: 'UA-140128665-1',
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'Yuigahama,Discordbot,Discord,klasa,minecraft,bot' }],
    ['meta', { name: 'author', content: 'Project Yuigahama' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://yuigahama.js.org' }],
    ['meta', { name: 'twitter:image', content: 'https://yuigahama.js.org/wallpaper.webp' }],
    ['meta', { name: 'twitter:creator', content: '@InkoHX' }],
    ['meta', { name: 'msapplication-TileColor', content: '#db7475' }],
    ['meta', { name: 'theme-color', content: '#db7475' }],
    ['meta', { property: 'og:title', content: 'Yuigahama - Powerful multifunction discord bot' }],
    ['meta', { property: 'og:site_name', content: 'Yuigahama - Powerful multifunction discord bot' }],
    ['meta', { property: 'og:url', content: 'https://yuigahama.js.org' }],
    ['meta', { property: 'og:image', content: 'https://yuigahama.js.org/wallpaper.webp' }],
    ['meta', { property: 'og:type', content: 'site' }],
    ['meta', { name: 'google-site-verification', content: '9j8P_Q3g9aUPR4nG8As-Qd-9bnqeHfc3IZwSpG5UcdE' }],
    ['link', { rel: 'icon', href: './icon.jpg' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }]
  ],
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Yuigahama',
      description: '強力な多機能Discord bot 「Yuigahama」 のドキュメントサイトです。'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Yuigahama',
      description: 'Powerful multifunction Discord bot "Yuigahama" document site.'
    }
  },
  themeConfig: {
    repo: 'project-yuigahama/docs',
    editLinks: true,
    sidebar: 'auto',
    locales: {
      '/': {
        label: '日本語',
        selectText: '言語',
        editLinkText: 'GitHubでこのページを編集する。',
        lastUpdated: '最終更新日',
        nav: require('./lang/ja-JP').getNavbar()
      },
      '/en/': {
        label: 'English',
        selectText: 'Languages',
        editLinkText: 'Edit this page on GitHub',
        lastUpdated: 'Last Updated',
        nav: require('./lang/en-US').getNavbar()
      }
    }
  },
  plugins: [
    ['sitemap', {
      hostname: 'https://yuigahama.js.org'
    }],
    ['@vuepress/pwa', {
      serviceWorker: true,
      updatePopup: {
        '/': {
          message: '新しいコンテンツがあります。',
          buttonText: '更新する'
        },
        '/en': {
          message: 'New content is available.',
          buttonText: 'Refresh'
        }
      }
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ]
}