import axios from "axios";
export const userInfo = {
    state() {
      return {
        profileInfo: {},
        clients: [],
        cycles: [],
      }
    },
    getters: {
      
    },
    mutations: {
        setProfileInfo(state, info) {
            state.profileInfo = info;
        },
        setClients(state, clientsList) {
            state.clients = clientsList;
        },
        appendClient(state, client) {
            state.clients.push(client)
        },
        setCycles(state, cyclesList) {
            state.cycles = cyclesList;
        },
    },
    actions: {
        async fetchProfileInfo({ commit }) {
            await axios.get("http://127.0.0.1:8000/api/profiles/my_profile/")
                .then((resp) => {
                    commit('setProfileInfo', resp.data)
                })
                .catch(ex => console.log(ex))
        },
        async fetchClients({ commit }) {
            await axios.get("http://127.0.0.1:8000/api/clients/my_clients/")
                .then((resp) => {
                    commit('setClients', resp.data)
                })
                .catch((ex) => console.log(ex))
        },
        // async fetchCycles() {
        //     await axios.get('http://127.0.0.1:8000/api/cycles/')
        //         .then((resp) => {

        //         })
        //         .catch((ex) => console.log(ex))
        // },
    },
    modules: {
    },
    namespaced: true,
  }