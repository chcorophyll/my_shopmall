import { reqgetSearchInfo } from "@/api";

const state = {
    searchInfo: {},
};

const actions = {
    async getSearchInfo({commit}, params= {}) {
        let result = await reqgetSearchInfo(params);
        if (result.code == 200) {
            commit("GETSEARCHINFO", result.data);
        }
    },
};

const mutations = {
    GETSEARCHINFO(state, searchInfo) {
        state.searchInfo = searchInfo;
    },
};

const getters = {
    goodsList(state) {
        return state.searchInfo.goodsList || [];
    },

    trademarkList(state) {
        return state.searchInfo.trademarkList || [];
    },

    attrsList(state) {
        return state.searchInfo.attrsList || [];
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};