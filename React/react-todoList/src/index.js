import React from 'react';  //react的核心库
import ReactDOM from 'react-dom';   //提供了与DOM相关的操作，比如插入组件到DOM的某一个节点中
import App from './App';     //引入组件APP.js App组件，大写字母开头

ReactDOM.render(<App />, document.getElementById('root'));  //将App这个组件插入到id为root的节点中。 
