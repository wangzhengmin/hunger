<template>
  <div class="goods-item row">
     <div class="item-logo">
        <img :src="this.$props.list.logo" alt="">
     </div>
     <div class="des-box">
        <p class="title">{{this.$props.list.title}}</p>
        <div class="row sale-box">
           <van-rate v-model="this.$props.list.grade" :size="12" readonly allow-half/>
           <span class="grade">{{this.$props.list.grade}}</span>
           <span>月售{{this.$props.list.num}}单</span>
        </div>
        <div class="row sale-des">
           <p>￥{{this.$props.list.start}}起送 | 配送费￥{{this.$props.list.charge}}</p>
           <p>{{this.$props.list.distance | trans}} | {{this.$props.list.time}}分钟</p>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   name:'home-item',
   props:{
      list:{
         require:true
      }
   },
   filters:{
      trans(value){
         if(value>=1)
            return value+'km';
         else
            return value*1000+'m';
      }
   }
}
</script>

<style lang="scss" scoped>
i{
   display: block;
}
.goods-item{
   padding:0.1rem;
   color:#666;
   .item-logo{
      >img{
         width:0.55rem;
         height:0.55rem;
      }
   }
   .des-box{
      width:100%;
      padding-left:0.1rem;
      font-size:0.1rem;
      .title{
         color:rgb(14, 13, 13);
         font-weight: 700;
         font-size:0.14rem;
         margin-bottom: 0.05rem;
      }
      .sale-box{
         height:0.13rem;
         line-height: 0.13rem;
         margin-bottom: 0.05rem;
         .grade{
            font-size:0.12rem;
            line-height: 0.12rem;
            margin:0 0.05rem;
         }
      }
      .sale-des{
         justify-content: space-between;
      }
   }
}
</style>