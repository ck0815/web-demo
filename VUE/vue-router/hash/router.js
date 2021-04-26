// 类
class Router {

    //构造函数 是一种用于创建和初始化class创建的对象的特殊方法
    constructor(options) {
        this.routes = {};
        // console.log(options , 'options...')

        this.init();

        // 遍历，绑定视图更新
        options.forEach(item => {

            this.route(item.path, () => {
                document.getElementById('content').innerHTML = item.component;
            });

        });
    }

    // 绑定监听事件 页面加载完成/hash值改变 
    init() {
        //load === onload()
        window.addEventListener('load', this.updateView.bind(this), false);
        window.addEventListener('hashchange', this.updateView.bind(this), false);
    }

    // 更新试图
    updateView() {
        const currentUrl = window.location.hash.slice(1) || '/';
        // 存在当前路由地址 => 执行对应函数
        this.routes[currentUrl] && this.routes[currentUrl]();
        // console.log(currentUrl ,window.location.hash , this.routes)
    }

    // 将路由与回调函数关联
    route(path, cb) {
        this.routes[path] = cb;
        // console.log(path, cb)
    }
}