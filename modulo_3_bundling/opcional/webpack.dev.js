const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const Dotenv = require('dotenv-webpack');
const path = require('path');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'source-map',
  devServer: {
    static: path.join(__dirname, './src'),
    port: 3000
  },
  plugins: [
    new Dotenv ({
      path: './dev.env'
    })
  ]  
});