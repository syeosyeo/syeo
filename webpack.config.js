var path = require("path");
var BundleTracker = require('webpack-bundle-tracker');

module.exports = {
  context: __dirname,

  entry: {
    main: './react/index.js',
  },

  output: {
      path: path.resolve('./core/static/core/js/bundle'),
      filename: "[name]-[chunkhash].js",
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },

  plugins: [
    new BundleTracker({filename: './webpack-stats.json'}),
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
      {
          test: /\.scss$/,
          use: [
              'style-loader', // or MiniCssExtractPlugin.loader
              { loader: 'css-loader', options: { sourceMap: true, importLoaders: 1 } },
              { loader: 'sass-loader', options: { sourceMap: true } },
          ],
      },
     ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx']
  }

};
