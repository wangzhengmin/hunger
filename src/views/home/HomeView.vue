<template>
  <div class="home-box">
    <section class="addr row" @click="addr=true">
      <span class="iconfont">&#xe62f;</span>
      <span class="addr-des text-hide">长征路南昌理工学院南昌校区</span>
      <div class="down"></div>
    </section>
    <section class="search-box" @click="toSearch()">
      <a class="search row">
        <span class="iconfont">&#xe688;</span>
        <span class="search-des">搜索饿了么商家、商品名称</span>
      </a>
    </section>
    <section class="img-menu" ref="box">
      <ul class="img-box row" ref="menu">
        <li class="img-item" v-for="(m,k) in menus" :key="k">
          <a v-for="(l,k2) in m.list" :key="k2" href="#">
            <img :src="l.img" alt="">
            <p>{{l.des}}</p>
          </a>
        </li>
      </ul>
      <div class="point row">
        <a href="javascript:void(0)" v-for="i in menus.length" :key="i"></a>
      </div>
    </section>
    <section class="sort-box">
      <a href="#">
        <div class="sort-item row">
            <div>
              <p class="title">品质套餐</p>
              <p class="des">搭配齐全吃得好</p>
              <p class="away">立即抢购 ></p>
            </div>
            <img src="./images/sort.png" alt="">
        </div>
      </a>
    </section>
    <div class="recomond row">推荐商家</div>
    <business-filter></business-filter>
    <section>
      <div v-for="(l,k) in list" :key="k">
        <router-link :to="{path:'/business',query:{gid:l.gid}}">
          <business-item :list="l"></business-item>
        </router-link>
      </div>
    </section>
    <transition name="trans-right">
      <address-view v-if="addr" @hide="hide"></address-view>
    </transition>
  </div>
</template>

<script>
import BusinessFilter from '@/components/home/BusinessFilter.vue';
import BusinessItem from '@/components/home/BusinessItem.vue';
import AddressView from './AddressView.vue';

export default {
  name:'page-home',
  data(){
    return{
      menus:[],
      list:[],
      addr:false,
      index:0
    }
  },
  components:{
    BusinessFilter,
    BusinessItem,
    AddressView
  },
  mounted(){
    this.menus=this.$store.state.menus;
    this.list=this.$store.state.list;
    this.$nextTick(function(){
      this.swipe();
    })
  },
  methods:{
    toSearch(){
      this.$router.push({path:'/search'});
    },
    hide(){
      this.addr=false;
    },
    swipe(){
      let dom=this.$refs.menu;
      let len=dom.children.length;
      let width=this.$refs.box.offsetWidth;
      let [startX,distance,index]=[0,0,0];
      dom.addEventListener('touchstart',function(e){
        [startX,distance]=[0,0];
        startX=e.touches[0].clientX;
      })
       dom.addEventListener('touchmove',function(e){
        distance=e.touches[0].clientX-startX;
        if(index>0&&distance>0||index<len-1&&distance<0)
          dom.style.transform=`translateX(${distance-index*width}px)`;
         
      })
       dom.addEventListener('touchend',function(e){
          if(Math.abs(distance/width)>1/3){
            if(distance>0&&index>0)
              index--;
            if(distance<0&&index<len-1)
              index++;
          }
          dom.style.transform=`translateX(-${index*width}px)`;
      })
    },
  },
  directives:{
    act:{
      bind(el,binding){
        let dom =el.querySelector('a');
        dom.style.background="#fe7100";
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.home-box{
  margin-bottom:0.6rem;
}
.addr{
  padding:0.1rem 0.15rem 0;
  height:0.32rem;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  margin-bottom:-0.01rem;
  .addr-des{
    display: block;
    max-width:50%;
    font-weight: 700;
    font-size:0.18rem;
    line-height:0.32rem;
    color:white;
  }
  .iconfont{
    color:white;
  }
  .down{
    border:0.04rem solid;
    height:0;
    border-color: white transparent transparent transparent;
    align-self: center;
    margin-left:0.1rem;
  }
}
.search-box{
  box-sizing: border-box;
  background-image: linear-gradient(90deg,#0af,#0085ff);
  padding:0.1rem 0.15rem;
  position: sticky;
  top:0;
  left:0;
  z-index:999;
  .search{
    height:0.35rem;
    background:white;
    text-align: center;
    justify-content: center;
    line-height: 0.35rem;
    font-size:0.14rem;
    .search-des{
      color:#999;
    }
    .iconfont{
      align-self: center;
    }
  }
}
.recomond{
  height:0.3rem;
  text-align: center;
  line-height: 0.3rem;
  font-size:0.13rem;
  color:black;
  font-weight: 500;
  justify-content: center;
  &::after,&::before{
    content: '';
    display: block;
    height:0.01rem;
    width:0.2rem;
    background:#999;
    align-self: center;
   
  }
  &::after{
     margin-left:0.1rem;
  }
  &::before{
    margin-right:0.1rem;
  }
}
.img-menu{
 overflow: hidden;
}
.img-box{
  width:200%;
  transition:all .5s;
  .img-item{
    display: flex;
    flex-flow: row wrap;
    width:50%;
    >a{
      padding-top:0.1rem;
      display: block;
      flex:1 1 20%;
      color:#666;
      text-align: center;
      font-size:0.12rem;
      >img{
        width:0.48rem;
        height:0.48rem;
      }
    }
  }
}
.point{
  height:0.2rem;
  justify-content: center;
  padding-bottom: 0.1rem;
  >a{
    display: block;
    height:0.03rem;
    width:0.1rem;
    background-color:#666;
    align-self:flex-end;
    margin-left:0.1rem;
  }
}
.point-active{
  background:#fe7100;
}
.sort-box{
   padding:0 0.1rem;
   .sort-item{
      padding:0.1rem;
      background: linear-gradient(0deg,#f4f4f4 5%,#fafafa 95%);
      justify-content: space-between;
      >img{
         width:1.2rem;
         height:0.8rem;
      }
      .title{
         font-size:0.14rem;
         font-weight: 600;
         color:black;
         margin-bottom:0.02rem;
      }
      .des{
         color:#777;
         font-size:0.12rem;
         margin-bottom:0.05rem;
      }
      .away{
         font-size:0.1rem;
         color: #af8260;
         font-weight: 700;
      }
   }
}
</style>