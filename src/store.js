import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    categoryArr: [],
    userInfo: {},
  },
  getters: {
    getCategory: (state) => state.categoryArr,
    getUserInfo: (state) => state.userInfo,
  },
  mutations: {
    setCategory: (state, payload) => (state.categoryArr = payload),
    setUserInfo: (state, payload) => (state.userInfo = payload),
  },
  actions: {
    fetchCategory({ commit }, list) {
      commit("setCategory", list);
    },
    setUserInfo({ commit }, userInfo) {
      commit("setUserInfo", userInfo);
    },
  },
});
