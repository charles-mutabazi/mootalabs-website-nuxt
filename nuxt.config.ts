// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxt/image"],
  compatibilityDate: "2024-09-29",

  app: {
    head: {
      titleTemplate: '%s',
      title: 'Moota Labs',
      link: [
        {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
      ],
    }
  },
  ui: {
    icons: {
      dynamic: true
    },
  },
})