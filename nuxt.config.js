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
    'dayjs-nuxt'
  ],
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
  router: {
    middleware: ['auth', 'guest', 'watchUser']	
  },
  app: {
    head: {
      bodyAttrs: {
        class: 'dark:bg-black bg-emerald-50 dark:text-white scrollbar scrollbar-thin',
      },
    },
  },
  ssr: false,
})
