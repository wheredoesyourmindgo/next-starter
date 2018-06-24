const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const withCSS = require('@zeit/next-css')
const {ANALYZE} = process.env

// withCSS allows for CSS module imports using next-css.
module.exports = withCSS({
  webpack: function(config) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: 8888,
          openAnalyzer: true
        })
      )
    }

    return config
  }
})
