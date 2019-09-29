<template>
  <div class="sort-box">
     <a href="#">
         <div class="sort-item row">
            <div>
               <p class="title">品质套餐</p>
               <p class="des">搭配齐全吃得好</p>
               <p class="away">立即抢购 ></p>
            </div>
            <img src="./images/sort.png" alt="">
         </div>
     </a>
  </div>
</template>

<script>
export default {
   name:'home-notice'
}
</script>

<style lang="scss" scoped>
.sort-box{
   padding:0 0.1rem;
   .sort-item{
      padding:0.1rem;
      background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      justify-content: space-between;
      >img{
         width:1.2rem;
         height:0.8rem;
      }
      .title{
         font-size:0.14rem;
         font-weight: 600;
         color:black;
         margin-bottom:0.02rem;
      }
      .des{
         color:#777;
         font-size:0.12rem;
         margin-bottom:0.05rem;
      }
      .away{
         font-size:0.1rem;
         color: #af8260;
         font-weight: 700;
      }
   }
}
</style>