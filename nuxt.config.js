// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
  ],
  plugins: [
    { src: '~/plugins/toast', ssr: false }
  ],
  router: {
    middleware: ['auth', 'guest']	
  }
})
