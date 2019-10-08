<template>
   <div>
      <div class="ad">
         <img src="./images/order1.png" alt="">
      </div>
      <!-- 推荐列表 -->
      <section class="recommond-box" ref="box">
         <p class="font-big text-hide">商家推荐</p>
         <ul class="recommond" ref="menu">
            <li v-for="(r,k) in recommond" :key="k" @click="showDetails(r)">
               <img :src="r.img" alt="" class="recom-img">
               <p style="margin-bottom:0.03rem;color: #333;font-size:0.15rem" class="text-hide">{{r.title}}</p>
               <p class="font-small text-hide">月售{{r.num}} 好评率{{r.grade}}</p>
               <div class="row-between">
                  <div>
                  <span class="price" v-if="!r.discount">￥{{r.price}}</span>
                  <span class="price" v-if="r.discount">￥{{r.discount*r.price/10}}</span>
                  <del class="old-price" v-if="r.discount">{{r.price}}</del>
                  </div>
                  <p>
                  <span class="iconfont icon-btn" v-if="r.order>0" @click.stop="r.order-=1">&#xe6a9;</span>
                  <span v-if="r.order>0" style=" margin:0 0.05rem">{{r.order}}</span>
                  <span class="iconfont icon-btn" @click.stop="r.order+=1">&#xe61a;</span>
                  </p>
               </div>
            </li>
         </ul>
      </section>
      <!-- 商品菜单 -->
      <section class="row fixd-menu">
         <div class="shop-menu">
            <ul>
               <li v-for="(m,k) in menu" :key="k" class="menu-item">
                  {{m.sort}}
                  <span class="count" v-if="m.count">{{m.count}}</span>
               </li>
            </ul>
         </div>
         <div class="shop-sort">
            <div v-for="(t,k) in list.menus" :key="k">
            <p class="sort-title">{{t.sort}}</p>
            <ul>
               <li class="row sort-item" v-for="(s,k2) in t.menus" :key="k2" @click="showDetails(s)">
                  <img :src="s.img" alt="" class="menu-img">
                  <div class="item-des">
                     <p class="font-big">{{s.title}}</p>
                     <p class="font-small text-hide">{{s.des}}</p>
                     <p class="font-small">月售{{s.num}}份  好评率{{s.grade}}</p>
                     <p v-if="s.discount" class="orange font-small">{{s.discount}}折 每单限{{s.count}}份优惠</p>
                  <div>
                     <span class="price" v-if="s.discount">￥{{s.discount*s.price/10}}</span>
                     <span class="price" v-if="!s.discount">￥{{s.price}}</span>
                     <del class="old-price" v-if="s.discount">{{s.price}}</del>
                     <div class="float-right">
                        <span class="iconfont icon-btn" v-if="s.order>0" @click.stop="s.order-=1">&#xe6a9;</span>
                        <span v-if="s.order>0" style="margin: 0px 0.05rem">{{s.order}}</span>
                        <span class="iconfont icon-btn" @click.stop="s.order+=1">&#xe61a;</span>
                     </div>
                  </div>
                  </div>
               </li>
            </ul>
            </div>
         </div>
      </section>
      <!-- 购物车 -->
      <section class="car-box">
         <transition name="trans">
            <div v-if="car" class="car-list">
               <div class="list-des" v-if="cost>0">还差<span>{{this.list.start-cost}}</span>元起送</div>
               <section class="list-box">
                  <div class="list-head row">
                     <p>已选购商品</p>
                     <a href="javascript:void(0)" @click="empty()">清空</a>
                  </div>
                  <ul>
                     <li class="row list-item" v-for="(o,k) in this.order" :key="k">
                        <p class="list-title">{{o.title}}</p>
                        <div class="pri">
                           <span class="price" v-if="!o.discount">￥{{o.price*o.order}}</span>
                           <span class="price" v-if="o.discount">￥{{(o.price*o.discount/10)*o.count+o.price*(o.order-o.count)}}</span>
                           <del class="old" v-if="o.discount">{{o.price*o.order}}</del>
                        </div>
                        <div class="f-left row">
                           <span class="iconfont" @click="o.order-=1">&#xe6a9;</span>
                           <span class="order-num">{{o.order}}</span>
                           <span class="iconfont" @click="o.order+=1">&#xe61a;</span>
                        </div>
                     </li>
                  </ul>
               </section>
            </div>
         </transition>
         <transition name="opacit">
            <div class="po" v-if="car" @click="car=false"></div>
         </transition>
         <div class="car row" >
            <div class="icon-box" ref="anim" @click="up()">
            <div :class="['icon-car',cost>0?'bg-car2':'bg-car']"></div>
            <span class="count" v-if="this.list.order>0">{{this.list.order}}</span>
            </div>
            <div class="car-des">
               <p v-if="this.list.order<=0">未选购商品</p>
               <p v-if="this.list.order>0" class="cost">￥{{cost}}</p>
               <p>另需配送费{{this.list.charge}}元</p>
            </div>
            <a href="javascript:void(0)" class="car-all" v-if="cost<=0">¥{{this.list.start}}起送</a>
            <a href="javascript:void(0)" class="car-all small" v-if="cost<this.list.start&&cost>0">还差¥{{this.list.start-cost}}起送</a>
            <a href="javascript:void(0)" class="car-all bg-green" v-if="cost>=this.list.start" @click="toAccount()">去结算</a>
         </div>
      </section>
      <!-- 商品详情弹窗 -->
      <van-popup v-model="show" position="bottom" :style="{height:'100%'}">
         <div class="details">
         <img :src="current.img" alt="">
         <span class="iconfont icon-btn close" @click="show=false">&#xe603;</span>
         <div style="padding:0.1rem">
            <p class="font-big">{{current.title}}</p>
            <p class="font-small" style="margin:0.1rem 0">月售{{current.num}}份  好评率{{current.grade}}</p>
            <p>
               <span class="price" v-if="current.discount">￥{{current.discount*current.price/10}}</span>
               <span class="price" v-if="!current.discount">￥{{current.price}}</span>
               <del class="old-price" v-if="current.discount">{{current.price}}</del>
               <span v-if="current.discount" class="font-small orange" style="margin-left:0.1rem">{{current.discount}}折 每单限{{current.count}}份优惠</span>
               <span class="float-right">
                  <span class="iconfont icon-btn" v-if="current.order>0" @click.stop="current.order-=1">&#xe6a9;</span>
                  <span v-if="current.order>0" style="margin: 0px 0.05rem">{{current.order}}</span>
                  <span class="iconfont icon-btn" @click.stop="current.order+=1">&#xe61a;</span>
               </span>
            </p>
            <p>{{current.des}}</p>
         </div>
         </div>
      </van-popup>
   </div>
