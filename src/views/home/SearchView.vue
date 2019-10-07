<template>
   <div class="search-con">
      <section class="sticky">
         <p><span class="iconfont icon-left" @click="()=>this.$router.push({path:'/home'})">&#xe68a;</span></p>
         <div class="search-box row">
            <span class="iconfont icon-search">&#xe688;</span>
            <input type="text" v-model="search" placeholder="输入商家、商品名称">
            <span class="iconfont icon-empty" v-if="search" @click="search=''">&#xe603;</span>
            <button @click="result()">搜索</button>
         </div>
      </section>
      <div v-if="isTrue">
         <section class="container" v-if="history.length>0">
            <p class='title'>历史搜索  <span class="iconfont icon-delete" @click="empty()">&#xe78f;</span></p>
            <div class="row-wrap">
               <a href="javascript:void(0)" class="his" v-for="(h,k) in history" :key="k" @click="result(h)">{{h}}</a>
            </div>
         </section>
            <section class="container">
            <p class='title'>热门搜索</p>
            <div class="row-wrap">
               <a href="javascript:void(0)" class="his" v-for="(h,k) in hot" :key="k" @click="result(h)">{{h}}</a>
            </div>
         </section>
      </div>
      <router-view></router-view>
   </div>
  
</template>

<script>
import storage from '@/module/storage.js';
export default {
   data(){
      return{
         search:'',
         history:[],
         hot:['肠粉','饺子','川香百位卤菜','卤菜','麻辣香锅'],
         isTrue:false
      }
   },
   mounted(){
      if(storage.get('history'))
         this.history=storage.get('history');
   },
   watch:{
      search(value){
         if(value==''){
            if(this.$route.path!='/search')
               this.$router.replace({path:'/search'});
            this.isTrue=true;
         }else{
            this.isTrue=false;
         }
      }
   },
   methods:{
      result(value){
         this.isTrue=false;
         if(value)
            this.search=value;
            this.$router.push({path:'/search/result',query:{keyword:this.search}});
         this.history=[...new Set([...this.history,this.search])];
         storage.set('history',this.history)    
      },
      empty(){
         this.history=[];
         localStorage.setItem('history',JSON.stringify(this.history));
      }
   },
   beforeRouteEnter(to,from,next){
      next(vm=>{
         if(to.path=='/search')
            vm.isTrue=true;
         else
            vm.isTrue=false;
      });
   }
}
</script>

<style lang="scss" scoped>
.sticky{
   position: sticky;
   top:0;
   left:0;
   background:white;
   padding-bottom: 0.1rem;
}
.search-con{
   .icon-left{
      display: block;
      margin:0.05rem;
      color:#999;
      font-weight:700;
      font-size:0.23rem;
   }
   .search-box{
      padding:0 0.1rem;
      box-sizing: border-box;
      position: relative;
      margin-top:0.2rem;
      .icon-search{
         position: absolute;
         left:0.2rem;
         top:0.05rem;
         font-size:0.15rem;
      }
      .icon-empty{
         position: absolute;
         right:0.6rem;
         top:0.05rem;
         font-size:0.15rem;
         color:blue;
      }
      >input{
         flex:1 1;
         background-color: #f8f8f8;
         border:none;
         padding:0.05rem 0.3rem;
         font-size:0.12rem;
         
      }
      >button{
         flex:0 0 0.5rem;
         text-align: right;
         font-weight: 700;
         color: #333;
         border:none;
         background:white;
         font-size:0.16rem;
      }
      
   }
}
.container{
   padding:0.1rem;
   .title{
      font-weight:700;
      color:#666;
   }
   .his{
      padding:0.1rem;
      margin:0.1rem 0.1rem 0 0;
      background-color: #f7f7f7;
   }
   .icon-delete{
      float:right;
      font-size:0.2rem;
      color:#999;
   }
}
</style>