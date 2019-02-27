import Vue from 'vue'
import Router from 'vue-router'
import Hello from '../components/Hello'
import World from '../components/World'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'hello',
    component: Hello
  }, {
    path: '/world',
    name: 'world',
    component: World
  }]
})