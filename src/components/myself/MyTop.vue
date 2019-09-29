<template>
  <router-link to="/login" class="my-top row" tag="section">
     <img src="./images/logo.png" alt="">
     <div class="login col">
        <p class="big">登录/注册</p>
        <p class="small">登录后享受更多特权</p>
     </div>
     <span class="iconfont more">&#xe63a;</span>
  </router-link>
</template>

<script>
export default {
   name:'my-top'
}
</script>

<style lang="scss" scoped>
.my-top{
   height:1.1rem;
   background-image: linear-gradient(90deg,#0af,#0085ff);
   padding:0.25rem 0.15rem;
   box-sizing: border-box;
   color:white;
   >img{
      width:0.6rem;
      height:0.6rem;
   }
   .login{
      flex:1 1;
      margin-left:0.1rem;
      justify-content: space-around;
      .big{
         font-size:0.18rem;
         line-height: 0.18rem;
         font-weight:700;
      }
      .small{
         font-size:0.12rem;
         line-height: 0.12rem;
      }
   }
   .more{
      height:0.2rem;
      font-size:0.2rem;
      align-self: center;
   }
}
</style>