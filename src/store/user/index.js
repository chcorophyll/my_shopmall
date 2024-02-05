import { reqgetCode, reqregisterUser, reqloginUser, reqgetUserInfo, reqlogoutUser} from "@/api";
import { setToken, getToken, removeToken } from "@/utils/token";


const state = {
    code: '',
    token: getToken(),
    userInfo: {},
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

    async loginUser({commit}, user) {
        let result = await reqloginUser(user);
        if (result.code == 200) {
            commit("LOGINUSER", result.data.token);
            setToken(result.data.token);
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },

    async getUserInfo({commit}) {
        let result = await reqgetUserInfo();
        if (result.code == 200) {
            commit("GETUSERINFO", result.data);
            return "ok";
        } else {
            return Promise.reject(new Error("failed"));
        }
    },

    async logoutUser({commit}) {
        let result = await reqlogoutUser();
        if (result.code == 200) {
            commit("LOGOUTUSER");
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

    LOGINUSER(state, token) {
        state.token = token;
    },

    GETUSERINFO(state, userInfo) {
        state.userInfo = userInfo;
    },

    LOGOUTUSER(state) {
        state.token = '';
        state.userInfo = {};
        removeToken();
    },
};

const getters = {};

export default {state, actions, mutations, getters};