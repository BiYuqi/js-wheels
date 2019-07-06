const path = require('path')
const merge = require('webpack-merge')
const UglifyJsPlugin = require('uglifyjs-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const base = require('./webpack.base.js')

module.exports = merge(base, {
  mode: "production",
  output: {
    filename: 'js-wheels.min.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'JsWheels',
    libraryTarget: 'umd'
  },
  // optimization: {
  //   splitChunks: {},
  //   minimizer: [
  //     new UglifyJsPlugin({
  //       uglifyOptions: {
  //         cache: true,
  //         parallel: true,
  //         warnings: false,
  //         comments: false,
  //         compress: {
  //           warnings: false,
  //           drop_console: true
  //         }
  //       }
  //     })
  //   ]
  // },
  plugins: [
     new CleanWebpackPlugin(['dist'])
   ]
})
