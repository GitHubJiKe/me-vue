import Vue from 'vue'
import Router from 'vue-router'
import HomePage from './home'
import EducationPage from './education'
import AbilityPage from './ability'
import IndexPage from '@/pages/IndexPage'
import WorkPage from './work'
import ShowWorksPage from './works'
import CommentPage from './comment'
import OthersPage from './others'
Vue.use(Router)
const Index = {
  path: '/',
  name: 'IndexPage',
  component: IndexPage
}
const routes = [
  Index, HomePage, EducationPage,
  WorkPage, AbilityPage, ShowWorksPage,
  OthersPage, CommentPage
]
export default new Router({
  routes,
  mode: 'history'
})
