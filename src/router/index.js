import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './home'
Vue.use(Router)

const routes = [HomePage]
export default new Router({
  routes,
  mode: 'history'
})
