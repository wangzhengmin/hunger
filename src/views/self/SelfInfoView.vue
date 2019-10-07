<template>
   <div>
      <section class="info-item-box">
         <div class="row-between info-item">
            <p class="font-big">头像</p>
            <div class="row">
               <img src="../../assets/images/logo.png" alt="">
               <span class="iconfont right">&#xe63a;</span>
            </div>
         </div>
         <div class="row-between info-item">
            <p class="font-big">用户名</p>
            <div class="row">
               {{name}} <span class="iconfont right">&#xe63a;</span>
            </div>
         </div>
      </section>
      <p class="info-des">账号绑定</p>
      <section class="info-item-box">
         <div class="row-between info-item">
            <p class="font-big">手机</p>
            <div class="row">
               <span class="iconfont right">&#xe63a;</span>
            </div>
         </div>
      </section>
      <p class="info-des">安全设置</p>
      <section class="info-item-box">
         <div class="row-between info-item">
            <p>登录密码</p>
            <div class="row">
               <span style="color:#0097ff">修改</span><span class="iconfont right">&#xe63a;</span>
            </div>
         </div>
      </section>
      <div class="logout" @click="logout()">退出登录</div>
   </div>
</template>

<script>
import storage from '@/module/storage.js';
export default {
   data(){
      return{
         name:'',
         tel:''
      }
   },
   mounted(){
      document.documentElement.style.background="#f5f5f5";
      let bol=storage.get('isLogin');
      if(bol){
         this.name=this.$store.state.account.name;
         this.tel=this.$store.state.account.tel;
      }
   },
   beforeRouteLeave(to,from,next){
      next();
      document.documentElement.style.background="#fff"
   },
   methods:{
      logout(){
         storage.remove('isLogin');
         this.$router.push({path:'/self'});
      }
   }
}
</script>

<style lang="scss" scoped>
.info-item-box{
   background:#fff;
   .info-item{
      padding:0.1rem;
      line-height:0.2rem;
      font-size:0.18rem;
      .font-big{
         align-self: center;
      }
      .iconfont{
         font-size:0.2rem;
         color:#999;
      }
      .right{
         align-self: center;
      }
      img{
         width:0.6rem;
         height:0.6rem;
         border-radius:50%;
      }
   } 
}
.info-des{
   padding:0.1rem;
}
.logout{
   margin-top:0.3rem;
   padding:0.1rem;
   text-align: center;
   font-weight:700;
   color:red;
   font-size:0.18rem;
   background:#fff;
}
</style>