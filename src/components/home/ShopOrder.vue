<template>
  <div>
    <div class="adr">
      <img src="./images/order1.png" alt="">
    </div>
    <div class="recommond-box">
      <p class="bold oth">商家推荐</p>
      <ul class="recommond">
        <li v-for="(r,k) in recommond" :key="k">
          <img :src="r.img" alt="" class="recom-img">
          <p style="margin-bottom:0.03rem">{{r.title}}</p>
          <p class="small">月售{{r.num}} 好评率{{r.grade}}</p>
          <div class="between row">
            <div>
              <span class="price" v-if="!r.discount">￥{{r.price}}</span>
              <span class="price" v-if="r.discount">￥{{r.discount*r.price/10}}</span>
              <del class="old" v-if="r.discount">{{r.price}}</del>
            </div>
            <p>
              <span class="iconfont" v-if="r.order>0" @click="minus(k)">&#xe6a9;</span>
              <span v-if="r.order>0" class="order-num">{{r.order}}</span>
              <span class="iconfont" @click="add(k)">&#xe61a;</span>
            </p>
          </div>
        </li>
      </ul>
    </div>
    <shop-menu :charge="charge" :start="start" :list="list"></shop-menu>
  </div>
</template>

<script>
import ShopMenu from './ShopMenu.vue';
export default {
  name:'shop-order',
  components:{
    ShopMenu
  },
  data(){
    return{
      list:[
        {sort:'新店优惠活动',menus:[
          {pid:1,title:'特色炸年糕',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:12,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),isRecom:false,order:0}
        ]},
        {sort:'手撕鸡套餐饭',menus:[
          {pid:2,title:'（大额满减）手撕鸡饭+五花肉+百事可乐',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:22,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),isRecom:false,order:0},
          {pid:3,title:'招牌手撕鸡饭+热狗',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:12,grade:'80%',img:require('./images/good2.jpeg'),isRecom:true,order:0},
          {pid:4,title:'招牌手撕鸡+脆骨肠',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:8,grade:'80%',discount:5,count:1,img:require('./images/good3.jpeg'),isRecom:true,order:0}
        ]},
        {sort:'加米饭',menus:[
          {pid:5,title:'手撕鸡饭+五花肉',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:2,grade:'80%',img:require('./images/good1.jpeg'),isRecom:true,order:0}
        ]},
        {sort:'满减套餐',menus:[
          {pid:6,title:'乳酸菌',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:10,grade:'80%',discount:5,count:1,img:require('./images/good1.jpeg'),isRecom:true,order:0}
        ]},
        {sort:'口味',menus:[
          {pid:7,title:'招牌手撕鸡饭',des:'限购一份，凑单不送哦主要原料：脱脂酸奶',num:200,price:9,grade:'80%',img:require('./images/good1.jpeg'),isRecom:true,order:0}
        ]}
      ],
      charge:1,
      start:15,
      discount:{fill:[
        {top:15,minus:13},
        {top:40,minus:20}
      ]}
    }
  },
  computed:{
    recommond(){
      let recommond=[];
      for(let  item of this.list){
        for(let item2 of item.menus){
          if(item2.isRecom)
            recommond.push(item2);
        }
      }
      return recommond;
    }
  },
  methods:{
    add(key){
      this.recommond[key].order+=1;
    },
    minus(key){
      if(this.recommond[key].order>0)
        this.recommond[key].order-=1;
    }
  }
}
</script>

<style lang="scss" scoped>
.adr{
  padding:0 0.15rem;
  margin-top:0.07rem;
  >img{
    width: 100%;
    object-fit: cover;
    border-radius:0.05rem;
  }
}
.recommond-box{
  overflow: hidden;
  .oth{
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
      .add{
        float:right;
        color:rgb(35, 149, 255);
        font-size:0.2rem;
      }
      .recom-img{
        width:1.2rem;
        height:1.2rem;
        border-radius:0.05rem
      }
      >p{
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width:100%;
      }
      .between{
        justify-content: space-between;
        .iconfont{
          font-size:0.2rem;
          color: #2395ff;
        }
        .order-num{
          margin:0 0.05rem;
        }
        .old{
          margin-left:0.05rem;
          color:#999;
          font-size:0.14rem;
        }
      }
    }
  }
}

</style>
<style>
.bold{
  font-weight: 700;
  color:#333;
  font-size:0.16rem;
  margin-bottom:0.05rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.price{
  color: rgb(59, 34, 31);
  font-size:0.17rem;
  color: rgb(255, 83, 57);
}

.small{
  color:#999;
  font-size:0.1rem;
  margin-bottom:0.05rem;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.orange{
  color: rgb(255, 83, 57);
}
.count{
  position: absolute;
  right:0;
  top:0;
  height:0.15rem;
  padding:0 0.05rem;
  border-radius:0.15rem;
  line-height: 0.15rem;
  font-size:0.1rem;
  color:white;
  background-image: linear-gradient(-90deg,#ff7416,#ff3c15 98%);

}
</style>