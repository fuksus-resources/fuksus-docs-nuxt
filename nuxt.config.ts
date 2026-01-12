export default defineNuxtConfig({
  site: {
    name: 'Fuksus resources',
  },
  routeRules: {
    '/': { redirect: '/docs/home' }
  }
})