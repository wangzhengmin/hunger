<template>
  <div class="bg">
     <my-top></my-top>
     <div class="row icon-box">
       <a href="#" class="col icon-item">
         <p class="icon-page icon-public"><span class="iconfont">&#xe89a;</span></p>
         <p>红包</p>
       </a>
       <a  href="#" class="col icon-item">
         <p class="icon-money icon-public"><span class="iconfont">&#xe799;</span></p>
         <p>金币</p>
       </a>
     </div>
     <div>
       <my-menu v-for="(m,k) in menu" :key="k" :list="m.list"></my-menu>
     </div>
     <p class="ys"><a href="">隐私政策</a></p>
  </div>
</template>

<script>
import MyTop from '../MyTop.vue';
import MyMenu from '../MyMenu.vue';

export default {
  data(){
    return{
      menu:[
        {list:[
          {font:{str:'&#xe613;',color:'#4da6f0'},des:'我的地址',href:'/other'}
        ]},
        {list:[
          {font:{str:'&#xe620;',color:'green'},des:'金币商城',href:'/other'},
          {font:{str:'&#xf008d;',color:'rgb(238, 55, 55)'},des:'分享拿20元现金',href:'/other'},
        ]},
        {list:[
          {font:{str:'&#xe71d;',color:'#4da6f0'},des:'我的客服',href:'/other'},
          {font:{str:'&#xe613;',color:'#4da6f0'},des:'下载饿了么APP',href:'/other'},
          {font:{str:'&#xe623;',color:'#4da6f0'},des:'规则中心',href:'/other'},
        ]}
        
      ]
    }
  },
  components:{
    MyTop,
    MyMenu
  }
}
</script>

<style lang="scss" scoped>
.icon-box{
  height:0.8rem;
  background:white;
  .icon-item{
    flex:1 1;
    justify-content: center;
    align-items: center;
    font-size:0.12rem;
    .icon-public{
      width:0.25rem;
      height:0.25rem;
      text-align: center;
      line-height: 0.25rem;
      border-radius: 50%;
      margin-bottom:0.1rem;
      >span{
        color:white;
        font-size:0.15rem;
      }
    }
    .icon-page{
      background: rgb(238, 55, 55);
    }
    .icon-money{
      background: green;
    }
  }
}
.bg{
  background-color: #f5f5f5;
  height:100vh;
}
.ys{
  margin-top:0.2rem;
  text-align: center;
  >a{
    color:#4da6f0;
  }
}
</style>