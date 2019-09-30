<template>
  <div class="car-box">
     <transition  name="delay">
        <div class="list-des" v-if="cost>0&&!show">还差<span>{{this.$props.start-cost}}</span>元起送</div>
     </transition>
     
      <transition name="trans">
         <div v-if="show" class="car-list">
            <div class="list-des" v-if="cost>0">还差<span>{{this.$props.start-cost}}</span>元起送</div>
            <section class="list-box">
               <div class="list-head row">
                  <p>已选购商品</p>
                  <a href="javascript:void(0)" @click="empty()">清空</a>
               </div>
               <ul>
                  <li class="row list-item" v-for="(o,k) in this.$props.order" :key="k">
                     <p class="list-title">{{o.title}}</p>
                     <div class="pri">
                        <span class="price" v-if="!o.discount">￥{{o.price*o.order}}</span>
                        <span class="price" v-if="o.discount">￥{{(o.price*o.discount/10)*o.count+o.price*(o.order-o.count)}}</span>
                        <del class="old" v-if="o.discount">{{o.price*o.order}}</del>
                     </div>
                     <div class="f-left row">
                        <span class="iconfont" @click="minus(k)">&#xe6a9;</span>
                        <span class="order-num">{{o.order}}</span>
                        <span class="iconfont" @click="add(k)">&#xe61a;</span>
                     </div>
                  </li>
               </ul>
            </section>
         </div>
      </transition>
     <div class="car row" >
         <div class="icon-box" ref="anim" @click="up()">
           <div :class="['icon-car',cost>0?'bg-car2':'bg-car']"></div>
           <span class="count" v-if="count>0">{{count}}</span>
         </div>
         <div class="car-des">
            <p v-if="cost<=0">未选购商品</p>
            <p v-if="cost>0" class="cost">￥{{cost}}</p>
            <p>另需配送费{{this.$props.charge}}元</p>
         </div>
         <a href="javascript:void(0)" class="car-all" v-if="cost<=0">¥{{this.$props.start}}起送</a>
         <a href="javascript:void(0)" class="car-all small" v-if="cost<this.$props.start&&cost>0">还差¥{{this.$props.start-cost}}起送</a>
         <a href="javascript:void(0)" class="car-all bg-green" v-if="cost>=this.$props.start">去结算</a>
     </div>
     <transition name="opacit">
        <div class="po" @click="show=false" v-if="show"></div>
     </transition>
  </div>
</template>

<script>
export default {
   name:'shop-car',
   data(){
      return{
         show:false
      }
   },
   props:{
      order:{
         type:Array
      },
      start:{
         type:Number,
         required:true
      },
      charge:{
         type:Number,
         required:true
      }
   },
   computed:{
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
    count(){
      let count=0;
      for(let item of this.order){
          count+=item.order 
      }
      return count;
    }
   },
   methods:{
      anim(){
         this.$refs.anim.className="icon-box anim";
         setTimeout(()=>{
           this.$refs.anim.className="icon-box";
         },1000)
      },
      up(){
         if(this.cost>0)
            this.show=!this.show;
      },
      add(key){
         this.$props.order[key].order+=1;
      },
      minus(key){
         if(this.$props.order[key].order>0)
            this.$props.order[key].order-=1;
      },
      empty(){
         for(let item of this.$props.order){
            item.order=0;
         }
      }
   }
}
</script>

<style lang="scss" scoped>
.trans-enter-active,.trans-leave-active{
   transition: all .2s;
}
.trans-enter,.trans-leave-to{
   transform:translate(0,80%);
}
.delay-enter-active{
   transition: all .2s;
   transition-delay: .2s;
}
.delay-enter,.delay-leave-to{
   opacity: 0;
}
.opacit-enter-active,.opacit-leave-active{
   transition: all .2s;
}
.opacit-enter,.opacit-leave-to{
   opacity: 0;
}
.car-box{
   position: fixed;
   bottom: 0;
   left:0;
   width:100%;
   z-index:9999;
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