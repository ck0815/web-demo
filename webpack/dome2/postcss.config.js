const autoprefixer = require('autoprefixer')
module.exports = {
    plugins: [
      // autoprefixer('IE 10')
      autoprefixer({
        // 1, 最近两个版本
        // 2， 全球浏览器份额 大于1%的浏览器
        overrideBrowserslist: ['last 2 versions', '>1%']
      })
    ]
}