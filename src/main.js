// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import './styles/app.css'
import './styles/animate.css'
import './styles/web-fonts-with-css/css/fa-solid.css'
import $ from 'jquery'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import Progress from 'vue-multiple-progress'
Vue.use(Progress)
Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false
window.$ = $
window.onscroll = function () {
  store.commit('showHeaderAndFooter', false)
  setTimeout(() => {
    store.commit('showHeaderAndFooter', true)
  }, 2000)
}
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
