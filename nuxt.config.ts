// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: false },
  modules: [
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxtjs/i18n',
    '@nuxtjs/google-fonts',
    '@vee-validate/nuxt',
    'nuxt-swiper',
    // '@nuxtjs/html-validator',
    'nuxt-aos',
    "@pinia/nuxt"
  ],

  plugins: [
  ],

  i18n: {
    // lazy: true,
    langDir: "locales",
    strategy: "prefix_and_default",
    detectBrowserLanguage: false,
    locales: [
      {
        code: "en",
        iso: "en",
        dir: "ltr",
        name: "english",
        file: "en.json",
      },
      {
        code: "ar",
        iso: "ar",
        dir: "rtl",
        name: "عربي",
        file: "ar.json",
      },
    ],
    defaultLocale: "ar",
  },

  app: {
    head: {
      title:"dsdsd",
      htmlAttrs: {
        lang: "ar",
        dir: "rtl",
      },
      link: [
        // { rel: "icon", type: "image/svg", href: "/favicon.svg" },
      ],
      script: [
        {
          src:'/js/bootstrap.bundle.min.js'
        }

      ],
    },
  },
  runtimeConfig: {
    // Public keys that are exposed to the client
    apiKey: process.env.NUXT_API_KEY,

    // Public keys that are exposed to the client
    public: {
      apiUrl: process.env.NUXT_API_URL,
    },
  },
  css: [
    'bootstrap/dist/css/bootstrap.min.css',
    '~/assets/css/common.css',
    '~/assets/css/general.scss',
    '~/assets/css/style.css',
    '~/assets/css/responsive.css',
  ]
})