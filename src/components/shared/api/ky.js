import ky from "ky";
import store from "@/store";
import router from "@/router";

const api = ky.create({
  prefixUrl: "http://127.0.0.1:8000/api/",
  headers: { Authorization: localStorage.getItem("Authorization") },
  hooks: {
    beforeError: [
      (error) => {
        const { response } = error;
        if (response.status === 401) {
          store.commit("auth/removeToken");
          router.push("/");
        }
        return error;
      },
    ],
  },
});

export default api;
