// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxt/ui", "@nuxtjs/supabase", "@nuxt/fonts"],
  supabase: {
    redirectOptions: {
      login: '/login',
      callback: '/confirm',
      include: undefined,
      exclude: ['/index'],
      cookieRedirect: false,
    },
  },
  fonts: {
    families: [
      { name: 'Montserrat', provider: 'google', global: true },
    ]
  }
})