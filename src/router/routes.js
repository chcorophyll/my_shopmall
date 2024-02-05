import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";
import Detail from "@/pages/Detail";
import AddCartSuccess from "@/pages/AddCartSuccess";
import ShopCart from "@/pages/ShopCart";
import Trade from "@/pages/Trade";
import Pay from "@/pages/Pay";


export default [
  {
    path: "/pay",
    name: "pay",
    component: Pay,
    meta: {isShowFooter: true}, 
  },
  {
    path: "/trade",
    name: "trade",
    component: Trade,
    meta: {isShowFooter: true}, 
  },
  {
    path: "/shopcart",
    name: "shopcart",
    component: ShopCart,
    meta: {isShowFooter: true}, 
  },
  {
    path: "/addcartsuccess",
    name: "addcartsuccess",
    component: AddCartSuccess ,
    meta: {isShowFooter: true}, 
  },
  {
    path: "/detail/:skuId",
    component: Detail,
    meta: {isShowFooter: true},
  },
  {
    path: "/home",
    component: Home,
    meta: {isShowFooter: true},
  },
  {
    path: "*",
    redirect: "/home",
    meta: {isShowFooter: true},
  },
  {
    path: "/search/:keyword?",
    name:"search",
    component: Search,
    meta: {isShowFooter: true},
  },
  {
    path: "/register",
    component: Register,
    meta: {isShowFooter: false},
  },
  {
    path: "/login",
    component: Login,
    meta: {isShowFooter: false},
  },
];
