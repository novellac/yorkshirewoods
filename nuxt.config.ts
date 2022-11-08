import { defineNuxtConfig } from 'nuxt'

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/content'
  ],
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.scss'
  },
  googleFonts: {
    families: {
      Cardo: true,
      'Josefin Sans': [300, 400]
    },
    display: 'swap',
    prefetch: true,
    preconnect: true,
    preload: true
  },
  app: {
    head: {
      link: [{ rel: 'icon', type: 'image/x-icon', href: './favicon.ico' }],
    },
  },

})
