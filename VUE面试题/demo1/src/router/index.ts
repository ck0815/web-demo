import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },

  // keep-alive 缓存
  {
    path: '/keep_a',
    name: 'keep_a',
    component: () => import('../views/keep_a.vue'),
    // mata:{
    //   keepAlive: true
    // }
  },
  {
    path: '/keep_b',
    name: 'keep_b',
    component: () => import('../views/keep_b.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
