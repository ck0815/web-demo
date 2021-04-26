<template>
  <div>
    <x-header :left-options="{showBack: false}">首页</x-header>
    <div class="top">
      <img src="../../assets/img/money.png" alt>
      <div class="topend">
        <h2>可用余额</h2>
        <p class="font-weight">0.00</p>
      </div>
    </div>
    <!-- button -->
    <flexbox class="mtnum">
      <flexbox-item></flexbox-item>
      <flexbox-item>
        <x-button type="warn" action-type="reset">消费</x-button>
        <x-button type="primary" action-type="button">入账</x-button>
      </flexbox-item>
      <flexbox-item></flexbox-item>
    </flexbox>
  </div>
</template>

<script>
import { Flexbox, FlexboxItem, XButton, XHeader } from "vux";

export default {
  data() {
    return {
      msg: "首页"
    };
  },
  components: {
    Flexbox,
    FlexboxItem,
    XButton,
    XHeader
  }
};
</script>

<style>
.top {
  width: 200px;
  height: 200px;
  margin: 0 auto;
  border: 1px solid #ddd;
  border-radius: 50%;
  position: relative;
  vertical-align: middle;
  text-align: center;
  margin-top: 25%;
}
.top img {
  width: 80px;
  height: 80px;
  margin-top: 55px;
}
.topend {
  position: absolute;
  top: 0;
  text-align: center;
  width: 100%;
}
.topend h2 {
  color: #999;
  font-size: 14px;
  margin-top: 70px;
}
.topend p {
  margin-top: 8px;
  color: #58b7ff;
  font-size: 20px;
}
.mtnum {
  margin-top: 40px;
}
</style>
