import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import './assets/scss/reset.scss';

import { Swipe, SwipeItem, Rate, Popup } from 'vant';
import 'vant/lib/index.css';


Vue.use(Swipe).use(SwipeItem).use(Rate).use(Popup);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
