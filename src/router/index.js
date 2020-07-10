// <!-- 环境变量及基本变量配置 -->
import Vue from 'vue';
import Router from 'vue-router';
// import HelloWorld from '@/components/HelloWorld'
// import home from '../components/Home/home.vue'
import home from "../components/Home/home";
import cart from "../components/Cart/cart";
import search from "../components/Search/search";
import vip from "../components/Vip/vip";
import NewsList from "../components/News/NewsList";
import NewsDetail from "../components/News/NewsDetail";

Vue.use(Router)

export default new Router({
  // 设置链接激活时使用的类名
  linkActiveClass:'link-active',
  routes: [
    {
      path: '/',
      redirect:'/home'
    },
    {
      path: '/home',
      name: 'home',
      component: home
    },
    {
      path: '/cart',
      name: 'cart',
      component: cart
    },
    {
      path: '/search',
      name: 'search',
      component: search
    },
    {
      path: '/vip',
      name: 'vip',
      component: vip
    },
    {
      path:'/NewsList',
      name:'NewsList',
      component: NewsList
    },
    {
      path:'/NewsDetail',
      name:'detail',
      component:NewsDetail,
    }

  ]
})
