<template>
   <div>
      <div class="account-head">
        <span class="iconfont" @click="()=>this.$router.go(-1)">&#xe68a;</span>
         确认订单
      </div>
      <div class="account-body">
         <section class="addr" @click="$router.push({path:'/address/checkout'})">
            <p>订单配送至</p>
            <p class="row">
              <span class="adr-bold">{{this.current.addr+this.current.door}}</span>
              <span class="iconfont">&#xe63a;</span>
            </p>
            <p>{{this.current.name}}({{this.current.sex}}) {{this.current.tel}}</p>
         </section>
         <section class="account-des">
            <div class="row">
               <span>送达时间</span>
               <span class="blue">尽快送达(14:40送达)</span>
            </div>
            <div class="row">
               <span>支付方式</span>
               <span class="blue">在线支付</span>
            </div>
         </section>
         <section class="account-order">
            <p class="title">好再来烧烤</p>
            <ul v-if="this.order.order">
               <li v-for="(l,k) in this.order.orders" :key="k" class="row space">
                  <img :src="l.img" alt="">
                  <p class="item-title">{{l.title}}</p>
                  <span class="num">x{{l.order}}</span>
                   <div class="pri">
                     <del class="old" v-if="l.discount">{{l.price*l.order}}</del>
                     <span class="price" v-if="!l.discount">￥{{l.price*l.order}}</span>
                     <span class="price" v-if="l.discount">￥{{(l.price*l.discount/10)*l.count+l.price*(l.order-l.count)}}</span>
                  </div>
               </li>
            </ul>
            <div class="row space-between" style="border-bottom:1px solid #999">
               <span>红包</span>
               <p>
                  <span style="background-image: linear-gradient(106deg,#ff7417,#ff3c15);padding:0.02rem;color:white;font-size:0.13rem">0个可用</span>
                  <span class="iconfont" style="font-size:0.15rem;color:#999">&#xe63a;</span>
               </p>
            </div>
            <div class="row space-between">
               <span class="placehoder">优惠说明</span>
               <p class="cost" style="font-size:0.18rem"><span style="font-size:0.14rem">小计 ￥</span>{{this.order.cost}}</p>
            </div>
         </section>
         <section class="order-choice">
            <div class="row">
               <span>餐具份数</span>
               <span class="placehoder">未选择<span class="iconfont">&#xe63a;</span></span>
            </div>
             <div class="row">
               <span>订单备注</span>
               <span class="placehoder">口味、偏好<span class="iconfont">&#xe63a;</span></span>
            </div>
             <div class="row">
               <span>发票信息</span>
               <span class="placehoder">该店不支持线上开票，请电话联系商户<span class="iconfont">&#xe63a;</span></span>
            </div>
         </section>
      </div>
      <div class="pay row-between">
         <div class="row">        
            <p style="color:white;font-size:0.17rem;margin:0 0.07rem">￥{{this.order.cost}}</p>
            <span style="margin-right:0.07rem"> | </span>
            <p>已优惠￥2</p>
         </div>
         <a href="javascript:void(0)" class="pay-btn" @click="toPay()">去支付</a>
      </div>
   </div>
</template>

<script>
import { Dialog } from 'vant';
import storage from '@/module/storage.js';
export default {
   data(){
      return{
         order:'',
         current:''
      }
   },
   mounted(){
      this.current=this.$store.state.account.address[this.$store.state.current];
      if(this.$route.query.gid){
         let gid=this.$route.query.gid;
         this.order=this.$store.state.orders['gid'+gid];
      }else{
         this.$router.push({path:'/home'});
      }
   },
   methods:{
      toPay(){
         let time=new Date().getTime();
         this.order.time=time;
         this.order.action='await';
         let order=this.order;
         let gid=order.gid;
         this.$store.commit({type:'changeAccount',order,action:'add-order'});
         this.$store.commit({type:'changeOrder',gid,action:'remove'})
         this.$router.push({path:'/order'});
      }
   },
   beforeRouteEnter(to,from,next){
      if(storage.get('isLogin'))
         next();
      else{
         Dialog.confirm({
            title: '未登录',
            message: '请先登录'
         }).then(() => {
            next({path:'/login'});
         }).catch(() => {});
      }
   }
}
</script>

<style lang="scss" scoped>
.blue{
   color: #2395ff;
}
.account-head{
   background: linear-gradient(90deg,#0af,#0085ff);
   font-weight: 700;
   color:white;
   line-height: 0.45rem;
   text-align: center;
   font-size:0.18rem;
   position: fixed;
   top:0;
   left:0;
   width:100%;
   .iconfont{
      position: absolute;
      left:0.1rem;
      font-size:0.18rem;
      font-weight: normal;
   }
}
.account-body{
   min-height:100vh;
   padding-top:0.45rem;
   box-sizing: border-box;
   background-image: linear-gradient(0deg,#f5f5f5,#f5f5f5 45%,hsla(0,0%,96%,.3) 75%,hsla(0,0%,96%,0)),linear-gradient(270deg,#0085ff,#0af);
   .addr{
      color:white;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      padding:0.15rem;
     .iconfont{
         flex:0 0 auto;
         line-height: 0.4rem;
         font-size:0.15rem;
      }
      .adr-bold{
         flex:1 1;
         font-weight: 700;
         font-size:0.23rem;
         line-height: 0.4rem;
         overflow: hidden;
         text-overflow: ellipsis;
      }
   }
   .account-des{
      margin:0.05rem;
      background: white;
      >div{
         padding:0.15rem;
         justify-content: space-between;
      }
   }
   .account-order{
      margin:0.05rem;
      background: white;
      padding:0 0.15rem;
      margin-bottom:0.15rem;
      .title{
         color: #333;
         font-weight: 700;
         font-size:0.18rem;
         line-height: 0.18rem;
         padding:0.15rem 0;
         border-bottom:1px solid #eee;
      }
      .space{
         padding:0.1rem 0;
         border-bottom:1px solid #eee;
          line-height:0.4rem;
         >img{
            width:0.4rem;
            height:0.4rem;
            align-self: center;
         }
         .item-title{
            flex:0 0 50%;
            margin-left:0.05rem;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
         }
         .num{
            flex:0 0 0.3rem;
            margin-left:0.05rem;
         }
      }
      
   }
   .order-choice{
      margin:0.05rem;
      background: white;
      >div{
         padding:0.15rem;
         justify-content: space-between;
      }
      .placehoder{
         font-size:0.13rem;
         color:#999;
         .iconfont{
            font-size:0.15rem;
            margin-left:0.05rem;
         }
      }
   }
}
.space-between{
   padding:0.15rem 0;
   justify-content: space-between;
}
.placehoder{
   font-size:0.13rem;
   color:#999;
}
.pay{
   width:100%;
   height: 0.4rem;
   background: #3c3c3c;
   position: fixed;
   line-height: 0.4rem;
   left:0;
   bottom:0;
   color:#999;
   .pay-btn{
      color:white;
      font-size:0.17rem;
      flex: 0 0 1rem;
     background: #00e067;
      text-align: center;
   }
}
</style>