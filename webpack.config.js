/**
 *
 *   Created By iw.jhun
 *   On 2018-03-16 , 오전 11:13
 *
 */



const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');
const cleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry :
        {
            app : ['./src/index/index.js', './src/index/index-another.js'],
            account : ['./src/account/account.js']

        },

    output : {
        // [name]은 entry에서 선언 된 object의 key를 파일명으로 하겠다는 것.
        filename : '[name].js',
        path : path.resolve(__dirname,'dist/js'),
        // publicPath 는 web상에서 배포될 때의 경로를 뜻 한다.
        // publicPath : '/'
    },
    plugins : [
        // plugin 에 대한 api
        // https://github.com/jantimon/html-webpack-plugin#configuration
      new htmlWebpackPlugin({
          template : path.join(__dirname, 'template/index.html'),
          // chunks 를 통해서 template에 포함할 entry를 선택할 수 있다, 또한 head에 css는 무엇을 넣을지를 선택할 수 있다, wow
          chunks : ['app'],
          // inject 는 tempalte의 body 아래에 entry 를 삽입할지에 대한 여부이다.
          inject : true,
          hash : true,
          filename : path.join(__dirname, 'dist/index.html')
      }),
        new htmlWebpackPlugin({
            template : path.join(__dirname, 'template/account.html'),
            chunks : ['account'],
            inject : true,
            title : 'account template',
            filename : path.join(__dirname,'dist/html/account/account.html')
        }),
        // __dirname 은 현재 작업중인 path 를 return 해줌
        new cleanWebpackPlugin(path.join(__dirname,'dist'))
    ]
}
