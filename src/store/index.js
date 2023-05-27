import { createStore } from "vuex";
import { auth } from "@/store/auth";
import { popUps } from "@/store/popUps";
import { userInfo } from "@/store/userInfo";
import { libs } from "@/store/libs";
import { programs } from "./programs";

const store = createStore({
  modules: {
    auth,
    popUps,
    userInfo,
    libs,
    programs,
  },
});

export default store;
