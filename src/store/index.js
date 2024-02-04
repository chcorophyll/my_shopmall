import Vue from "vue";
import Vuex from "vuex";
import home from "./home"
import search from "./search";
import detail from "./detail";
import shopcart from "./shopcart";
import user from "./user";

Vue.use(Vuex);

// const state = {};
// const actions = {};
// const mutations = {};
// const getters = {};

// export default new Vuex.Store({
//     state,
//     actions,
//     mutations,
//     getters,
// });

// 模块化开发
export default new Vuex.Store({
    modules:{home, search, detail, shopcart, user}
});
