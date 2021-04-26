// webpack 是node写的 node的写法

const path = require("path");

module.exports = {

    devServer : {           //开发服务器配置
        port : 2000,        //端口号
        progress:true,      //滚动条
        contentBase: "./scripts/test1",    //指定入口页面

    },


    mode : 'development',    //模式默认  压缩后 production     开发 development 
    entry: {
        index: "./scripts/test1/index.js"         //入口文件，若不配置webpack4将自动查找src目录下的index.js文件
    },
    output: {
        filename: "[name].bundle.[hash].js",       //[hash]会在后面生成随机hash值
        path: path.join(__dirname, "dist")          //输出文件路径
    },


    module: { // 处理对应模块
        rules: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]   //处理css
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