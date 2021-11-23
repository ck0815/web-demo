<template>
  <div id="app">
    <!-- 缓存得页面 -->
    <keep-alive>
      <router-view v-if="$route.mata && $route.mata.keepAlive"/>
    </keep-alive>

    <!-- 不缓存得页面 -->
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
