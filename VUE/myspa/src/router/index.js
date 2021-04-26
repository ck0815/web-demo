import Vue from 'vue'
import Router from 'vue-router'
// 
import Index from '../views/index/index'
import Bill from '../views/bill/bill'
import Booklleeping from '../views/bookkeeping/booklleeping'

import My from '../views/mine/my'
import Myindex from '../views/mine/children/myindex'
import Mymoney from '../views/mine/children/money'

Vue.use(Router)

const router = new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index,
            meta: { index: 0 },   //meta对象的index用来定义当前路由的层级,由小到大,由低到高,路由过渡动画
        },
        {
            path: '/My',
            name: 'My',
            component: My,
            meta: { index: 3 },
            children: [
                {
                    path: '',           //我的首页
                    name: 'My_index',
                    component: Myindex,
                    meta: { index: 4 },
                }
            ],

        }
    ]
});
export default router