<template>
  <div>
    <section class="row-center" v-if="list.length==0">
      <img src="./images/搜索.png" alt="">
      <div>
        <p class="no-result">附近没有搜索结果</p>
        <p class="font-small">换个关键词试试吧</p>
      </div>
    </section>
    <section v-if="list.length>0">
      <business-filter></business-filter>
      <div v-for="(l,k) in list" :key="k">
        <router-link :to="{path:'/business',query:{gid:l.gid}}">
          <business-item :list="l" color=true :keyword="$route.query.keyword"></business-item>
        </router-link>
      </div>
    </section>
    <section class="recommond">
      <p class="font-big pole">为你推荐</p>
      <div v-for="(l,k) in recommond" :key="k">
        <router-link :to="{path:'/business',query:{gid:l.gid}}">
          <business-item :list="l"></business-item>
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import BusinessFilter from '@/components/home/BusinessFilter.vue';
import BusinessItem from '@/components/home/BusinessItem.vue';
export default {
  data(){
    return{
      list:[],
      recommond:[]
    }
  },
  mounted(){
    let keyword=this.$route.query.keyword;
    let patt=new RegExp(`${keyword}`);
    let list=this.$store.state.list.filter((value)=>{
      return patt.test(value.title);
    })
    this.list=list;
    let recommond=this.$store.state.list.filter((value)=>{
      return !patt.test(value.title);
    })
    this.recommond=recommond;
  },
  components:{
    BusinessFilter,
    BusinessItem
  },
}
</script>

<style lang="scss" scoped>
.filter-box{
  top:0.9rem;
}
.row-center{
  padding:0.3rem 0;
  >img{
    width:24vw;
    height:auto;
  }
  .no-result{
    color: #666;
    font-size: 0.18rem;
    margin-bottom:0.1rem;
  }
}
.recommond{
  background: #f5f5f5;
  .pole{
    height:0.5rem;
    line-height:0.5rem;
    text-align: center;
  }
}
</style>