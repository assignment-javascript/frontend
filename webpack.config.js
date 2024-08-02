const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // 플러그인 가져오기

module.exports = {
  entry: {
    index: './src/index.js',
    report: './src/report.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      template: './src/report.html',
      filename: 'report.html',
      chunks: ['report'],
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: 'src/style', to: 'style' } // 'src/style' 폴더의 파일들을 'dist/style'로 복사
      ],
    }),
  ],
  devServer: {
    port: 3000,
    hot: false,
    compress: true,
    historyApiFallback: true,
    open: true,
  },
};
