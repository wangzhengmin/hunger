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
          <span class="price">${{r.price}}</span>
          <span class="iconfont add">&#xe61a;</span>
        </li>
      </ul>
    </div>
    <shop-menu></shop-menu>
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
      recommond:[
        {title:'（大额满减）手撕鸡饭+五花肉+百事可乐',num:46,grade:"100%",price:15,img:require('./images/good1.jpeg')},
        {title:'招牌手撕鸡饭+热狗',num:56,grade:"100%",price:18,img:require('./images/good1.jpeg')},
        {title:'招牌手撕鸡+脆骨肠',num:66,grade:"100%",price:25,img:require('./images/good1.jpeg')},
        {title:'招牌手撕鸡+脆骨肠',num:66,grade:"100%",price:25,img:require('./images/good1.jpeg')},
        {title:'招牌手撕鸡+脆骨肠',num:66,grade:"100%",price:25,img:require('./images/good1.jpeg')},       
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.adr{
  padding:0 0.15rem;
  margin-top:0.07rem;
  >img{
    max-width: 100%;
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
</style>