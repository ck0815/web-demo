<template>
  <div >
     <transition :name="transitionName">
      <!-- 二级路由 -->
      <router-view class="child-view"></router-view>
    </transition>
  </div>
</template>

<script>
import { XHeader , Cell ,Group , } from 'vux'
export default {
  data () {
    return { 
      transitionName: 'slide-left',
    }
  },
  watch: {
    $route(to, from) {
      //使用watch 监听$router的变化
      if (to.meta.index > from.meta.index) {
        //如果to索引大于from索引,判断为前进状态,反之则为后退状态 meta.index自己设置
        this.transitionName = "slide-left";
      } else {
        this.transitionName = "slide-right";
      }
    }
  }
}

</script>

<style>

</style>