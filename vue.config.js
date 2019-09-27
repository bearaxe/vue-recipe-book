module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: {
      sass: {
        data: `
          @import '@/scss/abstract/_variables.scss';
        `,
      },
    },
  },
};
