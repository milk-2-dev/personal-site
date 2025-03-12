// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/tailwind.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  modules: ['@nuxtjs/color-mode', '@vesp/nuxt-fontawesome'],
  fontawesome: {
    icons: {
      solid: ['at', 'chart-simple', 'bullhorn', 'chart-line', 'user-graduate', 'store', 'city'],
      brands: ['github', 'linkedin'],
    }
  }
})