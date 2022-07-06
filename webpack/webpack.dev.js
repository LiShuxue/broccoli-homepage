const webpackMerge = require('webpack-merge');
const baseConfig = require('./webpack.base.js');

const config = {
  mode: 'development',
  cache: {
    type: 'memory', // 使用内存缓存
  },
  devServer: {
    port: '8081',
    open: true,
  },
};

const mergedConfig = webpackMerge.merge(baseConfig, config);
module.exports = mergedConfig;
