export const dietProgram = {
  state() {
    return {
      clientId: null,
      programId: 1,
    };
  },
  getters: {},
  mutations: {
    setClientId(state, id) {
      state.clientId = id;
    },
    setProgramId(state, id) {
      state.programId = id;
    },
  },
  actions: {},
  modules: {},
  namespaced: true,
};
