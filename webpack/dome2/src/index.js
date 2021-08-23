import css from './css/index.less'
import imgUrl from './img/baidu.png'
let ele = `<div class="${css.ie}">ie</div>`

// 创建图片
let imgEle = new Image()
imgEle.src = imgUrl

let root = document.getElementById('root')
root.append(imgEle)

// console.log(css, imgUrl, imgEle, '引入less')
// console.log(css)