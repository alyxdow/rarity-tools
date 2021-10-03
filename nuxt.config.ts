// prettier-ignore
export default {
  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Target                                                                                                                 |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  target: 'static',

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
      // Manifest ------------------------------------------------------------------------------------------------------------|
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

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Webpack Config                                                                                                         |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  build: {
    extend(config: any) {
      config.module.rules.push({
          test: /\.mjs$/,
          include: /node_modules/,
          type: 'javascript/auto'
      })
    }
  },

  /**
   * |------------------------------------------------------------------------------------------------------------------------|
   * | Env                                                                                                                    |
   * |------------------------------------------------------------------------------------------------------------------------|
   */
  env: {
    baseUrl     : process.env.SEO_PERMALINK || 'https://apexgo.io',
    devUsername : process.env.DEV_USERNAME  || null               ,
  },
}
