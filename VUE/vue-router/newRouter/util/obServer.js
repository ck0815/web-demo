// 观察者
class Observer {
    
    constructor(value) {
        this.walk(value)
    }

    walk(obj) {
        Object.keys(obj).forEach((key) => {
            // 如果是对象，则递归调用walk，保证每个属性都可以被defineReactive
            if (typeof obj[key] === 'object') {
                this.walk(obj[key])
            }
            defineReactive(obj, key, obj[key])
        })
    }
};

// 
function defineReactive(obj, key, value) {

    let dep = new Dep()
    Object.defineProperty(obj, key, {

        get: () => {
            if (Dep.target) {
                // 依赖收集
                dep.add()
            }
            return value
        },
        set: (newValue) => {
            value = newValue;

            // 通知更新，对应的更新视图
            dep.notify()
        }

    })
}
