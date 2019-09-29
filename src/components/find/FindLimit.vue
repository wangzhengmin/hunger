<template>
  <div class="limit-box">
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
     <p class="more" @click="toMore()">查看更多 ></p>
  </div>
</template>

<script>
export default {
   name:'find-limit',
   data(){
      return{
         sale:[
            {href:'/find/privilege',img:require('./images/special1.jpeg'),des:'3元品质联盟红包',price:'90',old:3},
            {href:'/find/privilege',img:require('./images/special2.jpeg'),des:'6元品质联盟红包',price:'180',old:6},
            {href:'/find/privilege',img:require('./images/special3.jpeg'),des:'5元鲜果超市红包',price:'150',old:5}
         ]
      }
   },
   methods:{
      toMore(){
         this.$router.push({path:'/find/more'});
      }
   }
}
</script>

<style lang="scss" scoped>
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