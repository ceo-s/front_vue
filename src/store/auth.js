export const auth = {
  state() {
    return {
      token: "",
      isAuthenticated: false,
    };
  },
  getters: {},
  mutations: {
    setToken(state, token) {
      state.token = token;
    },
    setStatus(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {
    initStorage({ commit }) {
      let token = localStorage.getItem("Authorization");

      if (token) {
        commit("setToken", token);
        commit("setStatus", true);
      } else {
        commit("setToken", "");
        commit("setStatus", false);
      }
    },
    storeToken(_, token) {
      localStorage.setItem("Authorization", "Token " + token);
    },
    removeToken({ commit }) {
      localStorage.removeItem("Authorization");
      commit("setToken", "");
    },
    login({ dispatch }, token) {
      dispatch("storeToken", token);
      dispatch("initStorage");
    },
    logout({ dispatch }) {
      dispatch("removeToken");
      dispatch("initStorage");
      location.reload();
    },
  },
  namespaced: true,
};
