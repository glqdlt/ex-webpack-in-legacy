/**
 *
 *   Created By iw.jhun
 *   On 2018-03-16 , 오전 11:13
 *
 */



const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    output : {
        filename : 'bundle.js',
        path : path.resolve(__dirname,'dist')
    },
    plugins : [
      new htmlWebpackPlugin({
          template : path.join(__dirname, 'template/index.html'),
          inject : true,
          filename : path.join(__dirname, 'dist/index.html')
      })
    ]
}
