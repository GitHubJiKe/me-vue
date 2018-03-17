import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './home'
import EducationPage from './education'
Vue.use(Router)

const routes = [HomePage, EducationPage]
export default new Router({
  routes,
  mode: 'history'
})
