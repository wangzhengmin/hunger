<template>
  <div class="home-box">
    <div class="addr row">
      <span class="iconfont">&#xe62f;</span>
      <span class="addr-des">长征路南昌理工学院南昌校区</span>
      <div class="down"></div>
    </div>
    <div class="search-box">
      <a class="search row">
        <span class="iconfont">&#xe688;</span>
        <span class="search-des">搜索饿了么商家、商品名称</span>
      </a>
    </div>
    <home-menu></home-menu>
    <home-notice></home-notice>
    <div class="recomond row">推荐商家</div>
    <home-filter></home-filter>
    <div v-for="(m,k) in menu" :key="k">
      <router-link :to="{path:'/home/shop',query:{pid:m.pid}}"><home-item :list="m"></home-item></router-link>
    </div>
  </div>
</template>

<script>
import HomeMenu from '../HomeMenu.vue';
import HomeNotice from '../HomeNotice.vue';
import HomeFilter from '../HomeFilter.vue';
import HomeItem from '../HomeItem.vue';

export default {
  name:'page-home',
  data(){
    return{
      menu:[
        {pid:1,logo:require('../images/item1.jpeg'),title:'秘制手撕鸡饭',grade:2.5,num:200,start:15,time:50,charge:1,distance:0.8},
        {pid:2,logo:require('../images/item2.jpeg'),title:'基士客(学府街店)',grade:3.5,num:700,start:15,time:50,charge:1,distance:1.2},
        {pid:3,logo:require('../images/item3.png'),title:'膳当家黄焖鸡米饭(学府街店)',grade:2.5,num:200,start:15,time:50,charge:1,distance:1.8},
        {pid:4,logo:require('../images/item1.jpeg'),title:'秘制手撕鸡饭',grade:4.5,num:500,start:15,time:50,charge:1,distance:0.8},
        {pid:5,logo:require('../images/item2.jpeg'),title:'秘制手撕鸡饭',grade:2.5,num:200,start:15,time:50,charge:1,distance:0.8},
        {pid:6,logo:require('../images/item1.jpeg'),title:'秘制手撕鸡饭',grade:2.5,num:100,start:15,time:50,charge:1,distance:0.8},
        {pid:7,logo:require('../images/item1.jpeg'),title:'秘制手撕鸡饭',grade:4.5,num:500,start:15,time:50,charge:1,distance:0.8},
        {pid:8,logo:require('../images/item2.jpeg'),title:'秘制手撕鸡饭',grade:2.5,num:200,start:15,time:50,charge:1,distance:0.8},
        {pid:9,logo:require('../images/item1.jpeg'),title:'秘制手撕鸡饭',grade:2.5,num:100,start:15,time:50,charge:1,distance:0.8},
      ]
    }
  },
  components:{
    HomeMenu,
    HomeNotice,
    HomeFilter,
    HomeItem
  }
}
</script>

<style lang="scss" scoped>
.home-box{
  margin-bottom:0.6rem;
}
.addr{
  padding:0.1rem 0.15rem 0;
  height:0.32rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  .addr-des{
    display: block;
    max-width:50%;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: 700;
    font-size:0.18rem;
    line-height:0.32rem;
    color:white;
    white-space:nowrap;
  }
  .iconfont{
    color:white;
  }
  .down{
    border:0.04rem solid;
    height:0;
    border-color: white transparent transparent transparent;
    align-self: center;
    margin-left:0.1rem;
  }
}
.search-box{
  box-sizing: border-box;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding:0.1rem 0.15rem;
  position: sticky;
  top:0;
  left:0;
  z-index:999;
  .search{
    height:0.35rem;
    background:white;
    text-align: center;
    justify-content: center;
    line-height: 0.35rem;
    font-size:0.14rem;
    .search-des{
      color:#999;
    }
    .iconfont{
      align-self: center;
    }
  }
}
.recomond{
  height:0.3rem;
  text-align: center;
  line-height: 0.3rem;
  font-size:0.13rem;
  color:black;
  font-weight: 500;
  justify-content: center;
  &::after{
    content: '';
    display: block;
    height:0.01rem;
    width:0.2rem;
    background:#999;
    align-self: center;
    margin-left:0.1rem;
  }
  &::before{
    content: '';
    display: block;
    height:0.01rem;
    width:0.2rem;
    background:#999;
    align-self: center;
    margin-right:0.1rem;
  }
}
</style>