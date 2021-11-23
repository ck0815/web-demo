// __dirname 是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
// 路径
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')

// 打包配置对象
module.exports = {
  mode:'development',

  devtool:'source-map',

  entry:  './src/index.js',

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  
  // 插件
  plugins: [
    // 清除文件
    new CleanWebpackPlugin(),
    // 编译html
    new htmlWebpackPlugin({
      // 标题
      title: '首页',
      // 选择模板
      template: './src/index.html',
      // 文件名称
      filename: 'index.html'
    })  
  ],
  
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
        use: [
            "style-loader", 
            {
              loader:"css-loader",
              options: {
                modules: true
              }
            },
            // 在css之前 插件机制
            {
              loader:"postcss-loader"
            },
            "less-loader"
        ]
      },
      // {
      //   test:/\.(png|jpe?g|gif)$/,
      //   // 模块处理
      //   use: [
      //     {
      //       loader: 'file-loader',
      //       options: {
      //         // 支持占位符
      //         // ext 格式
      //         name: '[name]_[hash:6].[ext]',
      //         // 输出路径
      //         outputPath: 'image/'
      //       }
      //     }
      //   ]
      // }
      {
        test:/\.(png|jpe?g|gif)$/,
        // 模块处理
        use: [
          {
            loader: 'url-loader',
            options: {
              // 支持占位符
              // ext 格式
              name: '[name]_[hash:6].[ext]',
              // 输出路径
              outputPath: 'image/',
              // limit 单位是字节 1kb = 1字节
              limit: 10 * 1024
            }
          }
        ]
      }
    ]
  },

  // webpack-dev-server 配置
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    // open: true
  }
};