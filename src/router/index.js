import VueRouter from "vue-router";
import Vue from "vue";
import routes from "./routes";
import store from "@/store";


//使用插件
Vue.use(VueRouter);

let originPush = VueRouter.prototype.push;
VueRouter.prototype.push = function(location, resolve, reject) {
  if (resolve & reject) {
    originPush.call(this, location, resolve, reject);
  } else {
    originPush.call(this, location, () => {}, () => {});
  }
};
let originReplace = VueRouter.prototype.replace;
VueRouter.prototype.replace = function(location, resolve, reject) {
  if (resolve & reject) {
    originReplace.call(this, location, resolve, reject);
  } else {
    originReplace.call(this, location, () => {}, () => {});
  }
};



//对外暴露VueRouter类的实例
let router = new VueRouter({
    //配置路由
    //第一:路径的前面需要有/(不是二级路由)
    //路径中单词都是小写的
    //component右侧V别给我加单引号【字符串：组件是对象（VueComponent类的实例）】
    routes,
    //滚动行为
    scrollBehavior(to, from, savedPosition) {
      //返回的这个y=0，代表的滚动条在最上方
      return { y: 0 };
    },
  });

  router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token;
    let name = store.state.user.userInfo.name;
    if (token) {
      if(to.path=="/login"||to.path=='/register') {
        next('/home');
      } else {
        if (name) {
          next();
        } else {
          try {
            await store.dispatch('getUserInfo');
            next();
          } catch (error) {
            await store.dispatch('logoutUser');
            next('/login');
          }
        }
        
      }
    } else {
      next();
    }
  })

  export default router;