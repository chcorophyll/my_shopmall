import Home from "@/pages/Home";
import Search from "@/pages/Search";
import Register from "@/pages/Register";
import Login from "@/pages/Login";


export default [
  {
    path: "/home",
    component: Home,
  },
  {
    path: "*",
    redirect: "/home",
  },
  {
    name: "search", // 是当前路由的标识名称
    path: "/search",
    component: Search,
  },
  {
    path: "/register",
    component: Register,
    // meta: {
    //   isHideFooter: true,
    // },
  },
  {
    path: "/login",
    component: Login,
    // meta: {
    //   isHideFooter: true,
    // },
  },
];
