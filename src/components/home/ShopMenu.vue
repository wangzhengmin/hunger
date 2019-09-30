<template>
  <div class="row">
    <div class="shop-menu">
      <ul>
        <li v-for="(t,k) in sort" :key="k" class="menu-item">
          {{t.sort}}
          <span class="count" v-if="t.count">{{t.count}}</span>
        </li>
      </ul>
    </div>
    <div class="shop-sort">
      <div v-for="(t,k) in this.$props.list" :key="k">
        <p class="sort-title">{{t.sort}}</p>
        <ul>
          <li class="row sort-item" v-for="(s,k2) in t.menus" :key="k2" @click="showDetails(k,k2)">
            <img :src="s.img" alt="" class="menu-img">
            <div class="item-des">
              <p class="bold">{{s.title}}</p>
              <p class="small">{{s.des}}</p>
              <p class="small">月售{{s.num}}份  好评率{{s.grade}}</p>
              <p v-if="s.discount" class="orange small">{{s.discount}}折 每单限{{s.count}}份优惠</p>
              <div>
                <span class="price" v-if="s.discount">￥{{s.discount*s.price/10}}</span>
                <span class="price" v-if="!s.discount">￥{{s.price}}</span>
                <del class="old" v-if="s.discount">{{s.price}}</del>
                <div class="icon-btn">
                  <span class="iconfont" v-if="s.order>0" @click.stop="minus(k,k2)">&#xe6a9;</span>
                  <span v-if="s.order>0" class="order-num">{{s.order}}</span>
                  <span class="iconfont" @click.stop="add(k,k2)">&#xe61a;</span>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <shop-car :order="order" :cost="cost" :start="this.$props.start" :charge="this.$props.charge" ref='car'></shop-car>
    <van-popup v-model="show" position="bottom" :style="{height:'100%'}">
      <div class="details">
        <img :src="current.img" alt="">
        <span class="iconfont close" @click="show=false">&#xe6a9;</span>
        <div class="detail-box">
          <p class="bold">{{current.title}}</p>
          <p class="deta-des">月售{{current.num}}份  好评率{{current.grade}}</p>
          <p>
            <span class="price" v-if="current.discount">￥{{current.discount*current.price/10}}</span>
            <span class="price" v-if="!current.discount">￥{{current.price}}</span>
            <del class="old" v-if="current.discount">{{current.price}}</del>
            <span v-if="current.discount" class="orange small">{{current.discount}}折 每单限{{current.count}}份优惠</span>
            <span class="icon-btn">
              <span class="iconfont" v-if="current.order>0" @click.stop="current.order-=1">&#xe6a9;</span>
              <span v-if="current.order>0" class="order-num">{{current.order}}</span>
              <span class="iconfont" @click.stop="current.order+=1">&#xe61a;</span>
            </span>
          </p>
          <p>{{current.des}}</p>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
import ShopCar from './ShopCar.vue'
export default {
  name:'shop-menu',
  data(){
    return{
      show:false,
      current:{},
    }
  },
  components:{
    ShopCar
  },
  props:{
    charge:{
      type:Number,
      required:true
    },
    start:{
      type:Number,
      required:true
    },
    list:{
      type:Array,
      required:true
    }
  },
  computed:{
    order(){
      let order=[];
      for(let item of this.$props.list){
        for(let item2 of item.menus){
          if(item2.order>0)
            order.push(item2);
        }
      }
      return order;
    },
    cost(){
      let num=0;
      for(let item of this.order){
        if(item.discount){
          num+=(item.price*item.discount/10)*item.count+item.price*(item.order-item.count);
        }else{
           num+=item.price*item.order;
        }
      }
      return num;
    },
    sort(){
      let sort=[];
      for(let item of this.$props.list){
        let count=0;
        for(let item2 of item.menus){
          count+=item2.order;
        }
        sort.push({sort:item.sort,count:count})
      }
      return sort;
    }
  },
  methods:{
    minus(key1,key2){
      if(this.list[key1].menus[key2].order>0)
        this.list[key1].menus[key2].order-=1
    },
    add(key1,key2){
      this.list[key1].menus[key2].order+=1
      this.$refs.car.anim();
    },
    showDetails(k,k2){
      this.show=true;
      this.current=this.$props.list[k].menus[k2];
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-menu{
  flex:0 0 0.8rem;
  height: 6.27rem;
  overflow-y: scroll;
  background-color: #f8f8f8;
  .menu-item{
    padding:0.1rem 0.05rem;
    font-size:0.13rem;
    position: relative;
  }
}
.shop-sort{
  flex:1 1 5.87rem;
  height: 6.27rem;
  overflow-y: scroll;
  box-sizing: border-box;
  overflow-y: scroll;
  padding:0.1rem 0 0.1rem 0.1rem;
  .sort-title{
    font-size:0.12rem;
    line-height: 0.5rem;
  }
  .sort-item{
    margin-bottom: 0.1rem;
    .menu-img{
      width:0.95rem;
      height:0.95rem;
    }
    .item-des{
      padding:0 0.1rem;
      overflow: hidden;
    }
  }
}
.old{
  margin-left:0.05rem;
  color:#999;
  font-size:0.13rem;
}
.icon-btn{
  float:right;
  color:rgb(35, 149, 255);
  .iconfont{
    font-size:0.2rem;
    color:rgb(35, 149, 255);
  }
  .order-num{
    font-size:0.15rem;
    color:black;
    padding:0 0.1rem;
  }
}

.details{
  height:100%;
  background:white;
  position: relative;
  >img{
    max-width: 100%;
  }
  .close{
    position:absolute;
    top:0.1rem;
    right:0.1rem;
    background: #999;
    color:white;
    padding:0.05rem;
    border-radius:50%;
  }
  .detail-box{
    padding:0.1rem;
  }
  .deta-des{
    font-size:0.14rem;
    color:#666;
    margin-bottom: 0.1rem;
  }
}
</style>