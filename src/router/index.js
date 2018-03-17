import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './home'
import EducationPage from './education'
import IndexPage from '@/pages/IndexPage'
Vue.use(Router)
const Index = {
  path: '/',
  name: 'IndexPage',
  component: IndexPage
}
const routes = [Index, HomePage, EducationPage]
export default new Router({
  routes,
  mode: 'history'
})
