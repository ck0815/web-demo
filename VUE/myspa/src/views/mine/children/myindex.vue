<template>
  <div>
     <x-header :left-options="{showBack: false}">我</x-header>
     <div class="header">
       <div class="logo">
           <img src="../../../assets/img/logo.jpg" alt="">
       </div>
      <h2>帅帅~</h2>
      <p><span>签名</span> : 越来越帅哦！！！</p>
     </div>
    <div class="list">
      <group>
        <cell title="钱包" is-link link="/My/Mymoney">
            <img slot="icon" width="18" style="display:block;margin-right:8px;" src="../../../assets/img/moneys.png">
        </cell>
        <cell title="相册" is-link >
            <img slot="icon" width="18" style="display:block;margin-right:8px;" src="../../../assets/img/pic.png">
        </cell>
        <cell title="表情" is-link >
            <img slot="icon" width="18" style="display:block;margin-right:8px;" src="../../../assets/img/emo.png">
        </cell>
        <cell title="设置" is-link >
            <img slot="icon" width="18" style="display:block;margin-right:8px;" src="../../../assets/img/set.png">
        </cell>
      </group>
    </div>

  </div>
</template>

<script>
import { XHeader , Cell ,Group } from 'vux'
export default {
  data () {
    return { 
      msg: 'is me',
    }
  },
  components: {
    XHeader,
    Cell,
    Group
  },
  
}
</script>

<style>
.header{margin-top: 10px;padding:10px; padding-left: 15px;padding-right: 15px;border: 1px solid #eee;border-left: 0;border-right: 0;overflow: hidden}
.header .logo{width: 60px;height: 60px;float: left;margin-right: 10px;}
.header .logo img{border-radius: 5%;}
.header h2{margin-top: 5px}
.header p{margin-top: 8px}
.plr{padding:10px; padding-left: 15px;padding-right: 15px;}
.list{margin-top: 20px}
</style>