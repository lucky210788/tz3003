const webpack                 = require('webpack');
const path                    = require('path');
const ExtractTextPlugin       = require("extract-text-webpack-plugin");
const OptimizeCssAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const CopyPlugin              = require('copy-webpack-plugin');

function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  entry: {
    vendor: [
      resolve('src/js/shared/jquery.js')
    ],
    bundle: resolve('src/js/config.js')
  },
  output: {
    filename: '[name].js',
    path: resolve('../public/')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      { test: /\.css$/, loader: 'style-loader!css' },
			{
        test: /\.(scss|sass)$/,
        use: ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { minimize: true, sourceMap: true } },
            { loader: 'postcss-loader', options: { sourceMap: true } },
            { loader: 'sass-loader', options: { sourceMap: true } }
          ]
        })
      },
      { test: /\.(eot|svg|ttf|woff|woff2)$/, loader: 'file-loader?name=fonts/[name].[ext]' },
      { test: /\.(jpe?g|png)$/i, loaders: 'file-loader?name=images/[name].[ext]' },
      { test: /jquery-mousewheel/, loader: "imports-loader?define=>false&this=>window" },
      { test: /malihu-custom-scrollbar-plugin/, loader: "imports-loader?define=>false&this=>window" },
      {
        test: /jquery.js$/,
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
			$: "jquery",
      jQuery: 'jquery'
      // Util: 'exports-loader?Util!bootstrap/js/dist/util'
		}),
    new ExtractTextPlugin({
      filename: "bundle.css"
    }),
    new CopyPlugin([
      { from: 'images', to: '../public/images' },
    ]),
  ],
  devServer: {
		host: 'localhost',
		port: '1337'
	},
  // devtool: 'source-map'
}
