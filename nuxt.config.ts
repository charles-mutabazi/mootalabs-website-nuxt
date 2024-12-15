// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", 'nuxt-vuefire'],
  compatibilityDate: "2024-09-29",

  vuefire: {
    config: {
      apiKey: "AIzaSyAbKaWSMia6zNA1-wO1rndCacg5ZaOGZiM",
      authDomain: "moota-labs.firebaseapp.com",
      projectId: "moota-labs",
      storageBucket: "moota-labs.firebasestorage.app",
      messagingSenderId: "689168197483",
      appId: "1:689168197483:web:c9702786adbf65ce324e2e",
      measurementId: "G-90FRYLM7M9",
    }
  },

  app: {
    head: {
      titleTemplate: '%s',
      title: 'Moota Labs',
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
    }
  },
})