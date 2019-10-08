<template>
   <div class="address">
      <div class="box-head">
        <span class="iconfont" @click="hide()">&#xe68a;</span>
         选择收货地址
         <span class="position-right" @click="$router.push({path:'/address/add'})" v-if="isLogin">新增地址</span>
      </div>
      <section class="addr-search row">
         <div class="addr">
            南昌
            <span class="triangle"></span>
         </div>
         <div class="addr-input-box">
            <span class="iconfont">&#xe688;</span>
            <input type="text" v-model="addr" class="addr-input" placeholder="请输入地址">
         </div>
      </section>
      <section v-if="isLogin">
         <p class="address-des">当前地址</p>
         <div class="row-between" style="padding:0.15rem 0.1rem;background:white">
            <span class="font-big text-hide">{{this.current}}</span>
            <span style="color: #2395ff;font-size:0.15rem;flex:0 0 0.7rem">重新定位</span>
         </div>
      </section>
      <section v-if="isLogin">
         <p class="address-des">收货地址</p>
         <div class="address-item" v-for="(a,k) in address" :key="k" @click="current=a.addr+a.door">
            <p>
               <span class="font-big">{{a.name}}</span>
               <span>{{a.sex}} </span>
               <span> {{a.tel}}</span>
            </p>
            <p>{{a.addr}}{{a.door}}</p>
         </div>
      </section>
  </div>
</template>
 
<script>
import storage from '@/module/storage.js';
export default {
   name:'address-view',
   data(){
      return{
         address:[],
         isLogin:false,
         addr:'',
         current:'某某学校某某宿舍(某某校区)'
      }
   },
   mounted(){
      if(storage.get('isLogin')){
         this.address=this.$store.state.account.address;
         this.isLogin=true;
      }
         
   },
   methods:{
      hide(){
         this.$emit('hide')
      }
   }
}
</script>

<style lang="scss" scoped>
.address{
   height:100vh;
   width:100vw;
   position: absolute;
   top:0;
   left:0;
   background-color: #f4f4f4;
   z-index:999;
   box-sizing: border-box;
   .addr-search{
      background:white;
      padding:0.1rem 0.2rem;
      .addr{
         flex:0 0 0.5rem;
         align-self: center;
         .triangle{
            height:0;
            display: inline-block;
            border:0.04rem solid red;
            border-color: #999 transparent transparent transparent; 
         }
      }
      .addr-input-box{
         position: relative;
         flex:1 1;
         
         .iconfont{
            font-size:0.2rem;
            position: absolute;
            left:0.05rem;
            top:0.1rem;
         }
         >input{
            background: #f4f4f4;
            padding:0.1rem 0.1rem 0.1rem 0.3rem;
            height:100%;
            width:100%;
            border:none;
            box-sizing: border-box;
         }
      }
   }
   .address-des{
      padding:0.1rem 0.1rem;
   }
   .address-item{
      font-size:0.12rem;
      background:white;
      padding:0.15rem 0.1rem;
      >p{
         line-height:0.2rem;
      }
      .font-big{
         margin-right:0.05rem;
      }
   }
}
</style>