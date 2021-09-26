// prettier-ignore
export default {
  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Target                                                                                                                 |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  target: 'server',

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Global Head                                                                                                            |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  head: {
    title: process.env.SEO_TITLE || 'Bored Ape Tron Club - Rarity Tool',

    // HTML meta tags
    meta: [
			{ charset: 'utf-8'                                                                                                       },
			{ httpEquiv: 'X-UA-Compatible',    content: 'IE=edge'                                                                    },
			{ name: 'viewport',                content: 'width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no' },
			{ name: 'format-detection',        content: 'telephone=no'                                                               },
			{ name: 'theme-color',             content: '#ffffff'                                                                    },
			{ name: 'msapplication-TileColor', content: '#ffffff'                                                                    },
			{ name: 'msapplication-TileImage', content: '/icon.png'                                                                  },

			/**
			 * |--------------------------------------------------------------------------------------------------------------------|
			 * | SEO Tags                                                                                                           |
       * |--------------------------------------------------------------------------------------------------------------------|
       * 
			 */
			{ name: 'title',                   content: process.env.SEO_TITLE       },
			{ name: 'description',             content: process.env.SEO_DESCRIPTION },

			// Open Graph / Facebook -----------------------------------------------------------------------------------------------|
			{ property: 'og:type',             content: 'website'                   },
			{ property: 'og:url',              content: process.env.SEO_PERMALINK   },
			{ property: 'og:title',            content: process.env.SEO_TITLE       },
			{ property: 'og:description',      content: process.env.SEO_DESCRIPTION },
			{ property: 'og:image',            content: process.env.SEO_PREVIEW     },

			// Twitter -------------------------------------------------------------------------------------------------------------|
			{ property: 'twitter:card',        content: 'summary_large_image'       },
			{ property: 'twitter:url',         content: process.env.SEO_PERMALINK   },
			{ property: 'twitter:title',       content: process.env.SEO_TITLE       },
			{ property: 'twitter:description', content: process.env.SEO_DESCRIPTION },
			{ property: 'twitter:image',       content: process.env.SEO_PREVIEW     },
		],

    // HTML link tags
    link: [
      // Favicon
      // { rel: 'icon', type: 'image/png',    href: '/apexgo-nft-rarity-tool.png'   },

      // Favicon - Apple -----------------------------------------------------------------------------------------------------|
      { rel: 'apple-touch-icon', sizes: '57x57',   href: '/favicon/apple-icon-57x57.png'   },
      { rel: 'apple-touch-icon', sizes: '60x60',   href: '/favicon/apple-icon-60x60.png'   },
      { rel: 'apple-touch-icon', sizes: '72x72',   href: '/favicon/apple-icon-72x72.png'   },
      { rel: 'apple-touch-icon', sizes: '76x76',   href: '/favicon/apple-icon-76x76.png'   },
      { rel: 'apple-touch-icon', sizes: '114x114', href: '/favicon/apple-icon-114x114.png' },
      { rel: 'apple-touch-icon', sizes: '120x120', href: '/favicon/apple-icon-120x120.png' },
      { rel: 'apple-touch-icon', sizes: '144x144', href: '/favicon/apple-icon-144x144.png' },
      { rel: 'apple-touch-icon', sizes: '152x152', href: '/favicon/apple-icon-152x152.png' },
      { rel: 'apple-touch-icon', sizes: '180x180', href: '/favicon/apple-icon-180x180.png' },

      // Favicon - Manifest --------------------------------------------------------------------------------------------------|
      { rel: 'manifest', href: '/manifest.json' },

      // Remix Icons ---------------------------------------------------------------------------------------------------------|
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css' },
    ]
  },

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Global CSS                                                                                                             |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  css: [
    '~/assets/styles/index.scss',
  ],

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Vue Plugins                                                                                                            |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  plugins: [
    '~/plugins/vue-select',
    '~/plugins/vue-clipboard',
  ],

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Auto Import Components                                                                                                 |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  components: {
    dirs: [
      '~/components',
      '~/components/atoms',
      '~/components/molecules',
      '~/components/organisms',
    ],
  },

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Nuxt Modules for Development                                                                                           |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  buildModules: [
    // TypeScript
    '@nuxt/typescript-build',

    // Windi
    'nuxt-windicss',

    // Composition API
    '@nuxtjs/composition-api/module'
  ],

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Nuxt Modules                                                                                                           |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  modules: [
    // Axios - HTTP requests
    '@nuxtjs/axios',

    // Progressive web app support
    '@nuxtjs/pwa',
  ],

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | PWA Config                                                                                                             |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  build: {
    extend(config: any) {
      config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
      })
    }
  }
}
