// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
// 路径
const path = require('path')
// 外部插件 -清除功能
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

module.exports = {
  mode:'development',

  entry:  './src/main.js',
  // entry: {
  //   main: './src/main.js',
  //   app1: './src/app1.js'
  // },
  // entry: ['./src/main.js', './src/app1.js'],

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    // filename: '[name].[hash:6].js',
    // filename: '[name].[chunkhash:6].js',
  },
  
  // 插件
  plugins: [ new CleanWebpackPlugin() ],
  
  // 处理不认识的模块
  module:{
    // 规则
    rules: [
      {
        test:/\.css$/,
        // 模块处理
        use: ["style-loader", "css-loader"]
      }
    ]
  }
};