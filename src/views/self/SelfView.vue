<template>
  <div class="bg">
      <router-link :to="href" class="my-top row" tag="section">
         <img src="../../assets/images/logo.png" alt="">
         <div class="login col">
            <p class="font-big">{{name}}</p>
            <p class="font-middle">{{des}}</p>
         </div>
         <span class="iconfont more">&#xe63a;</span>
      </router-link>
      <section class="row icon-box">
         <a href="#" class="col icon-item">
            <p class="icon-page icon-public"><span class="iconfont">&#xe89a;</span></p>
            <p>红包</p>
         </a>
         <a  href="#" class="col icon-item">
            <p class="icon-money icon-public"><span class="iconfont">&#xe799;</span></p>
            <p>金币</p>
         </a>
      </section>
      <section>
         <div class="menu-box" v-for="(l,k) in menu" :key="k">
            <router-link  v-for="(i,k2) in l.list" :key="k2" :to="i.href">
               <div class="menu-item row">
                  <span class="iconfont" v-icon="i.font"></span>
                  <p>{{i.des}}</p>
                  <span class="iconfont right">&#xe63a;</span>
               </div>
            </router-link>
         </div>
      </section>
      <p class="ys"><a href="">隐私政策</a></p>
   </div>
</template>

<script>
import storage from '@/module/storage.js';
export default {
  data(){
    return{
      menu:[
        {list:[
          {font:{str:'&#xe613;',color:'#4da6f0'},des:'我的地址',href:'/self/address'}
        ]},
        {list:[
          {font:{str:'&#xe620;',color:'green'},des:'金币商城',href:'/more'},
          {font:{str:'&#xf008d;',color:'rgb(238, 55, 55)'},des:'分享拿20元现金',href:'/other'},
        ]},
        {list:[
          {font:{str:'&#xe71d;',color:'#4da6f0'},des:'我的客服',href:'/other'},
          {font:{str:'&#xe613;',color:'#4da6f0'},des:'下载饿了么APP',href:'/other'},
          {font:{str:'&#xe623;',color:'#4da6f0'},des:'规则中心',href:'/other'},
        ]}   
      ],
      name:'登录/注册',
      des:'登录后享受更多特权',
      href:'/login'
    }
  },
  mounted(){
    let bol=storage.get('isLogin');
    if(bol){
      this.name=this.$store.state.account.name;
      this.des=this.$store.state.account.tel;
      this.href="/self/info"
    }
  },
  directives:{
    icon:{
      bind(el,binding){
        el.innerHTML=binding.value.str;
        el.style.fontSize="0.2rem";
        el.style.color=binding.value.color;
      }
    }
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
.menu-box{
   margin-top:0.1rem;
   a{
      color:#333;
   }
   .menu-item{
      height:0.4rem;
      background:white;
      line-height:0.4rem;
      padding:0 0.1rem;
      >p{
         flex:1 1;
         padding-left:0.1rem;
         font-size:0.14rem;
      }
      .right{
         font-size:0.12rem;
      }
   }
}
.my-top{
   height:1.1rem;
   background-image: linear-gradient(90deg,#0af,#0085ff);
   padding:0.25rem 0.15rem;
   box-sizing: border-box;
   color:white;
   >img{
      width:0.6rem;
      height:0.6rem;
   }
   .login{
      flex:1 1;
      margin-left:0.1rem;
      justify-content: space-around;
   }
   .more{
      height:0.2rem;
      font-size:0.2rem;
      align-self: center;
   }
}
</style>