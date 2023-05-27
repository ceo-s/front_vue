import api from "@/components/shared/api/ky";

export async function registration(username, telegram, password) {
  return await api
    .post("token-auth/users/", {
      json: {
        username,
        password,
        telegram,
      },
    })
    .json();
}

export async function login(username, password) {
  return await api
    .post("auth/token/login/", {
      json: {
        username,
        password,
      },
    })
    .json();
}
