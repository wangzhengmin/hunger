<template>
  <div id="app">
    <router-view></router-view>
    <router-view name="tab"></router-view>
  </div>
</template>

<script>
export default {
  data(){
    return{
      mes:''
    }
  }
}
</script>

<style>

</style>
