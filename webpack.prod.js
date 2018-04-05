const webpack = require('webpack')
const base = require('./webpack.base.js')
const merge = require('webpack-merge')
const UglifyJSPlugin = require('uglifyjs-webpack-plugin')

module.exports = merge(base, {
  devtool: 'source-map',
  plugins: [
     new UglifyJSPlugin({
       sourceMap: true
     }),
     new webpack.DefinePlugin({
       'process.env.NODE_ENV': JSON.stringify('production')
     })
   ]
})
