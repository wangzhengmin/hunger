<template>
   <div>
      <section class="box col" v-if="!isLogin">
         <img src="./images/people.png" alt="">
         <p>登录后查看外卖订单</p>
         <button class="login" @click="()=>this.$router.push({path:'/login'})">立即登录</button>
      </section>
      <section v-if="isLogin" class="order-box">
         <div class="order-item" v-for="(o,k) in orders" :key="k">
            <div class="row" style="border-bottom: 1px solid #eee;">
               <router-link :to="{path:'/business',query:{gid:o.gid}}">
                  <img :src="o.logo" alt="" class="order-logo">
               </router-link>
               <div class="item-des">
                  <div class="bord">
                     <div class="row-between">
                        <p class="row">
                           <span class="text-hide name">{{o.title}}</span>
                           <span class="iconfont">&#xe63a;</span>
                        </p>
                        <span class="status">{{o.action | action}}</span>
                     </div>
                     <p class="time">{{o.time | time}}</p>
                  </div>
                  <div class="row-between" style="padding:0.15rem 0">
                     <span class="order-des">{{o | message}}</span>
                     <span style="font-weight:700">￥{{o.cost}}</span>
                  </div>
               </div>
            </div>
            <div class="row-end">
               <span class="font-blue" v-if="o.action=='finish'" @click="again(k)">再来一单</span>
               <span class="font-red" v-if="o.action=='finish'">评价得金币</span>
               <span class="font-blue" v-if="o.action=='await'" @click="confirm(k)">确认送达</span>
            </div>
         </div>
      </section>
   </div>
</template>

<script>
import storage from '@/module/storage.js';
export default {
   data(){
      return{
         isLogin:false,
         orders:[]
      }
   },
   mounted(){
      this.isLogin=storage.get('isLogin')||false;
      if(this.isLogin){
         document.documentElement.style.background="#f5f5f5";
         this.orders=this.$store.state.account.orders;
        
      }    
   },
   methods:{
      confirm(key){
         this.$store.commit({type:'changeAccount',action:'finish',key:key});
      },
      again(key){
         let {logo,gid,charge,order,title,orders,cost}=this.orders[key];
         let data={logo,gid,charge,order,title,orders,cost}
         this.$store.commit({type:'changeOrder',action:'add',data});
         this.$router.push({path:'/business',query:{gid}});
      }
   },
   filters:{
      time(value){
         function zero(value){
            if(value<10)
               return '0'+value;
            else
               return value;
         }
         let now=new Date().getTime();
         if((now-value)/(24*1000*60*60)>1){
            let date=new Date(value);
            return  `${date.getFullYear()}-${zero(date.getMonth()+1)}-${zero(date.getDate())} ${zero(date.getHours())}:${zero(date.getHours())}`
         }else{
            if(Math.floor((now-value)/3600000)>1)
               return `${Math.floor((now-value)/3600000)}小时${Math.floor((now-value)/60000%60)}分钟前`
            if(Math.floor((now-value)/60000%60)>1)
               return `${Math.floor((now-value)/60000%60)}分钟前`
            else
               return `刚刚`
         }
      },
      message(value){
         if(value.order>1){
            return `${value.orders[0].title}等${value.order}件商品`
         }else{
            return value.orders[0].title;
         }
      },
      action(value){
         let info={
            await:'等待送达',
            finish:'订单已完成',
         }
            return info[value];
      }
   },
    beforeRouteLeave(to,from,next){
      next();
      document.documentElement.style.background="#fff"
   }
}
</script>

<style lang="scss" scoped>
.box{
   height:100vh;
   padding-bottom:0.5rem;
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
   >img{
      width:2.25rem;
      height:auto;
      object-fit:cover;
   }
   .login{
      background:rgb(23, 170, 23);
      color:white;
      padding:0.05rem 0.1rem;
      margin-top:0.1rem;
      border:none;
   }
}
.order-box{
   background-color: #f5f5f5;
   padding-bottom: 0.7rem;
   .order-item{
      background:white;
      padding:0.15rem;
      margin-top:0.1rem;
      .font-red, .font-blue{
         padding:0.05rem;
         margin:0.1rem 0.05rem 0 0;
      }
      .font-red{
         color: #ff5339;
         border:1px solid #ff5339;
      }
      .font-blue{
         color: #2395ff;
         border:1px solid #2395ff;
      }
      .order-logo{
         width:0.3rem;
         height:0.3rem;
      }
      .item-des{
         flex:1 1;
         .bord{
            border-bottom: 1px solid #eee;
            padding-bottom: 0.1rem;
            margin-left:0.1rem;
            .time{
               color:#999;
            }
            .name{
               max-width:1.5rem;
               font-size:0.17rem;
               line-height: 0.18rem;
               color:#333;
            }
            .iconfont{
               font-size:0.18rem;
               color:#999;
            }
            .status{
               flex:0 0 0.7rem;
            }
         }
      }
   }
    
}

</style>