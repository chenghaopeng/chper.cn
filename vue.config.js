module.exports = {
  devServer: {
    port: 5000
  },
  chainWebpack: config => {
    config.module.rule('less').oneOf('vue-modules').use('css-loader').tap(options => {
      if (process.env.NODE_ENV === 'production') {
        options.modules.localIdentName = '_[hash:base64:8]'
      }
      return options
    })
  }
}
