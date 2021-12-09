import acss from './a.css'
import b from './b.js'

const a = {
    init (){
        console.log('a init...')
    },
    cinit (){
        b.init()
    },
}

export default a;