<template>
   <div class="address">
      <div class="box-head">
        <span class="iconfont" @click="hide()">&#xe68a;</span>
         选择收货地址
         <span class="position-right" @click="$router.push({path:'/address/add'})">新增地址</span>
      </div>
      <section>
         <p class="address-des">当前地址</p>
         <div class="row-between" style="padding:0.15rem 0.1rem;background:white">
            <span class="font-big">南昌理工学院(英雄主校区)</span>
            <span style="color: #2395ff;font-size:0.15rem">重新定位</span>
         </div>
      </section>
      <section>
         <p class="address-des">收货地址</p>
         <div class="address-item">
            <p>
               <span class="font-big">王</span>
               <span>先生 </span>
               <span> 13657086538</span>
            </p>
            <p>南昌理工学院(英雄主校区)</p>
         </div>
         <div class="address-item">
            <p>
               <span class="font-big">王</span>
               <span>先生 </span>
               <span> 13657086538</span>
            </p>
            <p>南昌理工学院(英雄主校区)</p>
         </div>
      </section>
  </div>
</template>
 
<script>
export default {
   name:'address-view',
   methods:{
      hide(){
         this.$emit('hide')
      }
   }
}
</script>

<style lang="scss" scoped>
.address{
   height:100vh;
   width:100vw;
   position: absolute;
   top:0;
   left:0;
   background-color: #f4f4f4;
   z-index:999;
   box-sizing: border-box;
   .address-des{
      padding:0.1rem 0.1rem;
   }
   .address-item{
      font-size:0.12rem;
      background:white;
      padding:0.15rem 0.1rem;
      >p{
         line-height:0.2rem;
      }
      .font-big{
         margin-right:0.05rem;
      }
   }
}
</style>