export const popUps = {
    state() {
      return {
        auth: false,
        // exercise: '', // or link for exercise detail fetch
        // clientSelect: '', // or client id
        cycleCreate: false,
        menuOnScroll: false,
        cycleDetail: false, // false or cycle id
        addClient: false,
      }
    },
    getters: {
      
    },
    mutations: {
        setAuth(state, bool) {
            state.auth = bool;
        },
        setExercise(state, link) {
            state.exercise = link;
        },
        setClientSelect(state, id) {
          state.clientSelect = id;
        },
        setCycleCreate(state, bool) {
          state.cycleCreate = bool;
        },
        setMenuOnScroll(state, bool) {
          state.menuOnScroll = bool;
        },
        setCycleDetail(state, bool) {
          state.cycleDetail = bool;
        },
        setAddClient(state, bool) {
          state.addClient = bool
        },
    },
    actions: {
  
    },
    modules: {
    },
    namespaced: true,
  }