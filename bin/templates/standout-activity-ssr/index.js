import Vue from 'vue'
import App from './App.vue'
import createStore from '../../store'
// import router from './router'
import '../../common'

const store = createStore()

function createApp () {
  App.store = store
  return new Vue(App)
}

if (typeof window !== 'undefined') {
  App.el = '#root'
  // App.router = router
  createApp()
}

export default createApp
