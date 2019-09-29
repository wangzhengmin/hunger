<template>
  <div>
     <div class="shop-head">
        <span class="iconfont" @click="back()">&#xe68a;</span>
        <img src="./images/item1.jpeg" alt="" class="head-logo">
     </div>
     <div class="shop-box">
        <shop-head></shop-head>
     </div>
  </div>
</template>

<script>
import ShopHead from './ShopHead.vue';

export default {
   name:'shop-top',
   data(){
      return{
         show:false
      }
   },
   components:{
      ShopHead
   },
   methods:{
      back(){
         this.$router.go(-1);
      }
   }
}
</script>

<style lang="scss" scoped>
.shop-head{
   height:1rem;
   background-color: rgba(119,103,137,.43);
   padding-top:0.1rem;
   position: relative;
   .iconfont{
      color:white;
      margin:0.1rem;
      font-size:0.2rem;
   }
   .head-logo{
      width:0.7rem;
      height:0.7rem;
      position: absolute;
      bottom:0;
      left:50%;
      transform: translate(-50%,0.1rem);
      z-index: 999;
   }
}
.shop-box{
   padding-top:0.3rem;
}
</style>