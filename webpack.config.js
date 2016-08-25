const webpack = require('webpack');
const REACT_MANIFEST = require('./temp/react-manifest.json');
const UTILS_MANIFEST = require('./temp/utils-manifest.json');

const config = {
  devtool: 'eval',
  entry: {
    index: ['babel-polyfill', './app/main.jsx'],
  },
  output: {
    publicPath: '/dist',
    path: './build/dist',
    filename: '[name].js',
    sourceMapFilename: '[file].map',
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.less', '.css'],
  },
  module: {
    loaders: [{
      test: /\.jsx?$/,
      exclude: /node_modules/,
      loader: 'babel',
      query: {
        presets: ['es2015', 'react'],
        plugins: [
          'transform-decorators-legacy', // TODO
          'transform-runtime',
        ],
        cacheDirectory: true,
      },
    }, {
      test: /\.css$/,
      loader: 'style!css',
    }, {
      test: /\.less$/,
      loader: 'style!css!less',
    }, {
      test: /\.(png|jpg|svg|woff|woff2|eot|ttf)$/,
      loader: 'file',
    }],
  },
  plugins: [
    new webpack.DllReferencePlugin({
      context: '.',
      manifest: REACT_MANIFEST,
    }),

    new webpack.DllReferencePlugin({
      context: '.',
      manifest: UTILS_MANIFEST,
    }),

    new webpack.HotModuleReplacementPlugin(),
  ],
};

module.exports = config;
