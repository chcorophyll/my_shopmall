import { reqgetCategoryList } from "@/api";

const state = {
    categoryList: [],
};

const actions = {
    async getCategoryList({commit}) {
        let result = await reqgetCategoryList();
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },
};

const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};