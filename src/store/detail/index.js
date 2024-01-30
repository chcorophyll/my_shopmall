import { reqgetGoodsInfo } from "@/api";

const state = {
    goodInfo: {},
};

const actions = {
    async getGoodInfo({commit}, skuId) {
        let reusult = await reqgetGoodsInfo(skuId);
        if (reusult.code == 200) {
            commit("GETGOODINFO", reusult.data)
        }
    },
};

const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};