import { reqgetCategoryList, reqgetBannerList, reqgetFloorList} from "@/api";

const state = {
    categoryList: [],
    bannerList: [],
    floorList: [],
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
    async getFloorList({commit}) {
        let result = await reqgetFloorList();
        if (result.code == 200) {
            commit("GETFLOORLIST", result.data);
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
    GETFLOORLIST(state, floorList) {
        state.floorList = floorList;
    },
};

const getters = {};

export default {
    state,
    actions,
    mutations,
    getters
};