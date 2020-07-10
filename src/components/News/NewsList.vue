<template>
  <div class="news">
    <Navbar title="新闻列表"/>
    <div class="newsList">
     <ul>
       <li v-for="news of newsList"  :key="news.id">
         <router-link :to="{name:'detail',query:{id:'news.id'}}" >
           <div class="news_img">
             <img :src="news.img_url" alt="">
           </div>
           <div class="content">
             <p class="title">{{news.title}}</p>
             <div class="news-desc">
               <p class="summary">{{news.zhai_yao}}</p>
               <p>
                 <span class="praise">点赞数:{{news.click}}</span>
                 <span class="time">发表时间:{{news.add_time | converTime('YYYY-MM-DD')}}</span>
               </p>
             </div>
           </div>
         </router-link>
       </li>
     </ul>
    </div>
  </div>
</template>
<script>
  export default {
    name:'NewsList',
    data(){
      return{
        newsList:[
          {id:'1',title:'习近平出席解放军和武警部队代表团全体会议并发表重要讲话',add_time:'2020-05-26',zhai_yao:'中共中央总书记、国家主席、中央军委主席习近平26日下午在出席十三届全国人大三次会议解放军和武警部队代表团全体会议',click:'2389',img_url:'http://lianghui.people.com.cn/NMediaFile/2020/0526/MAIN202005262008000354891733438.jpg'},
          {id:'2',title:'习近平出席解放军和武警部队代表团全体会议并发表重要讲话',add_time:'2020-05-26',zhai_yao:'中共中央总书记、国家主席、中央军委主席习近平26日下午在出席十三届全国人大三次会议解放军和武警部队代表团全体会议',click:'2389',img_url:'http://lianghui.people.com.cn/NMediaFile/2020/0526/MAIN202005262008000354891733438.jpg'},
          {id:'3',title:'习近平出席解放军和武警部队代表团全体会议并发表重要讲话',add_time:'2020-05-26',zhai_yao:'中共中央总书记、国家主席、中央军委主席习近平26日下午在出席十三届全国人大三次会议解放军和武警部队代表团全体会议',click:'2389',img_url:'http://lianghui.people.com.cn/NMediaFile/2020/0526/MAIN202005262008000354891733438.jpg'},
          {id:'4',title:'习近平出席解放军和武警部队代表团全体会议并发表重要讲话',add_time:'2020-05-26',zhai_yao:'中共中央总书记、国家主席、中央军委主席习近平26日下午在出席十三届全国人大三次会议解放军和武警部队代表团全体会议',click:'2389',img_url:'http://lianghui.people.com.cn/NMediaFile/2020/0526/MAIN202005262008000354891733438.jpg'},
        ]
      }
    }
  }
</script>

<style lang="css" scoped>
  .news{
        padding-top: 40px;
  }
  .newsList{
    width: 100%;
    font-size: 12px;
  }
  .newsList ul{
     padding-bottom: 45px;
  }
  .newsList ul li{
    margin: 0px 0px  0px 0px;
  }
  .newsList ul li a{
    width: 100%;
    display: block;
  }
  .newsList ul li a div{
    float: left;
  }
  .news_img{
    width: 40%;
    height: 80%;
  }
  .news_img img{
    width: 90%;
    height: 80%;
    margin: 15% 10%;
  }
  .content{
    margin: 0 4% 16% ;
    width: 50%;
    height: 100%;
    color: black;
  }
  .content p{
    margin-top: 4%;
  }
  .title{
    font-size: 16px;
  }
  .summary{
    font-size: 14px;
  }
  .time{
    display: inline-block;
  }

</style>
