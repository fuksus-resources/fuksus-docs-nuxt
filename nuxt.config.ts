export default defineNuxtConfig({
  modules: ['nuxt-studio'],
  site: {
    name: 'Fuksus resources',
  },

  routeRules: {
    '/': { redirect: '/docs/home' }
  },
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'fuksus-resources',
      repo: 'fuksus-docs-nuxt',
      branch: 'main'
    }
  }
})