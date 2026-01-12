export default defineNuxtConfig({
  modules: ['nuxt-studio'],
  site: {
    name: 'Fuksus resources',
  },
  studio: {
    repository: {
      provider: 'github', // 'github' or 'gitlab'
      owner: 'fuksus-resources',
      repo: 'fuksus-docs-nuxt',
      branch: 'main'
    }
  },
  nitro: {
    prerender: {
      // Pre-render the homepage
      routes: ['/'],
      // Then crawl all the links on the page
      crawlLinks: true
    }
  }
})