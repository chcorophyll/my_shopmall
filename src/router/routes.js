import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";


export default [
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
    path: "/search",
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
