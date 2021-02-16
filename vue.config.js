module.exports = {
  devServer: {
    port: 5000
  },
  productionSourceMap: false,
  chainWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.module.rule('less').oneOf('vue-modules').use('css-loader').tap(options => {
        options.modules.localIdentName = '_[hash:base64:8]'
        return options
      })
    }
  }
}
