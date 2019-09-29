<template>
  <div>
      <van-cell is-link @click="show=true">
         <h1 class="title">秘制手撕鸡饭<span class="arrow"></span></h1>
         <p class="title-des">
            <span>评分4.6</span>
            <span>月售258单</span>
            <span>商家配送约40分钟</span>
         </p>
      </van-cell>
      <van-popup v-model="show" >
         <div class="shop-des">
            <h1 class="title">秘制手撕鸡饭</h1>
            <div class="row wzm">
               <div>
                  <p class="shang">4.6</p>
                  <p class="xia">评分</p>
               </div>
               <div>
                  <p class="shang">258单</p>
                  <p class="xia">月售</p>
               </div>
               <div>
                  <p class="shang">商家配送</p>
                  <p class="xia">约40分钟</p>
               </div>
               <div>
                  <p class="shang">4</p>
                  <p class="xia">配送费</p>
               </div>
               <div>
                  <p class="shang">4.6km</p>
                  <p class="xia">距离</p>
               </div>
            </div>
            <p class="notice row"><span>公告</span></p>
            <div class="notice-box">
               <p>欢迎光临，用餐高峰期请提前下单，谢谢。</p>
            </div>
         </div>
      </van-popup>
   </div>
</template>

<script>
export default {
   name:'shop-head',
   data(){
      return{
         show:false
      }
   }
}
</script>

<style lang="scss" scoped>
.title{
   color: #333;
   font-weight:700;
   font-size:0.2rem;
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
.arrow{
   border:0.07rem solid;
   height:0;
   display: inline-block;
   border-color:transparent transparent transparent #666;
   margin-left:0.1rem;
}
.shop-des{
   padding:0.2rem;
   width:80vw;
   .wzm{
      >div{
         flex: 1 1;
         font-size:0.12rem;
      }
      .xia{
         color:#999;
      }
      .shang{
         color:#333;
         font-size:0.15rem;
         font-weight: 700;
         margin-bottom: 0.05rem;
      }
   }
   .notice{
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
   .notice-box{
      font-size:0.13rem;
      text-align: center;
   }
}
</style>