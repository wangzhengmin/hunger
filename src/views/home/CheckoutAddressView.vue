<template>
   <div style="background-color: #f4f4f4;height:100vh">
      <section class="box-head">
         <span class="iconfont" @click="$router.go(-1)">&#xe68a;</span>
         选择地址
      </section>
      <section class="address-box" v-if="addrs.length>0">
         <div class="self-address row" v-for="(a,k) in addrs" :key="k" @click="chioce(k)">
            <div class="true-box">
               <span class="iconfont" v-if="current==k">&#xe645;</span>
            </div>
            <div class="address-info">
               <p>
                  <span class="name">{{a.name}} </span>
                  <span><span v-if="a.sex">{{a.sex}}</span> {{a.tel}}</span>
               </p>
               <p style="font-size:0.14rem" class="row">
                  <span class="address-tag" v-if="a.tag">{{a.tag}}</span>
                  <span>{{a.addr}}{{a.door}}</span>
               </p>
            </div>
            <div class="icon-address row-between">
               <span class="iconfont" @click.stop="edit(k)">&#xe606;</span>
               <span class="iconfont" @click.stop="remove(k)">&#xe603;</span>
            </div>
         </div>
      </section>
      <section class="foot" @click="$router.push({path:'/address/add'})">
         <span class="iconfont icon-btn">&#xe642;</span>
         <span>新增收货地址</span>
      </section>
   </div>
</template>

<script>
import storage from '@/module/storage.js';
import { Dialog } from 'vant';

export default {
   data(){
      return{
         addrs:[],
         current:''
      }
   },
   mounted(){
      this.current=this.$store.state.current;
      if(storage.get('isLogin'))
         this.addrs=this.$store.state.account.address; 
      else
         this.$router.push({path:'/self'});
      console.log(this.addrs)
   },
   methods:{
      remove(k){
         Dialog.confirm({
            title: '删除地址',
            message: '确定删除该地址'
         }).then(() => {
            this.$store.commit({type:'changeAccount',key:k,action:'remove'})
         }).catch(() => {});
      },
      edit(key){
         this.$router.push({path:'/address/edit',query:{key:key}})
      },
      chioce(k){
         this.current=k;
         this.$store.commit({type:'changeCurrent',key:k});
         this.$router.go(-1);
      }
   },
   beforeRouteEnter(to,from,next){
      if(storage.get('isLogin')){
         next(vm=>{
            vm.addrs=vm.$store.state.account.address; 
         })
         
      }
      else{
         Dialog.confirm({
            title: '未登录',
            message: '请先登录'
         }).then(() => {
            next({path:'/login'});
         }).catch(() => {});
      }  
   }
}
</script>

<style lang="scss" scoped>
.address-box{
   margin-bottom: 0.5rem;
   .self-address{
      background:#fff;
      margin-bottom:0.05rem;
      font-size:0.16rem;
      color:#999;
      padding:0.15rem;
      .true-box{
         width:0.4rem;
         height:0.4rem;
         line-height: 0.4rem;
         align-self: center;
         color:green;
      }
      .address-info{
         flex:1 1;
         >p{
            margin-bottom: 0.05rem;
         }
         .name{
            font-weight:700;
            color:#333;
            font-size:0.17rem;
         }
         .address-tag{
            color: #3190e8;
            border: 1px solid #3190e8;
            white-space: nowrap;
            height:0.2rem;
            padding:0.01rem;
            margin-right:0.05rem;
            font-size:0.12rem;
            line-height: 0.2rem;
            align-self: center;
         }
      }
      .icon-address{
         color:#999;
         flex:0 0 0.7rem;
         height:0.3rem;
         align-self: center;
      }
   }
}
.foot{
   background:#fff;
   position: fixed;
   bottom: 0;
   left:0;
   width:100%;
   height:0.5rem;
   line-height: 0.5rem;
   text-align: center;
   font-size:0.16rem;
   color: #3190e8;
   box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.2);
   >span{
      margin-left:0.1rem;
   }
}
.van-dialog__header{
   font-weight:700;
}
</style>