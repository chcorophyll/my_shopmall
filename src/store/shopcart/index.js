import { reqgetCartList, reqdeleteCartById, requpdateCheckedById} from "@/api";

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
    async deleteCartList({ commit }, skuId) {
        let result = await reqdeleteCartById(skuId);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    async updateChecked({ commit }, {skuId, isChecked}) {
        let result = await requpdateCheckedById(skuId, isChecked);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },

    async deleteAllChecked({dispatch, getters}) {
        let allPromise = [];
        getters.cartList.cartInfoList.forEach((item) => {
            let promise = item.isChecked == 1 ? dispatch("deleteCartList", item.skuId): "";
            allPromise.push(promise)
        });
        return Promise.all(allPromise);
    },

    async updateAllChecked({dispatch, state}, isChecked) {
        
        let allPromise = [];
        state.cartList[0].cartInfoList.forEach((item) => {
            let promise =  dispatch("updateChecked", {skuId: item.skuId, isChecked,});
            allPromise.push(promise);
        });
        return Promise.all(allPromise);
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