<template>
  <div class="goods-item row">
     <div class="item-logo">
        <img :src="data.logo" alt="">
        <span class="count" v-if="data.order>0">{{data.order}}</span>
     </div>
     <div class="des-box">
        <p class="title" v-color:[this.$props.color]="this.$props.keyword">{{this.$props.list.title}}</p>
        <div class="row sale-box">
           <van-rate v-model="data.grade" :size="12" readonly allow-half/>
           <span class="grade">{{data.grade}}</span>
           <span>月售{{data.num}}单</span>
        </div>
        <div class="row sale-des">
           <p>￥{{data.start}}起送 | 配送费￥{{data.charge}}</p>
           <p>{{data.distance | trans}} | {{data.time}}分钟</p>
        </div>
     </div>
  </div>
</template>

<script>
export default {
   name:'business-item',
   data(){
      return{
         data:{}
      }
   },
   mounted(){
      this.data=this.$props.list;
   },
   props:{
      list:{
         required:true
      },
      color:{
         default:false
      },
      keyword:String
   },
   filters:{
      trans(value){
         if(value>=1)
            return value+'km';
         else
            return value*1000+'m';
      }
   },
   directives:{
      color:{
         bind(el,binding){
            if(binding.arg){
               el.innerHTML=el.innerHTML.replace(binding.value,`<span style='color:#118dff;'>${binding.value}</span>`)
            }
         }
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
      position: relative;
      >img{
         width:0.55rem;
         height:0.55rem;
      }
      .count{
         top:-0.05rem;
         right:-0.05rem;
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