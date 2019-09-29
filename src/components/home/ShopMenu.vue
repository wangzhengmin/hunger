<template>
  <div class="row">
    <div class="shop-menu">
      <ul>
        <li v-for="(t,k) in list" :key="k" class="menu-item">{{t.sort}}</li>
      </ul>
    </div>
    <div class="shop-sort">
      <div v-for="(t,k) in list" :key="k">
        <p class="sort-title">{{t.sort}}</p>
        <ul>
          <li class="row sort-item" v-for="(s,k2) in t.menus" :key="k2">
            <img :src="s.img" alt="" class="menu-img">
            <div class="item-des">
              <p class="bold">{{s.title}}</p>
              <p class="small">{{s.des}}</p>
              <p class="small">月售{{s.num}}份  好评率{{s.grade}}</p>
              <p v-if="s.discount" class="orange small">{{s.discount}}折 每单限{{s.count}}份优惠</p>
              <p>
                <span class="price">￥{{s.price}}</span>
                <del class="old" v-if="s.discount">{{s.discount*s.price/10}}</del>
                <span class="icon-btn">
                  <span class="iconfont" v-if="s.order>0">&#xe6a9;</span>
                  <span v-if="s.order>0" class="order-num">{{s.order}}</span>
                  <span class="iconfont" >&#xe61a;</span>
                </span>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name:'shop-menu',
  data(){
    return{
      list:[
        {sort:'新店优惠活动',menus:[
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),order:1}
        ]},
        {sort:'手撕鸡套餐饭',menus:[
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),order:0},
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',img:require('./images/good2.jpeg'),order:0},
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',discount:5,count:1,img:require('./images/good3.jpeg'),order:0}
        ]},
        {sort:'加米饭',menus:[
          {title:'（大额满减）手撕鸡饭+五花肉+百事可乐',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',img:require('./images/good1.jpeg'),order:0}
        ]},
        {sort:'口味',menus:[
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),order:0}
        ]},
        {sort:'口味',menus:[
          {title:'加两块喝乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',img:require('./images/good1.jpeg'),order:0}
        ]}
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.shop-menu{
  flex:0 0 0.8rem;
  height: 5.58rem;
  overflow-y: scroll;
  background-color: #f8f8f8;
  .menu-item{
    padding:0.1rem 0.05rem;
    font-size:0.13rem;
  }
}
.shop-sort{
  flex:1 1;
  height: 5.58rem;
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
      }
      .order-num{
        font-size:0.15rem;
        color:black;
        padding:0 0.1rem;
      }
    }
  }
}
</style>