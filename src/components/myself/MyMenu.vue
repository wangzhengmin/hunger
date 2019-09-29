<template>
  <section class="menu-box">
      <router-link  v-for="(i,k) in this.$props.list" :key="k" :to="i.href">
         <div class="menu-item row">
            <span class="iconfont" v-icon="i.font"></span>
            <p>{{i.des}}</p>
            <span class="iconfont right">&#xe63a;</span>
         </div>
      </router-link>
  </section>
</template>

<script>
export default {
   name:'my-menu',
   props:{
      list:{
         require:true
      }
   },
   directives:{
    icon:{
      bind(el,binding){
        el.innerHTML=binding.value.str;
        el.style.fontSize="0.2rem";
        el.style.color=binding.value.color;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.menu-box{
   margin-top:0.1rem;
   a{
      color:#333;
   }
   .menu-item{
      height:0.4rem;
      background:white;
      line-height:0.4rem;
      padding:0 0.1rem;
      >p{
         flex:1 1;
         padding-left:0.1rem;
         font-size:0.14rem;
      }
      .right{
         font-size:0.12rem;
      }
   }
}
</style>