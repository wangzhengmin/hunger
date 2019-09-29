<template>
  <div class="row tab">
    <router-link to="/home" class="col" active-class="active">
      <span class="iconfont">&#xe630;</span>
      <span>首页</span>
    </router-link >
    <router-link to="/find" class="col" active-class="active">
    <span class="iconfont">&#xe601;</span>
      <span>发现</span>
    </router-link>
    <router-link to="/order" class="col" active-class="active">
    <span class="iconfont">&#xe602;</span>
      <span>订单</span>
    </router-link>
    <router-link to="/myself" class="col" active-class="active">
      <span class="iconfont">&#xe608;</span>
      <span>我的</span>
    </router-link>
  </div>
</template>

<script>
export default {
  name:'tab-bar'
}
</script>

<style lang="scss" scoped>
.tab{
  bottom: 0;
  left:0;
  position: fixed;
  padding-top:1.2vw;
  width:100%;
  text-align: center;
  padding-bottom: 1.2vw;
  z-index:9999;
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  >a{
    flex:1 1;
    font-size:0.12rem;
  }
  .active{
    color: #0089dc;
  }
}
</style>