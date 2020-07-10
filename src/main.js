// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// 引入Vue内核
import Vue from 'vue'
// 引入App根组件
import App from './App'
// 引入vue路由
import router from './router'
import Axios from "axios"
// 阻止启用生产环境消息
Vue.config.productionTip = false
//使用mint-ui 引入全部组件
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
Vue.use(MintUI)
//配置公共的URL
// Axios.defaults.baseURL="https://m.360buyimg.com/babel/jfs/t1/"
// //配置axios
Vue.prototype.$axios=Axios;

//引入自己书写的全局css样式（在static文件夹下)
import '../static/CSS/global.css'

// 注册全局导航栏组件
import Navbar from './common/Navbar'
Vue.component(Navbar.name,Navbar);

import Moment from 'moment';
// 自定义moment全局过滤器
Vue.filter('converTime',function(data,formatStr){
  return Moment(data).format(formatStr);
});
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
