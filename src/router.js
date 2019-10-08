import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import HomeView from './views/home/HomeView.vue'  //首页
import SearchView from './views/home/SearchView.vue'  //搜索页
import BusinessView from './views/home/BusinessView.vue'  //商家详情页
import AccountOrderView from './views/home/AccountOrderView.vue'  //结账页
import ResultView from './views/home/ResultView.vue'  //搜索结果页
import AddressAddView from './views/home/AddressAddView.vue'  //添加地址页
import CheckoutAddressView from './views/home/CheckoutAddressView.vue'  //选择地址页

import SelfView from './views/self/SelfView.vue'  //个人中心页
import SelfAddressView from './views/self/SelfAddressView.vue'  //我的地址页
import SelfInfoView from './views/self/SelfInfoView.vue'  //个人信息页
import AddressEditView from './views/self/AddressEditView.vue'  //地址修改页

import OrderView from './views/order/OrderView.vue' //订单页

import FindView from './views/find/FindView.vue'  //发现页
import FindMoreView from './views/find/FindMoreView.vue'  //发现更多页

import TabView from './views/public/TabView.vue'  //底部菜单
import LoginView from './views/public/LoginView.vue'  //登录页


const router=new VueRouter({
  // mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {path:'/',redirect: '/home'},
    {path:'/home',components:{
        default:HomeView, //首页
        tab:TabView //底部菜单
      },meta:{
        title:'首页'
      }
    },
    {path:'/business',component:BusinessView},   //商家详情页
    {path:'/address/add',component:AddressAddView,meta:{title:'我的地址'}}, //添加地址页
    {path:'/address/checkout',component:CheckoutAddressView}, //选择地址页
    {path:'/search',component:SearchView,children:[ //搜索页
      {path:'result',component:ResultView} //搜索结果页
    ],meta:{title:'搜索'}},
    {path:'/account',component:AccountOrderView}, //结账页
    {path:'/find',components:{
        default:FindView, //发现页
        tab:TabView
      },meta:{
        title:'发现'
      }
    },
    {path:'/more',component:FindMoreView,meta:{
      title:'金币商城'
    }},   //发现更多页
    {path:'/self',components:{
        default:SelfView, //个人中心页
        tab:TabView
      },meta:{
        title:'我的'
      }
    },
    {path:'/self/address',component:SelfAddressView,meta:{title:'我的地址'}}, //我的地址页
    {path:'/self/info',component:SelfInfoView,meta:{title:'账户信息'}}, //个人信息页
    {path:'/address/edit',component:AddressEditView,meta:{title:'我的地址'}}, //地址修改页
    {path:'/order',components:{
        default:OrderView,  //订单页
        tab:TabView
      },meta:{
        title:'我的订单'
      }
    },
    {path:'/login',component:LoginView},  //登录页
  ]
})
router.beforeEach((to,from,next)=>{
  if(to.meta.title)
    document.title = to.meta.title;
  next();
})

export default router;
// {
//   path: '/about',
//   name: 'about',
//   // route level code-splitting
//   // this generates a separate chunk (about.[hash].js) for this route
//   // which is lazy-loaded when the route is visited.
//   component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
// }