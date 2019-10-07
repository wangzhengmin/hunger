<template>
   <div class="find-box">
      <section class="row find-top">
         <router-link to="/more" class="flex-box">
            <div class="img-box other row">
               <div>
                  <p v-color="'rgb(255, 153, 0)'">金币商城</p>
                  <p class="one-des">0元好物在这里</p>
               </div>
               <img src="./images/find2.jpeg" alt="" class="img-other">
            </div>
         </router-link>
         <div class="flex-box">
            <a href="">
               <div class="img-box bor row">
                  <div>
                     <p v-color="'rgb(27, 169, 225)'">推荐有奖</p>
                     <p class="one-des">20元现金拿不停</p>
                  </div>
                  <img src="./images/find1.jpeg" alt="" class="img-small">
               </div>
            </a>
            <a href="">
               <div class="img-box row">
                  <div>
                     <p v-color="'rgb(237, 102, 96)'">周边优惠</p>
                     <p class="one-des">领取口碑好券</p>
                  </div>
                  <img src="./images/find3.jpeg" alt="" class="img-small">
               </div>
            </a>
         </div>
      </section>
      <section class="limit-box">
         <p class="find-title">限时好礼</p>
         <p class="limit-des">金币换豪礼</p>
         <div class="row sale-box">
            <router-link v-for="(s,k) in sale" :key="k" :to="s.href" class="limit-box">
               <img :src="s.img" alt="">
               <span class="limit-time">限时优惠</span>
               <p class="page-des">{{s.des}}</p>
               <p>
                  <span class="price">{{s.price}}金币</span>
                  <del>￥{{s.old}}</del>
               </p>
            </router-link>
         </div>
         <p class="more" @click="()=>this.$router.push({path:'/more'})">查看更多 ></p>
      </section>
   </div>
</template>

<script>
export default {
   data(){
      return{
         sale:[
            {href:'/find/privilege',img:require('./images/special1.jpeg'),des:'3元品质联盟红包',price:'90',old:3},
            {href:'/find/privilege',img:require('./images/special2.jpeg'),des:'6元品质联盟红包',price:'180',old:6},
            {href:'/find/privilege',img:require('./images/special3.jpeg'),des:'5元鲜果超市红包',price:'150',old:5}
         ]
      }
   },
   directives:{
      color:{
         bind(el,binding){
            el.style.color=binding.value;
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.find-box{
  height:100vh;
  background:#f5f5f5;
}
.find-top{
   background:white;
   .flex-box{
      flex:1 1;
      border-right: 1px solid #ededed;
   }
   .other{
      height:100%;
   }
   .bor{
      border-bottom: 1px solid #ededed;
   }
   .img-box{
      padding:0.2rem 0.1rem;
      justify-content: space-between;
      box-sizing: border-box;
      >img{
         width:0.64rem;
         height:0.64rem;
      }
      .img-small{
         width:0.38rem;
         height:0.38rem;
      }
      .img-other{
         align-self: flex-end;
      }
      .one-des{
         font-size:0.12rem;
         margin-top:0.05rem;
      }
   }
}
.limit-box{
   background:white;
}
.find-title{
   font-weight: 700;
   color:black;
   font-size:0.18rem;
   margin-top:0.1rem;
   line-height:0.18rem;
   padding:0.05rem 0;
   text-align: center;
}
.limit-des{
   text-align: center;
   font-size:0.12rem;
   color:#666;
}
.sale-box{
   padding:0.1rem;
}
.limit-box{
   position: relative;
   flex:1 1;
   >img{
      max-width:100%;
   }
   .limit-time{
      position: absolute;
      top:0;
      left:0;
      color: #fff;
      background: #413d3c;
      font-size:0.12rem;
   }
   .page-des{
      font-size:0.13rem;
      color:black;
      margin-bottom: 0.08rem;
   }
   .price{
      font-size:0.13rem;
      color: #ff5339;
   }
   del{
      margin-left:0.05rem;
      font-size:0.11rem;
   }
}
.more{
   text-align: center;
   font-size:0.12rem;
   color:#999;
   padding: 0.2rem 0;
}
</style>