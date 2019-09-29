<template>
  <div>
     <div class="row more-top">
        <a href="javascript:void(0)" class="more-a row">
           <img src="../images/zhuan.png" alt="">
           金币
           <span style="color:#ff6000;margin-left:0.05rem">{{num}}</span>
         </a>
        <a href="" class="more-a row">
           <img src="../images/下载.png" alt="">
           兑换记录
         </a>
      </div>
      <img src="../images/chao.jpg" alt="" class="more-logo">
      <p class="all">大家都在兑</p>
      <div class="row-wrap">
         <div class="more-item" v-for="(l,k) in list" :key="k">
            <p>{{l.title}}</p>
            <p class="font-small">
               <span class="theme-color">{{l.price}}</span>金币
               <span v-if="l.discount" style="background-color: #f0d98d;color:white">超级会员8折</span>
            </p>
            <img :src="l.img" alt="">
         </div>
      </div>
      <section class="more-end">
         <p>*兑换项和活动皆与设备生产商Apple Inc.无关</p>
         <p>合作请联系：ejifen@ele.me</p>
      </section>
  </div>
</template>

<script>
export default {
   data(){
      return{
         num:0,
         list:[
            {title:'15元品质联盟专享红包',price:360,discount:true,img:require('../images/pri1.jpg')},
            {title:'5元品质联盟专享红包',price:72,discount:false,img:require('../images/pri2.jpg')},
            {title:'6元品质联盟专享红包',price:144,discount:true,img:require('../images/pri3.jpg')},
            {title:'6元品质联盟专享红包',price:360,discount:false,img:require('../images/pri1.jpg')},
            {title:'8元品质联盟专享红包',price:360,discount:true,img:require('../images/pri3.jpg')},
            {title:'15元品质联盟专享红包',price:160,discount:false,img:require('../images/pri2.jpg')},
            {title:'15元品质联盟专享红包',price:360,discount:false,img:require('../images/pri1.jpg')},
            {title:'15元品质联盟专享红包',price:360,discount:false,img:require('../images/pri1.jpg')},
         ]
      }
   }
}
</script>

<style lang="scss" scoped>
.more-top{
   height:0.2rem;
   line-height: 0.2rem;
   padding:0.2rem 0;
   .more-a{
      color: #333;
      flex:1 1;
      justify-content: center;
      border-right: 1px solid #e5e5e5;
      >img{
         width:0.2rem;
         height:0.2rem;
         align-self: center;
         margin-right:0.05rem;
      }
   }
}
.more-logo{
   max-width: 100%;
}
.all{
   color: #666;
   font-size:0.13rem;
   padding-left:0.2rem;
   line-height: 0.3rem;
}
.more-item{
   width:50%;
   padding:0.15rem;
   box-sizing: border-box;
   >img{
      max-width: 100%;
   }
   .theme-color{
    color: #ff6000 !important;
    margin-right:0.05rem;
   }
   .font-small{
      font-size:0.12rem;
      color: #999;
      margin-top:0.05rem;
   }
}
.more-end{
   >p{
      font-size: 0.1rem;
      text-align: center;
      color: rgb(143, 132, 132);
   }
}
</style>