<template>
  <div id="home">
    <!--轮播图-->
    <mt-swipe :auto="4000" style="height:250px;"  class="swipe">
      <mt-swipe-item v-for="item of imgList" :key="item.id">
        <img :src="item.url" alt=""/>
      </mt-swipe-item>
    </mt-swipe>

    <!--九宫格-->
    <div class="list">
      <ul>
        <li v-for="grid of grids" :key="grid.id">
          <router-link :to="grid.router">
            <img :src='grid.src' alt="grid.title" />
            <p>{{ grid.title }}</p>
          </router-link>
        </li>
        
      </ul>
    </div>

  </div>
</template>

<script>
  //模块导入,assets文件夹下的静态资源
  import src1 from '../../assets/新闻资讯.png';
  import src2 from '../../assets/图文分享.png';
  import src3 from '../../assets/商品展示.png';
  import src4 from '../../assets/资讯.png';
  import src5 from '../../assets/留言反馈.png';
  import src6 from '../../assets/联系我们.png';

  var grids = [
    {id: 1, src: src1, title: '新闻资讯',router:{name:'NewsList'}},
    {id: 2, src: src2, title: '图文分享',router:{name:'NewsList'}},
    {id: 3, src: src3, title: '商品展示',router:{name:'NewsList'}},
    {id: 4, src: src4, title: '资讯',router:{name:'NewsList'}},
    {id: 5, src: src5, title: '留言反馈',router:{name:'NewsList'}},
    {id: 6, src: src6, title: '联系我们',router:{name:'NewsList'}},
  ];
  export default {
    name:"home",
    data () {
      return {
        grids:grids,
        imgList: [{
          id: '001',
          url: 'https://m.360buyimg.com/babel/jfs/t1/121199/8/150/221253/5eb3a492Ed4a70515/8c7172542b630f1b.jpg.webp'
        }, {
          id: '002',
          url: 'https://m.360buyimg.com/babel/jfs/t1/123484/29/158/187337/5eb3a18bE92963336/97eda83d64ae0e9e.jpg.webp'
        },{
          id:'003',
          url:'https://m.360buyimg.com/babel/jfs/t1/51282/39/14733/112077/5db95492Ede6b6d60/2d490033ed3e5da2.jpg'
        }],
      }
    }
  }
</script>

<style lang="css" scoped>
  .swipe img{
    width:100%;
    height:250px;
  }
  .list{
    width:100%;
    height:100%;
  }
  .list ul{
    display:flex;
    flex-wrap:wrap;
  }
  .list ul li{
    width:33%;
    height:100px;
    text-align:center;
    font-size:14px;
    margin-top:15px;
  }
  .list ul li a{
    display:inline-block;
    width:56px;
    height:50px;
    margin:0 auto;
  }
  .list img{
    width:50px;
    height:50px;
  }
</style>