</template>

<script>
import md5 from 'js-md5';
export default {
  name:'business-order',
   data(){
      return{
         list:{},
         show:false,
         current:'',
         car:false
      }
   },
   mounted(){
      let gid=this.$route.query.gid;
      let list=this.$store.state.list.find(
         (value)=>{
           return value.gid=gid;
         }
      );
      if(this.$store.state.orders['gid'+gid]){
         for(let item of list.menus){
            for(let item2 of item.menus){
               for(let item3 of this.$store.state.orders['gid'+gid].orders){
                  if(item2.pid==item3.pid)
                     item2.order=item3.order;
               }
            }
         }
      }
      this.list=list;
      this.$nextTick(()=>{
         this.swipe();
      })
   },
   computed:{
      recommond(){
      let recommond=[];
      if(this.list.menus){
         for(let item of this.list.menus){
            for(let item2 of item.menus){
               if(item2.isRecom)
                  recommond.push(item2);
            }
         }
      }
      return recommond;
      },
      menu(){
         let menu=[];
         if(this.list.menus){
            for(let item of this.list.menus){
               let count=0;
               for(let item2 of item.menus){
                  count+=item2.order;
               }
               menu.push({sort:item.sort,count:count})
            }
         }
         return menu;
      },
      order(){
         let order=[];
         if(this.list.menus){
            let num=0;
            for(let item of this.list.menus){
               for(let item2 of item.menus){
                  num+=item2.order;
                  if(item2.order>0)
                     order.push(item2);
               }
            }
            this.list.order=num;
         }
      return order;
      },
      cost(){
         let num=0;
         for(let item of this.order){
         if(item.discount)
            num+=(item.price*item.discount/10)*item.count+item.price*(item.order-item.count);
         else
            num+=item.price*item.order;
         }
      return num;
    }
   },
   methods:{
      showDetails(value){
         this.current=value;
         this.show=true
      },
      up(){
         if(this.cost>0)
            this.car=!this.car;
      },
      empty(){
         for(let item of this.order){
            item.order=0;
         }
      },
      swipe(){
         let dom=this.$refs.menu;
         let len=dom.children.length;
         let mar=parseFloat(window.getComputedStyle(dom.children[0],null).marginLeft);
         let maxWidth=len*(dom.children[0].offsetWidth+mar)-this.$refs.box.offsetWidth+2*mar;
         let [startX,distance,transX]=[0,0,0];
         dom.addEventListener('touchstart',function(e){
            [startX,distance]=[0,0];
            startX=e.touches[0].clientX;
         })
         dom.addEventListener('touchmove',function(e){
            distance=e.touches[0].clientX-startX;
            distance+=transX;
            if(distance<0&&distance>-maxWidth)
               dom.style.transform=`translateX(${distance}px)`;
           
         })
         dom.addEventListener('touchend',function(e){
            transX=distance;
         })
      },
      toAccount(){
         let {logo,gid,charge,order,title}=this.list;
         this.$router.push({path:'/account',query:{gid}});
         let data={gid,orders:this.order,order,logo,charge,title,cost:this.cost};
         this.$store.commit({type:'changeOrder',data,action:'add'});
      }
   },
}
</script>

