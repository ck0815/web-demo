<template>
  <div class="list">

    <router-link to="/">
        <el-button type="primary" plain>back</el-button>
    </router-link>

    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">list</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">list</div>
      </el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="24">
        <div class="grid-content bg-purple">list</div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  name: "list",
  components: {}
};
</script>
<style>
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>