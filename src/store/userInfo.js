import { getUser } from "@/components/entities/Coach/api/Get";
export const userInfo = {
  state() {
    return {
      profileInfo: {},
      clients: [],
      cycles: [],
    };
  },
  getters: {},
  mutations: {
    setProfileInfo(state, info) {
      state.profileInfo = info;
    },
  },
  actions: {
    async fetchProfileInfo({ commit }) {
      commit("setProfileInfo", await getUser());
    },
  },
  modules: {},
  namespaced: true,
};
