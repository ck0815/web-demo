

// import dep from './dep'

class Watcher {

  constructor (vm, expression, callback) {
    this.vm = vm
    this.callbacks = []
    this.expression = expression
    this.callbacks.push(callback)
    this.value = this.getVal()

  }

  getVal () {
    // 触发 get 方法，完成对 watcher 的收集
    setTarget(this)
    let val = this.vm
    this.expression.split('.').forEach((key) => {
      val = val[key]
    })
    cleanTarget()
    return val
  }

  // 更新动作
  update () {
    this.callbacks.forEach((cb) => {
      cb()
    })
  }

}

