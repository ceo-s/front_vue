export const programs = {
  state() {
    return {
      clientId: null,
      client: null,
      trainingProgramId: null,
      dietProgramId: null,
    };
  },
  getters: {},
  mutations: {
    setClientId(state, id) {
      state.clientId = id;
    },
    setClient(state, client) {
      state.client = client;
    },
    setTrainingProgramId(state, id) {
      state.trainingProgramId = id;
    },
    setDietProgramId(state, id) {
      state.dietProgramId = id;
    },
  },
  actions: {
    resetStore({ commit }) {
      commit("setClientId", null);
      commit("setClient", null);
      commit("setTrainingProgramId", null);
      commit("setDietProgramId", null);
    },
  },
  namespaced: true,
};
