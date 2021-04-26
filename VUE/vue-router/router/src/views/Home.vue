<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-row :gutter="20">
      <el-col :span="12">
        <a href="#/List">a-list</a>
      </el-col>
      <el-col :span="12">
        <router-link to="/List">list</router-link>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style>
    .home{
        text-align: center
    }
</style>

