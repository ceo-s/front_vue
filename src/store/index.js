import { createStore } from "vuex";
import { auth } from "@/store/auth";
import { popUps } from "@/store/popUps";
import { userInfo } from "@/store/userInfo";
import { libs } from "@/store/libs";
import { trainingProgram } from "./trainingProgram";
import { dietProgram } from "./dietProgram";

const store = createStore({
  modules: {
    auth,
    popUps,
    userInfo,
    libs,
    trainingProgram,
    dietProgram,
  },
});

export default store;
