const path = require('path')
const resolve = (dir) => {
  return path.join(__dirname, dir)
}

const prod = process.env.NODE_ENV === 'production'

module.exports = {
  entry: {
    main: prod ? resolve('./src/index.js') : resolve('./src/index.dev.js')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      }
    ]
  }
}
