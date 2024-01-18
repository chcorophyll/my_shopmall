import Vue from 'vue'
import App from './App.vue'
import router from "@/router";


Vue.config.productionTip = false

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";


//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);


import {reqgetCategoryList} from "@/api"
reqgetCategoryList();



new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
