const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const {
  WebpackBundleSizeAnalyzerPlugin
} = require('webpack-bundle-size-analyzer')
const withCSS = require('@zeit/next-css')
const {ANALYZE, STATS} = process.env

// withCSS allows for CSS module imports using next-css.
module.exports = withCSS({
  webpack: function(config, {isServer}) {
    if (ANALYZE) {
      config.plugins.push(
        new BundleAnalyzerPlugin({
          analyzerMode: 'server',
          analyzerPort: isServer ? 8888 : 8889,
          openAnalyzer: true
        }),
        new WebpackBundleSizeAnalyzerPlugin('stats.txt')
      )
    }
    if (STATS) {
      config.plugins.push(new WebpackBundleSizeAnalyzerPlugin('stats.txt'))
    }

    return config
  }
})
