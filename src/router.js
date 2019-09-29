import Vue from 'vue'
import Router from 'vue-router'

import HomeView from './components/home/views/HomeView.vue'
  import ShopView from './components/home/views/ShopView.vue'
import FindView from './components/find/views/FindView.vue'
  import PrivilegeView from './components/find/views/PrivilegeView.vue'
  import MoreView from './components/find/views/MoreView.vue'
import OrderView from './components/order/views/OrderView.vue'
import MyselfView from './components/myself/views/MyselfView.vue'

import TabBar from './components/public/TabBar.vue'

import LoginView from './components/public/views/LoginView.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',components:{
      default:HomeView,
      tab:TabBar
    }},
    {path:'/home',components:{
      default:HomeView,
      tab:TabBar
    }},
    {path:'/home/shop',component:ShopView},
    {path:'/find',components:{
      default:FindView,
      tab:TabBar
    }},
    {path:'/find/privilege',component:PrivilegeView},
    {path:'/find/more',component:MoreView},
    {path:'/order',components:{
      default:OrderView,
      tab:TabBar
    }},
    {path:'/myself',components:{
      default:MyselfView,
      tab:TabBar
    }},
    {path:'/login',component:LoginView}
  ]
})


// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }