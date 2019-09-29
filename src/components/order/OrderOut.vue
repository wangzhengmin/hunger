<template>
  <div class="box col">
     <img src="./images/people.png" alt="">
     <p>登录后查看外卖订单</p>
     <button class="login" @click="toLogin()">立即登录</button>
  </div>
</template>

<script>
export default {
   name:'order-out',
   methods:{
      toLogin(){
         this.$router.push({path:'/login'})
      }
   }
}
</script>

<style lang="scss" scoped>
.box{
   height:100vh;
   padding-bottom:0.5rem;
   align-items: center;
   justify-content: center;
   box-sizing: border-box;
   >img{
      width:2.25rem;
      height:auto;
      object-fit:cover;
   }
   .login{
      background:rgb(23, 170, 23);
      color:white;
      padding:0.05rem 0.1rem;
      margin-top:0.1rem;
      border:none;
   }
}
</style>