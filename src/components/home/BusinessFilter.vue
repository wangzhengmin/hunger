<template>
   <div class="filter-box row">
      <a href="javascript:void(0)">综合排序</a>
      <a href="javascript:void(0)">距离最近</a>
      <a href="javascript:void(0)">品质联盟</a>
      <a href="javascript:void(0)">筛选</a>
   </div>
</template>

<script>
export default {
   name:'business-filter'
}
</script>

<style lang="scss" scoped>
.filter-box{
   font-size:0.15rem;
   position: sticky;
   background: white;
   z-index: 999;
   top:0.54rem;
   >a{
      color:#666;
      flex:1 1;
      display: block;
      text-align: center;
      padding:0.1rem 0;
   }
}
</style>