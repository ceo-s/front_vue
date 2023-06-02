export const auth = {
  state() {
    return {
      token: "",
      isAuthenticated: false,
    };
  },
  getters: {},
  mutations: {
    initStorage(state) {
      let token = localStorage.getItem("Authorization");
      if (token) {
        state.token = token;
        state.isAuthenticated = true;
      } else {
        state.token = "";
        state.isAuthenticated = false;
      }
    },
    setToken(state, token) {
      localStorage.setItem("Authorization", "Token " + token);
      state.token = token;
    },
    removeToken(state) {
      localStorage.removeItem("Authorization");
      state.token = "";
    },
    setStatus(state, status) {
      state.isAuthenticated = status;
    },
  },
  actions: {},
  modules: {},
  namespaced: true,
};
