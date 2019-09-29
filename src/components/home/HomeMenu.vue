<template>
  <div class="img-menu">
    <ul class="img-box row">
      <li class="img-item" v-for="(m,k) in menus" :key="k">
        <a v-for="(l,k2) in m.list" :key="k2" href="#">
          <img :src="l.img" alt="">
          <p>{{l.des}}</p>
        </a>
      </li>
    </ul>
    <div class="point row" v-act>
      <a href="javascript:void(0)" v-for="i in menus.length" :key="i"></a>
    </div>
  </div>
</template>

<script>
export default {
  name:'home-menu',
  data(){
    return{
      menus:[
        {
          list:[
            {href:"#",img:require('./images/1.jpeg'),des:'美食'},
            {href:"#",img:require('./images/2.jpeg'),des:'夜宵'},
            {href:"#",img:require('./images/3.jpeg'),des:'商超便利'},
            {href:"#",img:require('./images/4.jpeg'),des:'水果'},
            {href:"#",img:require('./images/5.jpeg'),des:'医药健康'},
            {href:"#",img:require('./images/6.jpeg'),des:'浪漫鲜花'},
            {href:"#",img:require('./images/7.jpeg'),des:'跑腿代购'},
            {href:"#",img:require('./images/8.jpeg'),des:'汉堡披萨'},
            {href:"#",img:require('./images/9.jpeg'),des:'厨房生鲜'},
            {href:"#",img:require('./images/10.jpeg'),des:'甜品饮品'}
          ]
        },
        {
          list:[
            {href:"#",img:require('./images/1.jpeg'),des:'美食'},
            {href:"#",img:require('./images/2.jpeg'),des:'夜宵'},
            {href:"#",img:require('./images/3.jpeg'),des:'商超便利'},
            {href:"#",img:require('./images/4.jpeg'),des:'水果'},
            {href:"#",img:require('./images/5.jpeg'),des:'医药健康'},
            {href:"#",img:require('./images/6.jpeg'),des:'浪漫鲜花'},
            {href:"#",img:require('./images/7.jpeg'),des:'跑腿代购'},
            {href:"#",img:require('./images/8.jpeg'),des:'汉堡披萨'},
            {href:"#",img:require('./images/9.jpeg'),des:'厨房生鲜'},
            {href:"#",img:require('./images/10.jpeg'),des:'甜品饮品'}
          ]
        }
      ]
    }
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

<style lang='scss' scoped>
.img-menu{
 overflow: hidden;
}
.img-box{
  width:200%;
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
</style>