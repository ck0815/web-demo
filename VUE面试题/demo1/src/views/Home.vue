<template>
  <div class="home">
    <div class="logo">
      <img alt="Vue logo" src="../assets/logo.png">
    </div>

    <pre>
        1. v-if和v-for哪个优先级高，如何避免性能问题
            v-for 优先级更高
            v-for和v-if 在同一层级会先渲染在判断
            尽量将v-if放在v-for父级执行

        2. vue组件中的data为什么是个函数
    </pre>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {},
  // data () {
  //   return {

  //   }
  // },
  // methods(){
    
  // }
}
</script>

<style scoped>
.logo{
  text-align: center;
}

</style>
