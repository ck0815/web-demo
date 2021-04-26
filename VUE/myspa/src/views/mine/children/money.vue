<template>
  <div>
     <x-header title="钱包" :left-options="{backText: '我'}"></x-header>
     <div class="lim">
        <flexbox :gutter="0" wrap="wrap">
        <flexbox-item :span="1/3">
          <div class="flex-demo" @click="scan()">
            <img src="../../../assets/img/qcode.png" alt="" width="39">
            <h2>扫码付款</h2>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo" @click="moneye(1)">
           <img src="../../../assets/img/moneyes.png" alt="" width="40">
             <h2>零钱</h2>
          </div>
        </flexbox-item>
        <flexbox-item :span="1/3">
          <div class="flex-demo"  @click="moneye(2)">
            <img src="../../../assets/img/bnner.png" alt="" width="38">
            <h2>银行卡</h2>
          </div>
        </flexbox-item>
      </flexbox>
    </div>
  
    <group-title> 服务 </group-title>
    <grid :cols="3" :show-lr-borders="false">

        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/xy.png' alt="" width="24">
             <p>信用卡</p>
          </div>
        </grid-item>
        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/sj.png' alt="" width="24">
             <p>手机充值</p>
          </div>
        </grid-item>
        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/sh.png' alt="" width="24">
             <p>生活缴费</p>
          </div>
        </grid-item>
        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/hcz.png' alt="" width="24">
             <p>火车机票</p>
          </div>
        </grid-item>
        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/wm.png' alt="" width="24">
             <p>外卖</p>
          </div>
        </grid-item>
         <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/dy.png' alt="" width="24">
             <p>电影</p>
          </div>
        </grid-item>
        <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/gw.png' alt="" width="24">
             <p>购物</p>
          </div>
        </grid-item>
         <grid-item>
          <div class="grid-center">
             <img src='../../../assets/mymoney/gy.png' alt="" width="24">
             <p>公益</p>
          </div>
        </grid-item>
    </grid>

    <!-- 提示信息 -->
    <popup v-model="show" position="top" :show-mask="false">
      <div class="position-vertical-demo">
        服务暂未开通，敬请期待。
      </div>
    </popup>
    <!-- 零钱 -->
     <popup v-model="show1" height="100%">
        <div class="popup1">
          <img src="../../../assets/mymoney/mes.png" alt="">
          <p>我的零钱</p>
          <h1>￥0.01</h1>
          <div class="mt40">
            <x-button type="warn" @click.native="scan()">充值</x-button>
            <x-button type="primary" @click.native="scan()">提现</x-button>
            <x-button @click.native="hidepoup(1)">返回</x-button>
          </div>
          <div class="bom">
            常见问题
          </div>
        </div>
      </popup>
      <!-- 银行卡 -->
      <popup v-model="show2" height="100%">
        <div class="popup2">
          <x-header title="银行卡" :left-options="{backText: '',preventGoBack: true}" @on-click-back="hidepoup(2)"></x-header>
          
          <div style="margin: 10px;overflow: hidden;" v-for="item in list">
            <masker style="border-radius: 2px;" :opacity="0">
              <div class="m-img" v-bind:style="{background: item.color }"></div>
              <div slot="content" class="m-title">
                {{item.title}}
                <br/>
                <span class="m-time">2016-03-18</span>
              </div>
            </masker>
          </div>

        </div>
      </popup>

  </div>


</template>

<script>
import {
  XHeader,
  Flexbox,
  FlexboxItem,
  Grid,
  GridItem,
  GroupTitle,
  Popup,
  XButton,
  Masker
} from "vux";

export default {
  data() {
    return {
      show: false,
      show1: false,
      show2: false,
      list: [
        {
          title: "邮政银行",
          color: "#299cf3"
        },
        {
          title: "招商银行",
          color: "#299cf3"
        },
        {
          title: "工商银行",
          color: "#e6bc14"
        },
        {
          title: "光大银行",
          color: "#c32020"
        }
      ]
    };
  },
  components: {
    XHeader,
    Flexbox,
    FlexboxItem,
    Grid,
    GridItem,
    GroupTitle,
    Popup,
    XButton,
    Masker
  },
  methods: {
    scan: function() {
      this.show = true;
    },
    moneye(index) {
      if (index == 1) {
        this.show1 = true;
      } else if (index == 2) {
        this.show2 = true;
      }
    },
    hidepoup(index) {
      if (index == 1) {
        this.show1 = false;
      } else if (index == 2) {
        this.show2 = false;
      }
    }
  },
  watch: {
    show(val) {
      if (val) {
        setTimeout(() => {
          this.show = false;
        }, 1000);
      }
    }
  }
};
</script>

<style>
.vux-header .vux-header-left .left-arrow:before,
.vux-header .vux-header-left a,
.vux-header .vux-header-left button,
.vux-header .vux-header-right a,
.vux-header .vux-header-right button {
  color: #ffffff !important;
  border-color: #ffffff !important;
}

.lim {
  background: #1d8ce0;
  padding: 20px;
}
.flex-demo {
  text-align: center;
}
.flex-demo h2 {
  margin-top: 5px;
  color: #ffffff;
  font-size: 14px;
}
.flexlast h2 {
  margin-top: 6px;
}
.grid-center {
  text-align: center;
}
.grid-center p {
  margin-top: 5px;
  font-size: 14px;
}

.popup1 {
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  padding: 20px;
  text-align: center;
}
.popup1 img {
  width: 80px;
  height: 80px;
  margin-top: 50px;
}
.popup1 p {
  font-size: 16px;
  margin-top: 10px;
}
.popup1 h1 {
  font-size: 26px;
  margin-top: 5px;
}
.mt40 {
  margin-top: 50px;
}
.bom {
  color: #1aad19;
  font-size: 14px;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 40px;
  width: 100%;
  text-align: center;
}

.popup2 {
  width: 100%;
  height: 100%;
  background-color: #444;
}
.popup2 .vux-header {
  background: #444 !important;
}

.position-vertical-demo {
  background-color: #ffe26d;
  color: #333;
  text-align: center;
  padding: 15px;
}
.vux-popup-dialog.vux-popup-top {
  z-index: 9999;
}


.m-img {
  padding-bottom: 33%;
  display: block;
  position: relative;
  max-width: 100%;
  background-size: cover;
  background-position: center center;
  cursor: pointer;
  border-radius: 2px;
}

.m-title {
  color: #fff;
  text-align: center;
  text-shadow: 0 0 2px rgba(0, 0, 0, 0.5);
  font-weight: 500;
  font-size: 16px;
  position: absolute;
  left: 0;
  right: 0;
  width: 100%;
  top: 50%;
  transform: translateY(-50%);
}
.m-time {
  font-size: 12px;
  padding-top: 4px;
  border-top: 1px solid #f0f0f0;
  display: inline-block;
  margin-top: 5px;
}
</style>