<style lang="scss" scoped>
.orange{
   color:rgb(255, 83, 57);
}
.ad{
  padding:0 0.15rem;
  margin-top:0.07rem;
  >img{
    width: 100%;
    object-fit: cover;
    border-radius:0.05rem;
  }
}
// 推荐列表样式
.recommond-box{
   overflow: hidden;
   .font-big{
      margin:0.15rem 0 0.1rem 0.15rem;
   }
  .recommond{
    width:80rem;
    padding-left:0.05rem;
    >li{
      width:1.2rem;
      float:left;
      margin-left:0.1rem;
      overflow: hidden;
      padding-bottom: 0.1rem;
      .recom-img{
        width:1.2rem;
        height:1.2rem;
        border-radius:0.05rem
      }
      .font-small{
         margin:0.05rem 0
      }
    }
  }
}
// 商品菜单样式
.fixd-menu{
   height:100vh;
   box-sizing: border-box;
   padding-bottom: 0.6rem;
   position: sticky;
   top:4rem;
   left:0;
}
.shop-menu{
  flex:0 0 0.8rem;
  margin-top:0.4rem;
  overflow-y: scroll;
  background-color: #f8f8f8;
  .menu-item{
    padding:0.1rem 0.05rem;
    font-size:0.13rem;
    position: relative;
  }
}
.shop-sort{
   margin-top:0.4rem;
  flex:1 1 5.87rem;
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
      flex:1 1;
    }
    .font-small{
      line-height:0.2rem;
    }
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
    background:rgba(153, 153, 153, 0.678);
    color:white;
    padding:0.05rem;
    border-radius:50%;
  }
  .deta-des{
    font-size:0.14rem;
    color:#666;
    margin-bottom: 0.1rem;
  }
}
.car-box{
   position: fixed;
   bottom: 0;
   left:0;
   width:100%;
   z-index:9999;
   transition:all .3s;
   .car-list{
      position: relative;
      z-index: 0;
      .list-box{
         background:white;
         .list-head{
            height:0.4rem;
            line-height: 0.4rem;
            background-color: #eceff1;
            >p{
               flex:1 1;
               padding-left:0.2rem;
               color:#666;
            }
            >a{
               flex:0 0 0.7rem;
               text-align: center;
               font-size:0.13rem;
            }
         }
         .list-item{
            padding:0.2rem 0.2rem;
         }
         .list-title{
            flex:1 1;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
         }
         .pri{
            flex:0 0 0.5rem;
         }
         .old{
            margin-left:0.05rem;
            color:#999;
            font-size:0.13rem;
         }
         .iconfont{
            color:rgb(35, 149, 255);
            font-size:0.2rem;
         }
         .order-num{
            padding:0 0.1rem;
         }
         .f-left{
            flex:0 0 1rem;
            justify-content: flex-end;
         }
      }
   }
   .list-des{
         background-color: #fffad6;
         height:0.2rem;
         font-size:0.1rem;
         line-height: 0.2rem;
         text-align: center;
         transition:all .3s;
         >span{
            color: rgb(255, 83, 57);
         }
      }
   .car{
      height:0.5rem;
      background-color: #535356;;
      position: relative;
      .icon-box{
         position: absolute;
         left:0.1rem;
         top:-0.1rem;
         padding:0.05rem;
         background:#444;
         border-radius: 50%;
          .bg-car{
            background:#363636 url('./images/shopcar.svg') no-repeat;
         }
         .bg-car2{
            background:#3190e8 url('./images/shopcar2.svg') no-repeat;
         }
         .icon-car{
            width:0.4rem;
            padding:0.05rem;
            height:0.4rem;
            border-radius: 50%;
            box-sizing: border-box;
            background-size:0.25rem;
            background-position: center;
         }
      }
      .anim{
         animation: big .7s;
      }
      @keyframes big {
         0% {transform: scale(1)}
         50% {transform: scale(0.8)}
         75% {transform: scale(1.1)}
         100% {transform: scale(1)}
      }
      .car-des{
         margin-left:1rem;
         color: #999;
         font-size:0.12rem;
         height:0.35rme;
         align-self: center;
         flex:1 1;
         .cost{
            color:white;
            font-size:0.15rem;
         }
      }
      .car-all{
         color:white;
         flex:0 0 0.8rem;
         text-align: center;
         line-height: 0.5rem;
         font-weight: 700;
      }
      .bg-green{
         background:#38ca73;
      }
   }
}
.po{
   position: fixed;
   top:0;
   left:0;
   z-index:-1;
   background-color: rgba(0,0,0,.7);
   width:100vw;
   height:100vh;
}
</style>