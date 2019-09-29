<template>
  <div class="row find-top">
     <a href="" class="flex-box">
         <div class="img-box other row">
            <div>
               <p v-color="'rgb(255, 153, 0)'">金币商城</p>
               <p class="one-des">0元好物在这里</p>
            </div>
            <img src="./images/find2.jpeg" alt="" class="img-other">
         </div>
     </a>
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
  </div>
</template>

<script>
export default {
   name:'find-top',
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
</style>