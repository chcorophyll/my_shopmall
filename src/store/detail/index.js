import { reqgetGoodsInfo, reqAddOrUpdateShopCart } from "@/api";
import { getUUID } from "@/utils/uuid_token";


const state = {
    goodInfo: {},
    uuid_token: getUUID(),
};

const actions = {
    async getGoodInfo({commit}, skuId) {
        let reusult = await reqgetGoodsInfo(skuId);
        if (reusult.code == 200) {
            commit("GETGOODINFO", reusult.data)
        }
    },
    async addOrUpdateShopCart({commit}, {skuId, skuNum}) {
        let result = await reqAddOrUpdateShopCart(skuId, skuNum);
        if (result.code == 200) {
            return "ok";
          } else {
            return Promise.reject(new Error("failed"));
          }
    },
};

const mutations = {
    GETGOODINFO(state, goodInfo) {
        state.goodInfo = goodInfo;
    },
};

const getters = {
    categoryView(state) {
        return state.goodInfo.categoryView || {};
    },
    skuInfo(state) {
        return state.goodInfo.skuInfo || {};
    },
    spuSaleAttrList(state) {
        return state.goodInfo.spuSaleAttrList || [];
    },
};

export default {
    state,
    actions,
    mutations,
    getters
};