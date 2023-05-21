export const trainingProgram = {
  state() {
    return {
      clientId: null,
      programId: null,
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
