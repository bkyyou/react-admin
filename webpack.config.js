
const path  = require('path');
const resolve = (filePath) => path.resolve(__dirname, filePath);
console.log('webpack.config.js');
module.exports = {
  resolve: {
    // extensions: ['.ts', '.tsx', '.js', '.json'],
    alias: {
      '@': resolve('src/'),
      // '@/router': resolve('client/router'),
      // '@/redux': resolve('client/redux'),
      // '@/pages': resolve('client/pages'),
      // '@/utils': resolve('client/utils'),
      // '@/assets': resolve('client/assets'),
      // '@/components': resolve('client/components'),
      // '@/common': resolve('client/common'),
      // '@/client': resolve('client'),
    },
  },
}