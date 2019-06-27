module.exports = {
  ga: 'UA-140128665-1',
  locales: {
    '/': {
      lang: 'ja-JP',
      title: 'Yuigahama',
      description: '強力な多機能Discordボット'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Yuigahama',
      description: 'Powerful multifunction Discord bot'
    }
  },
  head: [
    ['meta', { charset: 'utf-8' }],
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }],
    ['meta', { name: 'keywords', content: 'Yuigahama,Discordbot,Discord,klasa,minecraft,bot' }],
    ['meta', { name: 'author', content: 'Project Yuigahama' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
    ['meta', { name: 'twitter:url', content: 'https://yuigahama.js.org' }],
    ['meta', { name: 'twitter:image', content: 'https://yuigahama.js.org/background.png' }],
    ['meta', { name: 'twitter:creator', content: '@InkoHX' }],
    ['meta', { name: 'theme-color', content: '#db7475' }],
    ['meta', { name: 'msapplication-TileColor', content: '#db7475' }],
    ['meta', { name: 'msapplication-TileImage', content: 'https://yuigahama.js.org/images/192.png' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['meta', { property: 'og:url', content: 'https://yuigahama.js.org' }],
    ['meta', { property: 'og:image', content: 'https://yuigahama.js.org/background.png' }],
    ['meta', { name: 'google-site-verification', content: '9j8P_Q3g9aUPR4nG8As-Qd-9bnqeHfc3IZwSpG5UcdE' }],
    ['link', { rel: 'apple-touch-icon', href: `https://yuigahama.js.org/icons/192.png` }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['link', { rel: 'icon', href: 'https://yuigahama.js.org/favicon.ico' }]
  ],
  themeConfig: {
    repo: 'project-yuigahama/docs',
    editLinks: true,
    sidebar: 'auto',
    logo: '/icon.png',
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
      hostname: 'http://yuigahama.js.org'
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
    ['@vuepress/google-analytics', {
      ga: 'UA-140128665-1'
    }],
    ['@vuepress/back-to-top', true],
    ['@vuepress/medium-zoom', true]
  ]
}