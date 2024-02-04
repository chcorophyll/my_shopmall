import { reqgetCode, reqregisterUser } from "@/api";


const state = {
    code: '',
};

const actions = {
    async getCode({commit}, phone) {
        let result = await reqgetCode(phone);
        if (result.code == 200) {
            commit("GETCODE", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
    async registerUser({commit}, user) {
        let result = await reqregisterUser(user);
        if (result.code == 200) {
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },
};

const mutations = {
    GETCODE(state, code) {
        state.code = code;
    },
};

const getters = {};

export default {state, actions, mutations, getters};