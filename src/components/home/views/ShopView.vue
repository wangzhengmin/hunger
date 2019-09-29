<template>
  <div>
    <shop-top></shop-top>
    <div class="shop-nav row" ref="box">
      <a href="javascript:void(0)">
        <span :class="[current=='shop-order'?'shop-action':'']" @click="current='shop-order'">点餐</span>
      </a>
      <a href="javascript:void(0)">
        <span :class="[current=='shop-argu'?'shop-action':'']" @click="current='shop-argu'">评价</span>
      </a>
      <a href="javascript:void(0)">
        <span :class="[current=='shop-merchant'?'shop-action':'']" @click="current='shop-merchant'">商家</span>
      </a>
    </div>
    <component v-bind:is="current"></component>
  </div>
</template>

<script>
import ShopTop from '../ShopTop.vue';
import ShopOrder from '../ShopOrder.vue';
import ShopArgu from '../ShopArgu.vue';
import ShopMerchant from '../ShopMerchant.vue';
export default {
  data(){
    return{
      current:'shop-order'
    }
  },
  components:{
    ShopTop,
    ShopOrder,
    ShopArgu,
    ShopMerchant
  },
  methods:{
  }
}
</script>

<style lang="scss" scooped>
.shop-nav{
  position: sticky;
  top:0;
  left:0;
  text-align: center;
  font-weight:400;
  background:white;
  z-index: 999;
  >a{
    color: #666;
    flex:1 1;
    height:0.4rem;
    line-height: 0.4rem;
    >span{
      display: inline-block;
      height:100%;
    }
    .shop-action{
      border-bottom:0.02rem solid rgb(39, 191, 230);
      color:#333;
      font-weight: 700;
    }
  }
}
</style>