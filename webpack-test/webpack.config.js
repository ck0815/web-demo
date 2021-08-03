// webpack 是 node写的 node 的写法
const path = require("path");

module.exports = {
  //开发服务器配置
  devServer: {
    //端口号         
    port: 2000,
    //滚动条
    progress: true,
    // 指定入口页面
    contentBase: "./scripts/test1",
  },

  //模式默认  压缩后 production     开发 development 
  mode: 'development',

  //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
  entry: {
    index: "./scripts/test1/index.js"        
  },

  output: {
    //[hash]会在后面生成随机hash值
    filename: "[name].bundle.[hash].js",    
    //输出文件路径   
    path: path.join(__dirname, "dist")          
  },

  // 处理对应模块
  module: {
    rules: [
      {
        test: /\.css$/,
        //处理css
        use: [ 'style-loader', 'css-loader' ]
      },
      {
        test:/\.(png|jpg|gif)$/,
        use:[{
            loader:'url-loader',
            options:{
                outputPath:'images/',           //输出到images文件夹
                limit:500                       //是把小于500B的文件打成Base64的格式，写入JS
            }
        }]
      }
    ]
  },
}