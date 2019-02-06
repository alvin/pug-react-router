const path = require('path');
const webpack = require('webpack');
const HTMLWebpackPlugin = require('html-webpack-plugin');

const dev = process.env.NODE_ENV !== 'production';

const HTMLWebpackPluginConfig = new HTMLWebpackPlugin({
  template: path.join(__dirname, '/src/index.html'),
  filename: 'index.html',
  inject: 'body',
});

const DefinePluginConfig = new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify('production'),
});

module.exports = {
  devServer: {
    host: 'localhost',
    port: '3000',
    hot: true,
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
    historyApiFallback: true
    /*
    proxy: {
      '/api': {
        target: `${process.env.API_URL}/api`,
        pathRewrite: {'^/api' : ''},
        secure: false,
        changeOrigin: true,
      },      
      '/o': {
        target: `${process.env.API_URL}/o`,
        pathRewrite: {'^/o' : ''},
        secure: false,
        changeOrigin: true,
      }
    }
    */

  },
  entry: ['react-hot-loader/patch', path.join(__dirname, '/src/index.js')],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.less$/,
        loader: 'style-loader!css-loader!less-loader',
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
      test: /.woff|.woff2|.eot|.ttf/,
      use: 'url-loader?prefix=font/&limit=10000'
      },
      {
        test: /.svg$/,
        use: ['@svgr/webpack'],
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  output: {
    filename: 'index.js',
    path: path.join(__dirname, '/build'),
  },
  mode: dev ? 'development' : 'production',
  plugins: dev
    ? [
      HTMLWebpackPluginConfig,
      new webpack.HotModuleReplacementPlugin(),
      new webpack.ProvidePlugin({
        'React':     'react'
      })
    ]
    : [HTMLWebpackPluginConfig, 
      DefinePluginConfig,
      new webpack.ProvidePlugin({
        'React':     'react'
      })
    ],
};