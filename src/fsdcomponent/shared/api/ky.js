import ky from "ky";

const api = ky.create({
  prefixUrl: "http://127.0.0.1:8000/api/",
  headers: { Authorization: localStorage.getItem("Authorization") },
});

export default api;
