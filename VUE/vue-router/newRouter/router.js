class Router {

    // 首先根据mode来确定所选的模式，如果当前环境不支持history模式，会强制切换到hash模式；
    // 如果当前环境不是浏览器环境，会切换到 abstract 模式下。然后再根据不同模式来生成不同的history操作对象。

    constructor(options) {

        this.base = options.base            //
        this.routes = options.routes        //路由配置
        this.container = options.id         //容器
        this.mode = options.mode || 'hash'  //mode来指定路由模式

        this.fallback = this.mode === 'history' && !supportsPushState && options.fallback !== false

        if (this.fallback) {
            this.mode = 'hash'
        }

        this.history = this.mode === 'history' ? new HTML5History(this) : new HashHistory(this)

        Object.defineProperty(this, 'route', {
            get: () => {
                return this.history.current
            }
        })

        this.init()
    }


    push(location) {
        this.history.push(location)
    }

    replace(location) {
        this.history.replace(location)
    }

    go(n) {
        this.history.go(n)
    }

    render() {
        let i
        if ((i = this.history.current) && (i = i.route) && (i = i.component)) {
            document.getElementById(this.container).innerHTML = i
        }
    }

    init() {
        const history = this.history
        observer.call(this, this.history.current)
        new Watcher(this.history.current, 'route', this.render.bind(this))
        history.transitionTo(history.getCurrentLocation())
    }

}