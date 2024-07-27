module.exports = {
  lintOnSave: false,
  css: {
    loaderOptions: { 
      postcss: { 
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({ rootValue: 37.5 , propList: ['*']}),
           ],
        }
      }, 
    },
  },
}