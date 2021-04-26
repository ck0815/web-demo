
class Dep {

    constructor() {
        this.deppend = []
    }

    add() {
        this.deppend.push(Dep.target)
    }

    notify() {
        this.deppend.forEach((target) => {
            target.update()
        })
    }

}

Dep.target = null;
// 设置
function setTarget (target) {
    Dep.target = target
}
// 清除
function cleanTarget() {
    Dep.target = null
}
