const Mode = require('frontmatter-markdown-loader/mode');

module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: `
          @import "@/styles/setup/_variables.scss";
          @import "@/styles/setup/_mixins.scss";
        `,
      },
    },
  },
  chainWebpack: config => {
    config.module
      .rule('markdown')
      .test(/\.md$/)
      .use('frontmatter-markdown-loader')
      .loader('frontmatter-markdown-loader')
      .tap(options => {
        return {
          mode: [Mode.VUE_COMPONENT, Mode.BODY],
        };
      });
  },
  publicPath: process.env.NODE_ENV === 'production' ? '/' : '/',
};
