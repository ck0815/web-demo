import a from './a.js'
import b from './b.js'

const s = () => {
    a.init();
    a.cinit();
    b.init();

    console.log('s init...')
}

s();