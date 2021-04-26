// import React, { Component } from 'react';
import React from 'react';
// import './index.css'; 

//使用class App extends Component声明一个组件
// class App extends Component { 
class App extends React.Component { 
  // 
  constructor (props){
    super(props);
    this.state = {
      list : [
        'learn react',
        'learn english'
      ],
      inputVal : ''
    }
  }

  render() {
    return (
      // jsx语法,允许在js中直接使用标签不需要包含''
      // 可以在标签内直接写表达式，但是不能写js
      // 返回结构必须包在一个大的容器里
      // 
      <div className="todoList">
         {/* 
            在组件中绑定事件 必须 on + 事件名，事件名首字母必须大写。否则会报错 
            触发事件 为 this. + 事件名 ： 这里的this指向当前点击元素对象
            .bind(this) ： 绑定后，事件内部的this指向的是当前组件
          */}

          <input value={this.state.inputVal} onChange={this.val.bind(this)}/>
          <button onClick={this.addMsg.bind(this)}>add</button>
          {/* 
            {} 内为jsx语法 用于返回便利数据时的结构
            key={index} 最好添加，当列表发生修改时，只会渲染新添加的，不会把整个列表从新渲染
          */}
          <ul>
            {
              this.state.list.map((item,index) => {
                return <li key={index} onClick={this.delItem.bind(this,index)}>
                         {item} 
                       </li>
              })
            }
          </ul>
      </div>
    );
  }

  // 添加
  addMsg (){
    // console.log('aaa')
    // this.state.list.push();
    this.setState({
      list : [...this.state.list, this.state.inputVal],
      inputVal : ''
    })
  }

  // 获取值
  val (event){
    this.setState({
      inputVal : event.target.value
    })
  }

  // 删除
  delItem (index){
    console.log(index)
    const list = [...this.state.list];
    list.splice(index,1)
    this.setState({
      list : list
    })
  }


}

export default App; //使用使用 export default App;导出组件。
