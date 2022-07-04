const path = require('path');
const ESLintPlugin = require('eslint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  // 入口文件
  entry: {
    main: './src/index',
  },
  // 源码
  devtool: 'source-map',
  // 打包输出
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: isDev ? 'js/[name].bundle.js' : 'js/[name].[contenthash:8].bundle.js', // 主chunk的名字
    chunkFilename: isDev ? 'js/[name].chunk.js' : 'js/[name].[contenthash:8].chunk.js', // 子chunk的名字
    publicPath: '/',
    clean: true, // webpack5自带清除
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader', // 编译js ts
            options: {
              cacheDirectory: true,
            },
          },
        ],
      },
      {
        test: /\.(png|jpg|gif|jpeg|webp|svg)$/,
        type: 'asset/resource', // webpack5自带，取代url-loader
        generator: {
          filename: 'assets/images/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource', // webpack5自带，取代url-loader
        generator: {
          filename: 'assets/fonts/[name].[hash][ext][query]',
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'], // 处理css
      },
      {
        test: /\.less$/,
        exclude: /node_modules/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader', 'less-loader'], // 处理less
      },
    ],
  },
  plugins: [
    new ESLintPlugin(), // 运行时的eslint校验
    new HtmlWebpackPlugin({ template: './public/index.html' }), // 打包好的js插入html
    new MiniCssExtractPlugin({
      filename: isDev ? 'css/[name].css' : 'css/[name].[contenthash:8].css', // 主css名字
      chunkFilename: isDev ? 'css/[name].chunk.css' : 'css/[name].[contenthash:8].chunk.css', // 子css名字
    }),
  ],
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.json'],
    alias: {
      src: path.resolve(__dirname, '../src'),
      components: path.resolve(__dirname, '../src/components'),
    },
  },
};
