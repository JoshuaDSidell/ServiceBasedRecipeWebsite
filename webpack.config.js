const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: ['./src/js/controller.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'build/controller.bundle.js'
    },
    devServer: {
      contentBase: './dist'
  },
    module : {
        rules: [{
          // A regex that looks at all Javascript files
          test: /\.js?$/,
          exclude : /node_modules/,
          loader: 'babel-loader',
          //this is where we define our presets
          query: {
            presets:['@babel/preset-env']
          }
        }]
      }
};