var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, "build");
var APP_DIR = path.resolve(__dirname, "src");

module.exports = {
  devtool: 'cheap-source-map',
  entry: [
    APP_DIR + "/javascripts/index.js"
  ],
  output: {
    path: BUILD_DIR,
    filename: 'bundle.js',
    publicPath: '/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      loaders: ['babel', 'react-hot-loader/webpack'],
      include: path.join(__dirname, 'src', 'javascripts')
    }]
  },
  resolve: {
    alias: {
      "@components": path.resolve(path.join(__dirname, 'src', 'javascripts', 'components')),
      "@reducers": path.resolve(path.join(__dirname, 'src', 'javascripts', 'reducers')),
      "@actions": path.resolve(path.join(__dirname, 'src', 'javascripts', 'actions')),
    }
  }
};
