import { reqgetAddressInfo, reqgetOrderInfo } from "@/api";


const state = {
    addressInfo: [],
    orderInfo: {},
};

const actions = {
    async getAddressInfo({commit}) {
        let result = await reqgetAddressInfo();
        if (result.code == 200) {
            commit("GETADDRESSINFO", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    async getOrderInfo({commit}) {
        let result = await reqgetOrderInfo();
        if (result.code == 200) {
            commit("GETORDERINFO", result.data);
            return 'ok';
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
};

const mutations = {
    GETADDRESSINFO(state, addressInfo) {
        state.addressInfo = addressInfo;
    },
    GETORDERINFO(state, orderInfo) {
        state.orderInfo = orderInfo;
    },
};

const getters = {};

export default {state, actions, mutations, getters};