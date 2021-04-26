<template>
  <div class="hello">

    <h1>{{ msg }}</h1>
    <h3>{{$store.state.count}}</h3>


    <button @click="handleAddClick(10)">增加</button>
    <button @click="handleReduceClick(10)">减少</button>
    <br/>
    <button @click="handleActionsAdd(10)">异步增加</button>
    <button @click="handleActionsReduce(10)">异步减少</button>
     <br/>
    <button @click="getter()">获取</button>
   
    
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  methods: {
    handleAddClick (n){
      this.$store.commit('add',n);
      console.log(this.$store.state)
    },
    handleReduceClick (n){
      this.$store.commit('jian',n);
       console.log(this.$store.state)

    },

    handleActionsAdd(n){
      this.$store.dispatch('actionsAddCount',n)
    },
    handleActionsReduce(n){
      this.$store.dispatch('actionsReduceCount',n)
    },

    getter(){
      console.log( this.$store.getters.getterCount)
    }

  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1,
h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
