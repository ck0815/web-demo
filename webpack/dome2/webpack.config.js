// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
// 路径
const path = require('path')

// 打包配置对象
module.exports = {
  mode:'development',

  entry:  './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  
  // 插件
  plugins: [],
  
  // 处理不认识的模块
  module:{
    // 规则
    rules: [
      {
        test:/\.css$/,
        // 模块处理
        use: ["style-loader", "css-loader"]
      },
      {
        test:/\.less$/,
        // 模块处理
        use: ["style-loader", "css-loader", "less-loader"]
      }
    ]
  }
};