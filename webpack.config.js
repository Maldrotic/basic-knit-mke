const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const publicPath = path.join(__dirname, 'public');
const distPath = path.join(publicPath, 'dist');

module.exports = (env) => {
  const isProduction = env === 'production';
  const CSSExtract = new ExtractTextPlugin('styles.css');
  return {
    entry: './src/app.js',
    output: {
      path: distPath,
      filename: 'bundle.js'
    },
    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.js$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              {
                loader: 'css-loader',
                options: {
                  sourceMap: true
                }
              },
              {
                loader: 'sass-loader',
                options: {
                  sourceMap: true
                }
              }
            ]
          })
        }
      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    devServer: {
      contentBase: publicPath,
      publicPath: distPath,
      historyApiFallback: true
    },
    plugins: [
      CSSExtract
    ]
  };
};