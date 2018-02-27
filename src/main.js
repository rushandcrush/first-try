import Vue from 'vue'
import App from './App.vue'

import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueParallaxJs from 'vue-parallax-js'
import VueAwesomeSwiper from 'vue-awesome-swiper'

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'swiper/dist/css/swiper.css'


Vue.use(BootstrapVue)
Vue.use(VueParallaxJs)
Vue.use(VueAwesomeSwiper)


new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
