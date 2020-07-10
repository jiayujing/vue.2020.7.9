<template>
  <div id="app">
<!--    顶部栏区域-->
    <!-- fixed决定是否固定，默认值为falses,值为true时固定 -->
    <mt-header fixed title="信息管理系统">
      <router-link to="/" slot="left">
        <mt-button icon="back">返回</mt-button>
      </router-link>
      <mt-button icon="more" slot="right"></mt-button>
    </mt-header>

<!--    路由组件的出口-->
    <router-view/>

<!--    底部栏-->
    <div class="tabBar" >
      <ul>
        <li v-for="tab in tabs" :key="tab.id">
          <!-- exact开启router-link的严格模式 -->
          <router-link :to="tab.routerName" exact>
            <img :src="tab.imgSrc" alt="">
            <p>{{tab.title}}</p>
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import index from "./assets/index.png";
  import VIP from "./assets/VIP.png";
  import shopcart from "./assets/shop-cart.png";
  import search from "./assets/search.png";

  let tabs=[
    {id:1,title:"首页",imgSrc:index, routerName:{name:"home"}},
    {id:2,title:"会员",imgSrc:VIP, routerName:{name:"vip"}},
    {id:3,title:"购物车",imgSrc:shopcart, routerName:{name:"cart"}},
    {id:4,title:"查找",imgSrc:search, routerName:{name:"search"}}

  ]

  export default {
      name: 'App',
      data(){
        return{
          selected:' ',
          fixed:true,
          tabs,
        }
      },
      watch:{
        selected:function (newV,oldV) {
          // console.log(newV);
          this.$router.push({name:newV});
        }
      }
}
</script>

<style lang="css" scoped>
  .tabBar{
    width: 100%;
    height: 55px;
    background-color: #cccccc;
    position: absolute;
    bottom: 0;
  }
  .tabBar ul{
    width: 100%;
    overflow: hidden;
    list-style: none;
  }
  .tabBar ul li{
    float: left;
    width: 25%;
    height: 55px;
    text-align: center;
  }
  .tabBar ul li a{
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-top: 10px;
  }
  .tabBar ul li a.link-active{
    background-color: orange;
  }
  .tabBar ul li p{
    font-size: 12px;
  }
  .tabBar ul li a img{
    width: 25px;
    height: 25px;
  }
</style>
