import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    isShowAuth: false
  },
  mutations: {
    setIsShowAuth(state, value) {
      state.isShowAuth = value;
    }
  },
  getters: {
    isShowAuth: state => state.isShowAuth
  }
});

export default store;
