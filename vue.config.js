module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? '/ux-rocks/' : '/',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "~@/styles/_variables.scss";`,
      },
    },
  },
}
