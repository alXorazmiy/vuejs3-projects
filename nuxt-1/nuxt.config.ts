export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",

  future : {
      compatibilityVersion : 4,
  },

  experimental: {
      scanPageMeta: 'after-resolve',
      sharedPrerenderData: false,
      compileTemplate: true,
      resetAsyncDataToUndefined: true,
      templateUtils: true,
      relativeWatchPaths: true,
      normalizeComponentNames: false,
      spaLoadingTemplateLocation: 'within',
      defaults: {
          useAsyncData: {
          deep: true
          }
      }
  },

  features: {
      inlineStyles: true
  },

//   image: {
//     domains : ["https://cdn.dummyjson.com"]
//   },

  unhead: {
      renderSSRHeadOptions: {
          omitLineBreaks: false
      }
  },

  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxt/icon',
    '@nuxt/image'
  ],
  googleFonts : {
    families : {
        Montserrat : true,
    }
  }
});