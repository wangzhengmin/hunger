<template>
   <div style="background-color: #f5f5f5;height:100vh">
      <section class="box-head">
         <span class="iconfont" @click="$router.go(-1)">&#xe68a;</span>
         编辑地址
         <span class="position-right" @click="remove(k)">删除</span>
      </section>
      <section class="info-box">
         <div class="info-item row">
            <label class="font-big">联系人</label>
            <div class="flex-box">
               <input type="text" v-model="info.name" placeholder="姓名">
            </div>
         </div>
         <div class="info-item row">
            <label class="font-big"></label>
            <div class="flex-box row">
               <span :class="['chioce-btn',info.sex=='先生'?'chioced':'']" @click="info.sex='先生'">先生</span>              
               <span :class="['chioce-btn',info.sex=='女士'?'chioced':'']" @click="info.sex='女士'">女士</span>  
            </div>
         </div>
         <div class="info-item row"> 
            <label class="font-big">电话</label>
             <div class="flex-box">
               <input type="tel" v-model="info.tel" placeholder="手机号码">
            </div>
         </div>
         <div class="info-item row">
            <label class="font-big">地址</label>
             <div class="flex-box">
               <input type="text" v-model="info.addr" placeholder="小区/写字楼/学校等">
            </div>
         </div>
         <div class="info-item row">
            <label class="font-big">门牌号</label>
            <div class="flex-box">
               <input type="text" v-model="info.door" placeholder="10号楼5层501室222" maxlength="100">
            </div>
         </div>
         <div class="info-item row">
            <label class="font-big">标签</label>
            <div class="flex-box row">
              <span :class="['chioce-btn',info.tag=='家'?'chioced':'']" @click="info.tag='家'">家</span>              
              <span :class="['chioce-btn',info.tag=='学校'?'chioced':'']" @click="info.tag='学校'">学校</span>           
              <span :class="['chioce-btn',info.tag=='公司'?'chioced':'']" @click="info.tag='公司'">公司</span>
            </div>
         </div>
         <div class="info-item">
            <button class="confirm-btn" @click="saveAddress()">确定</button>
         </div>
      </section>
   </div>
</template>

<script>
import {Toast} from 'vant';
import { Dialog } from 'vant';
export default {
   data(){
      return{
         info:{
            name:'',
            sex:'',
            tel:'',
            addr:'',
            door:'',
            tag:''
         },
         key:''
      }
   },
   mounted(){
      this.key=this.$route.query.key;
      this.info=this.$store.state.account.address[this.key];
   },
   methods:{
      saveAddress(){
         if(this.info.name&&this.info.tel&&this.info.addr&&this.info.door){
            this.$store.commit({type:'changeAccount',address:this.info,action:'edit'});
            this.$router.go(-1);
         }
         else
            Toast('请填写完整信息');
      },
      remove(k){
         Dialog.confirm({
            title: '删除地址',
            message: '确定删除该地址'
         }).then(() => {
            this.$store.commit({type:'changeAccount',key:k,action:'remove'});
            this.$router.push({path:'/self/address'});
         }).catch(() => {});
      }
   },
}
</script>

<style lang="scss" scoped>
.info-box{
   padding:0 0.15rem;
   font-size:0.15rem;
   background: #fff;
   .info-item{
      padding:0.15rem 0;
      height:auto;
      .confirm-btn{
         width:100%;
         border:none;
         background: #00d762;
         color:white;
         padding:0.1rem 0;
         border-radius:0.05rem;
         font-weight:700;
         font-size:0.18rem;
      }
      .font-big{
         font-size:0.15rem;
         flex:0 0 0.7rem;
      }
      .flex-box{
         flex:1 1;
         >input{
            width:100%;
            height:100%;
            border:none;
         }
         ::placeholder{
            color:#bbb;
         }
         .chioce-btn{
            width:0.7rem;
            text-align: center;
            background: #fff;
            border: 1px solid #ddd;
            margin-right:0.1rem;
            padding:0.04rem 0;
            border-radius:0.05rem;
         }
         .chioced{
            color: #2395ff;
            background: #eef7ff;
            border-color: rgba(35,149,255,.18);
         }
      }
   }
}
</style>