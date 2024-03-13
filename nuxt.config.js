// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@pinia/nuxt',
    '@nuxt/devtools',
    '@pinia-plugin-persistedstate/nuxt',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@vee-validate/nuxt',
    'dayjs-nuxt',
    '@vueuse/nuxt',
    // '@vite-pwa/nuxt'
  ],

  router: {
    middleware: ['auth-global-middleware'],
  },
  piniaPersistedstate: {
    cookieOptions: {
      sameSite: 'lax',
    },
  },
  veeValidate: {
    // disable or enable auto imports
    autoImports: true,
    // Use different names for components
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
      defineRule: 'defineRule',
    },
  },
  colorMode: {
    classSuffix: ''
  },
  plugins: [
    { src: '~/plugins/toast', ssr: false },
    { src: '~/plugins/vee-validate' },
    { src: '~/plugins/loadUser' }
  ],
  runtimeConfig: {
    // Keys within public, will be also exposed to the client-side
    public: {
      apiURL: process.env.API_URL,
      localURL: process.env.LOCAL_API_URL,
    }
  },
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      link: [
        { rel: 'icon', href: '/images/logo.png' }
      ],
      bodyAttrs: {
        class: 'dark:bg-black bg-emerald-50 dark:text-white scrollbar scrollbar-thin',
      },
    },
  },
  ssr: false,
})
