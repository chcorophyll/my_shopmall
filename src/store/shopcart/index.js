import { reqgetCartList } from "@/api";

const state = {};

const actions = {
    async getCartList({commit}) {
        let result = await reqgetCartList();
        console.log(result.code);
    },
};

const mutations = {};

const getters = {};

export default {state, actions, mutations, getters};