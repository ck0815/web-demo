<template>
  <div id="app">
    <!-- tab -->

    <!-- 路由切换动画 -->
    <!-- <transition :name="transitionName"> -->
    <router-view class="child-view"></router-view>
    <!-- </transition> -->

    <!-- tab 公共组件 -->
    <Player v-if="TabShow"></Player>
  </div>
</template>
<script>
// vux
import { Confirm, Alert, Loading, Toast } from "vux"; // 单独组件引入
import Player from "./components/player.vue";

import "./assets/css/reset.css"; // 全局样式初始化
import "./assets/css/base.css"; // 全局公用样式

export default {
  name: "app",
  components: {
    //调用组件
    Alert,
    Confirm,
    Loading,
    Toast,

    Player
  },
  data() {
    return {
      TabShow: true
    };
  },
  methods: {},
  watch: {}
};
</script>

<style>
</style>
