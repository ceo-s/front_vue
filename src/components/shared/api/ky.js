import ky from "ky";
import store from "@/store";
import router from "@/router";

const api = ky.create({
  prefixUrl: `http://127.0.0.1:1337/api/`,

  headers: { Authorization: localStorage.getItem("Authorization") },
  hooks: {
    beforeRequest: [
      (request) => {
        request.headers.set(
          "Authorization",
          localStorage.getItem("Authorization")
        );
      },
    ],
    beforeError: [
      (error) => {
        const { response } = error;
        if (response.status === 401) {
          store.dispatch("auth/logout");
          router.push("/");
        }
        if (response.status === 400) {
          console.log(response.json());
        }
        return error;
      },
    ],
  },
});

export default api;
