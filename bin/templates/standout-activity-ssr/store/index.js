import Vue from 'vue'
import Vuex from 'vuex'
import state from './state'
import actions from './actions'
import getters from './getters'
import mutations from './mutations'

Vue.use(Vuex)

// 创建 store 实例
function createStore () {
  return new Vuex.Store({
    state,
    getters,
    mutations,
    actions,
    modules: {}
  })
}

export default createStore
