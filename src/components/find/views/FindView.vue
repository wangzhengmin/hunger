<template>
  <div class="find-box">
    <div>
      <find-top></find-top>
    </div>
    
    <find-limit></find-limit>
  </div>
</template>

<script>
import FindTop from '../FindTop.vue';
import FindLimit from '../FindLimit.vue';

export default {
  components:{
    FindTop,
    FindLimit
  }
}
</script>

<style lang="scss" scoped>
.find-box{
  height:100vh;
  background:#f5f5f5;
}
</style>