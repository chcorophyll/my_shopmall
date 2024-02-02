import { reqgetCartList } from "@/api";

const state = {
    cartList: [],
};

const actions = {
    async getCartList({ commit }) {
        let result = await reqgetCartList();
        if (result.code == 200) {
            commit("GETCARTLIST", result.data);
        }
    },
};

const mutations = {
    GETCARTLIST(state, cartList) {
        state.cartList = cartList;
    },

};

const getters = {
    cartList(state) {
        return state.cartList[0] || {};
    },
};

export default { state, actions, mutations, getters };