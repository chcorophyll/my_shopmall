import { reqgetCategoryList, reqgetBannerList} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
};

const actions = {
    async getCategoryList({commit}) {
        let result = await reqgetCategoryList();
        if (result.code == 200) {
            commit("GETCATEGORYLIST", result.data);
        }
    },
    async getBannerList({commit}) {
        let result = await reqgetBannerList();
        if (result.code == 200) {
            commit("GETBANNERLIST", result.data);
        }
    },
};

const mutations = {
    GETCATEGORYLIST(state, categoryList) {
        state.categoryList = categoryList;
    },
    GETBANNERLIST(state, bannerList) {
        state.bannerList = bannerList;
    },
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};