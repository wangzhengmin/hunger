import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueTouch from 'vue-touch'

import './assets/scss/reset.scss';

import { Swipe, SwipeItem, Rate, Popup } from 'vant';
import 'vant/lib/index.css';

Vue.use(Swipe).use(SwipeItem).use(Rate).use(Popup).use(VueTouch, {name: 'v-touch'})
// VueTouch.config.swipe = {

//   threshold: 100 //手指左右滑动距离

// }
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
