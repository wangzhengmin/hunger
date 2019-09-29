<template>
  <div class="col center">
     <div class='login-top row'>
        <span class="iconfont" @click="back()">&#xe68a;</span>
        <p>登录</p>
     </div>
     <img src="../../../assets/images/hunger.png" alt="" class="hunger">
     <form class="form-box">
        <section class="box">
           <input type="text" placeholder="手机号">
           <button class="btn-get" disabled="isDisabled">获取验证码</button>
        </section>
        <section class="box">
           <input type="text" placeholder="验证码">
        </section>
        <section class="box">
           新用户登录即自动注册，并表示已同意<a href="">用户服务协议》</a>和<a href="">《隐私权政策》</a>
        </section>
        <button class="btn-login">登录</button>
     </form>
     <a href="" class="about">关于我们</a>
  </div>
</template>

<script>
export default {
   data(){
      return{
         isDisabled:true
      }
   },
   methods:{
      back(){
         this.$router.go(-1);
      }
   }
}
</script>

<style lang="scss" scoped>
.center{
   align-items: center;
}
.login-top{
   height:0.4rem;
   line-height: 0.4rem;
   background-image: linear-gradient(90deg,#0af,#0085ff);
   color:white;
   width:100%;
   font-size:0.2rem;
   text-align: center;
   font-weight:600;
   padding:0 0.2rem;
   box-sizing: border-box;
   >p{
      flex:1 1;
   }
}
.hunger{
   margin-top:0.4rem;
   height:0.56rem;
   width:auto;
   object-fit: contain;
}
.form-box{
   width:3rem;
   margin-top:0.16rem;
   .box{
      height:0.44rem;
      margin-bottom:0.16rem;
      position: relative;
      color: #999;
      >input{
         height:100%;
         width:100%;
         border: 1px solid #ddd;
         border-radius: 0.04rem;
         padding-left:0.1rem;
         outline-color:#2395ff;
      }
      .btn-get{
         position:absolute;
         color: #ccc;
         right:0.05rem;
         top:50%;
         transform: translate(0,-50%);
         border:none;
         background:white;
      }
      a{
         color: #2395ff;
      }
   }
   .btn-login{
      margin-top:0.16rem;
      border-radius: 4px;
      background: #4cd96f;
      color: #fff;
      width:100%;
      height:0.42rem;
      border:none;
   }
}
.about{
   margin-top:0.2rem;
   font-size:0.12rem;
}

</style>