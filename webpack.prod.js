const webpack = require('webpack')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: "production",
  optimization: {
    splitChunks: {},
    minimizer: [
      new UglifyJsPlugin({
        uglifyOptions: {
          cache: true,
          parallel: true,
          warnings: false,
          comments: false,
          compress: {
            warnings: false,
            drop_console: true
          }
        }
      })
    ]
  },
  plugins: [
     new CleanWebpackPlugin(['dist'])
   ]
})
