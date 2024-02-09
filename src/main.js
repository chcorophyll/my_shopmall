import Vue from 'vue';
import App from './App.vue';
import router from "@/router";
import store  from '@/store';
import { Button,MessageBox} from 'element-ui';


Vue.config.productionTip = false

//定义全局组件：在入口文件注册一次之后，在任何组件当中都可以使用
import typeNav from "@/components/TypeNav";
import Carousel from "@/components/Carousel";
import Pagination from '@/components/Pagination';


//全局组件：第一个参数 组件名字  第二个参数：那个组件
Vue.component(typeNav.name, typeNav);
Vue.component(Carousel.name, Carousel);
Vue.component(Pagination.name, Pagination);

Vue.component(Button.name,Button);
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;


import * as API from "@/api";


import "@/mock/mockServe";
import "swiper/css/swiper.css";

import VueLazyload from 'vue-lazyload';
import atm from '@/assets/1.gif';
Vue.use(VueLazyload,{
  loading:atm
});



new Vue({
  render: h => h(App),
  beforeCreate() {
		Vue.prototype.$bus = this; //安装全局事件总线
    Vue.prototype.$API = API;
	},
  router,
  store,
}).$mount('#app')
