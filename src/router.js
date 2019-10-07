import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HomeView from './views/home/HomeView.vue'  //首页
import SearchView from './views/home/SearchView.vue'  //搜索页
import BusinessView from './views/home/BusinessView.vue'  //商家详情页
import AccountOrderView from './views/home/AccountOrderView.vue'  //结账页
import ResultView from './views/home/ResultView.vue'  //搜索结果页
import AddressAddView from './views/home/AddressAddView.vue'  //添加地址页

import SelfView from './views/self/SelfView.vue'  //个人中心页
import SelfAddressView from './views/self/SelfAddressView.vue'  //我的地址页
import SelfInfoView from './views/self/SelfInfoView.vue'  //个人信息页

import OrderView from './views/order/OrderView.vue' //订单页

import FindView from './views/find/FindView.vue'  //发现页
import FindMoreView from './views/find/FindMoreView.vue'  //发现更多页

import TabView from './views/public/TabView.vue'  //底部菜单
import LoginView from './views/public/LoginView.vue'  //登录页


export default new Router({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',components:{
      default:HomeView,
      tab:TabView
    }},
    {path:'/home',components:{
      default:HomeView,
      tab:TabView
    }},
    {path:'/business',component:BusinessView},
    {path:'/address/add',component:AddressAddView},
    {path:'/search',component:SearchView,children:[
      {path:'result',component:ResultView}
    ],meta:{isShow:true}},
    {path:'/account',component:AccountOrderView},
    {path:'/find',components:{
      default:FindView,
      tab:TabView
    }},
    {path:'/more',component:FindMoreView},
    {path:'/self',components:{
      default:SelfView,
      tab:TabView
    }},
    {path:'/self/address',component:SelfAddressView},
    {path:'/self/info',component:SelfInfoView},
    {path:'/order',components:{
      default:OrderView,
      tab:TabView
    }},
    {path:'/login',component:LoginView},
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