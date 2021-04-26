
class Router {

    constructor(options) {
        this.routes = {};

        this.init();
        this.bindEvent();

        // 遍历，绑定视图更新
        options.forEach(item => {
            this.route(item.path, () => {
                document.getElementById('content').innerHTML = item.component;
            });
        });
    }


    // 绑定点击事件
    bindEvent() {
        const _this = this;
        const links = document.getElementsByTagName('a');

        [].forEach.call(links, link => {

            link.addEventListener('click', function () {
                // 获取当前元素 绑定属性
                const url = this.getAttribute('data-href');
                _this.push(url);

            });

        });

    }

    // 绑定监听事件
    init() {
        window.addEventListener('load', this.updateView.bind(this), false);
        window.addEventListener('popstate', this.updateView.bind(this),false);
    }
    
    push(url) {
        
        var newUrl = window.location.href.split(".html")[0]; 
        // console.log(`${newUrl}.html${url}`,'1111111')
        //修改地址栏
        window.history.pushState('aaaaaa', null, `${newUrl}.html${url}`);
        //调用更新视图方法
        this.updateView();
    }

    // 更新试图
    updateView() {
        var activeUrl = window.location.pathname.split(".html")[1]; 
        const currentUrl = activeUrl || '/';
        // console.log(window.location , 'aaaaa')
        this.routes[currentUrl] && this.routes[currentUrl]();
    }

    // 将路由与回调函数关联
    route(path, cb) {
        this.routes[path] = cb;
    }
}
