<template>
  <div>
      <header class="bus-head">
         <span class="iconfont" @click="()=>this.$router.go(-1)">&#xe68a;</span>
         <img src="./images/item1.jpeg" alt="" class="business-logo">
      </header>
      <!-- 商家信息 -->
      <section style="padding-top:0.3rem;">
         <div @click="business=true">
            <h1 class="title">秘制手撕鸡饭<span class="triangle"></span></h1>
            <p class="title-des">
               <span>评分4.6</span>
               <span>月售258单</span>
               <span>商家配送约40分钟</span>
            </p>
         </div>
         <div class="discount row-between">
            <ul>
               <li>15减13</li>
               <li>40减20</li>
            </ul>
            <span @click="discount=true">4个优惠</span>
         </div>
         <p class="notice text-hide">欢迎光临，用餐高峰期请提前下单，谢谢。</p>
      </section>
      <section class="business-nav row">
         <a href="javascript:void(0)">
         <span :class="[current=='business-order'?'business-action':'']" @click="current='business-order'">点餐</span>
         </a>
         <a href="javascript:void(0)">
         <span :class="[current=='business-argu'?'business-action':'']" @click="current='business-argu'">评价</span>
         </a>
         <a href="javascript:void(0)">
         <span :class="[current=='business-des'?'business-action':'']" @click="current='business-des'">商家</span>
         </a>
      </section>
      <component :is="current"></component>
      <!-- 配送信息弹窗 -->
      <van-popup v-model="business">
         <div class="business-des">
            <h2 class="title">秘制手撕鸡饭</h2>
            <div class="row" style="margin-top:0.1rem">
               <div class='box'>
                  <p class="business-title">4.6</p>
                  <p class="key">评分</p>
               </div>
               <div class='box'>
                  <p class="business-title">258单</p>
                  <p class="key">月售</p>
               </div>
               <div class='box'>
                  <p class="business-title">商家配送</p>
                  <p class="key">约40分钟</p>
               </div>
               <div class='box'>
                  <p class="business-title">4元</p>
                  <p class="key">配送费</p>
               </div>
               <div class='box'>
                  <p class="business-title">4.6km</p>
                  <p class="key">距离</p>
               </div>
            </div>
            <p class="notice-other row"><span>公告</span></p>
            <div class="notice">
               <p>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
            </div>
         </div>
      </van-popup>
      <!-- 优惠弹窗 -->
      <van-popup v-model="discount" :style="{height:'40%'}" position="bottom">
         <div style="padding:0.2rem">
            <p style="margin-bottom:0.1rem;font-size:0.13rem"><span class="tag-red">满减</span>满15元减13元，满40元减20元</p>
            <p style="margin-bottom:0.1rem;font-size:0.13rem"><span class="tag-red">折扣</span>折扣商品48折起</p>
            <p style="margin-bottom:0.1rem;font-size:0.13rem"><span class="tag-green">新客</span>本店新客用户立减1元</p>
            <p style="margin-bottom:0.1rem;font-size:0.13rem"><span class="tag-green">首单</span>新用户下单立减10元</p>
         </div>
      </van-popup>
  </div>
</template>

<script>
import BusinessOrder from './BusinessOrder.vue'
import BusinessArgu from './BusinessArgu.vue'
import BusinessDes from './BusinessDes.vue'
export default {
   data(){
      return{
         business:false,
         discount:false,
         current:'business-order'
      }
   },
   components:{
      BusinessOrder,
      BusinessArgu,
      BusinessDes
   },
   beforeRouteEnter(to,from,next){
      if(to.query.gid)
         next();
      else
         next('/home');
  },
}
</script>

<style lang="scss" scoped>
.bus-head{
   height:1rem;
   background-color: rgba(119,103,137,.43);
   padding-top:0.1rem;
   position: relative;
   .iconfont{
      color:white;
      margin:0.1rem;
      font-size:0.2rem;
   }
   .business-logo{
      width:0.7rem;
      height:0.7rem;
      position: absolute;
      bottom:0;
      left:50%;
      transform: translate(-50%,0.1rem);
      z-index: 999;
   }
}
.title{
   text-align: center;
}
.title-des{
   font-size:0.12rem;
   text-align: center;
   color: #666;
   margin-top:0.03rem;
   >span{
      margin-left:0.05rem;
   }
}
.triangle{
   border:0.07rem solid;
   height:0;
   display: inline-block;
   border-color:transparent transparent transparent #666;
   margin-left:0.1rem;
}
.discount{
   padding:0.1rem 0.4rem 0;
   font-size:0.13rem;
   color:#999;
   li{
      float:left;
      margin-right:0.1rem;
      color: rgb(255, 75, 51);
      background-color: rgb(255, 255, 255);
      border: 1px solid rgb(255, 201, 193);
   }
}
.notice{
   font-size:0.13rem;
   text-align: center;
   padding:0 0.3rem;
   color:#999;
   margin-top:0.1rem;
}
.business-des{
   padding:0.2rem;
   width:80vw;
   .box{
      flex:1 1;
      text-align: center;
      font-size:0.12rem;
      color:#999;
   }
   .notice-other{
      text-align: center;
      color:#999;
      font-size:0.13rem;
      height:0.3rem;
      margin:0 auto;
      line-height: 0.3rem;
      justify-content: center;
      &::after{
         content:'';
         width:0.1rem;
         background:#999;
         height:0.01rem;
         display:block;
         align-self: center;
         line-height:0.8rem;
         margin-left:0.05rem;
      }
      &::before{
         margin-right:0.05rem;
         content:'';
         width:0.1rem;
         background:#999;
         height:0.01rem;
         display:block;
         align-self: center;
         line-height:0.8rem;
         margin-left:0.05rem;
      }
   }
}
.business-nav{
  position: sticky;
  top:0;
  left:0;
  text-align: center;
  font-weight:400;
  background:white;
  z-index: 999;
  font-size:0.15rem;
  >a{
    color: #666;
    flex:1 1;
    height:0.4rem;
    line-height: 0.4rem;
    >span{
      display: inline-block;
      height:100%;
    }
    .business-action{
      border-bottom:0.02rem solid rgb(39, 191, 230);
      color:#333;
      font-weight: 700;
    }
  }
}
</style>