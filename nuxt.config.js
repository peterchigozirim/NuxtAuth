// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode'
  ],
  colorMode: {
    classSuffix: ''
  },
  plugins: [
    { src: '~/plugins/toast', ssr: false }
  ],
  router: {
    middleware: ['auth', 'guest']	
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'dark:bg-black dark:text-white',
      },
    },
  },
})
