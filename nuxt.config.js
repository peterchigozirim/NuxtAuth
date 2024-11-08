// https://nuxt.com/docs/api/configuration/nuxt-config
const sw = process.env.SW === 'true'
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
    '@vite-pwa/nuxt'
  ],

  pwa: {
    strategies: 'injectManifest' ,
    srcDir: 'service-worker',
    filename: 'sw.ts',
    registerType: 'autoUpdate',
    manifest: {
      name: 'SwiftBoxs',
      short_name: 'SwiftBoxs',
      theme_color: '#047857',
      background_color: '#047857',
      icons: [
        {
          "src": "icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "icons/manifest-icon-192.maskable.png",
          "sizes": "192x192",
          "type": "image/png",
          "purpose": "maskable"
        },
        {
          "src": "icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "any"
        },
        {
          "src": "icons/manifest-icon-512.maskable.png",
          "sizes": "512x512",
          "type": "image/png",
          "purpose": "maskable"
        }
      ],
    },
    workbox: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    injectManifest: {
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: '/login',
      navigateFallbackAllowlist: [/^\/$/],
      type: 'module',
    },
  },

  router: {
    middleware: ['auth-global-middleware'],
  },
  routeRules:{
    '/': { redirect: '/login' }, 
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
