var path = require('path');
const webpack = require('webpack');
  var LiveReloadPlugin = require('webpack-livereload-plugin');

module.exports = {
  entry: ['./client/src/index.js'],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'client/src/public/dist')
  },
  context: __dirname,
  devtool: 'source-map',
  resolve: {
  extensions: ['.js', '.jsx', '.json', '*'],
  alias: {
      'fs': 'browserfs/dist/shims/fs.js',
      'buffer': 'browserfs/dist/shims/buffer.js',
      'path': 'browserfs/dist/shims/path.js',
      'processGlobal': 'browserfs/dist/shims/process.js',
      'bufferGlobal': 'browserfs/dist/shims/bufferGlobal.js',
      'bfsGlobal': require.resolve('browserfs')
    }
  },
  module: {
    rules: [{
      test: /\.jsx?$/,
      exclude: /(node_modules|bower_components)/,
      loader: 'babel-loader',
      options: {
        presets: ['react', 'es2015', 'stage-1']
      }
    },
    {
      test: /\.scss$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }
  ]
  },
  plugins: [
    new LiveReloadPlugin({appendScriptTag: true}),
    new webpack.ProvidePlugin({ BrowserFS: 'bfsGlobal', process: 'processGlobal', Buffer: 'bufferGlobal' })    
  ],
  node: {
    process: false,
    Buffer: false
  }
};
