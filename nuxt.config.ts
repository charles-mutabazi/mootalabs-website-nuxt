// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image", 'nuxt-vuefire'],
  compatibilityDate: "2024-09-29",

  vuefire: {
    config: {
      apiKey: process.env.VITE_FIREBASE_API_KEY,
      authDomain: "moota-labs.firebaseapp.com",
      projectId: "moota-labs",
      storageBucket: "moota-labs.firebasestorage.app",
      messagingSenderId: process.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: process.env.VITE_FIREBASE_APP_ID,
      measurementId: process.env.VITE_FIREBASE_MEASUREMENT_ID,
    }
  },

  // Required for Firebase static hosting
  ssr: true,
  nitro: {
    firebase: {
      gen: 2
    },
    prerender: {
      crawlLinks: true,
      routes: ['/']
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