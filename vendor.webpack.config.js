const webpack = require('webpack');

module.exports = {
  entry: {
    react: [
      'react',
      'react-dom',
      'react-redux',
      'react-router',
      'redux',
      'redux-immutable',
      'redux-saga',
    ],
    utils: [
      'immutable',
    ],
  },

  output: {
    filename: '[name].bundle.js',
    path: './build/dist/',
    library: '[name]_lib',
  },

  plugins: [
    new webpack.DllPlugin({
      path: './temp/[name]-manifest.json',
      name: '[name]_lib',
    }),
  ],
};
