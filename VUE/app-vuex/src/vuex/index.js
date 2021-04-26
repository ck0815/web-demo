
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

// 
const mutations = {
    add (state, n = 0){
        return (state.count += n)
    },
    jian (state, n = 0){
        return (state.count -= n)
    }
}
// 异步
const actions = {
    actionsAddCount (context, n = 0){
        console.log(context)
        return context.commit('add', n)
    },
    actionsReduceCount({ commit }, n = 0){
        return commit('jian', n)
    }
}

// 获取
const getters = {
    getterCount(state, n = 0) {
        return (state.count += n)
    }
}



const state = {
    count: 100
}

export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})