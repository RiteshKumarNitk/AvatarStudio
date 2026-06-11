export default defineNuxtConfig({
  compatibilityDate: '2026-06-11',
  future: {
    compatibilityVersion: 4,
  },

  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxtjs/color-mode',
    '@tresjs/nuxt',
  ],

  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'dark',
  },

  tres: {
    devtools: true,
    glsl: false,
  },

  nitro: {
    routeRules: {
      '/api/**': { cors: true },
    },
  },

  app: {
    head: {
      title: 'Avatar Studio',
      meta: [
        { name: 'description', content: 'Create and customize your 3D avatar in the browser' },
      ],
    },
  },
})
