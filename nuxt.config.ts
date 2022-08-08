import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: 'public/favicon.ico' }],
    },
  },
  modules: ['@nuxtjs/tailwindcss']
})
