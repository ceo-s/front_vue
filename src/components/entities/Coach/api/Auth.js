import api from "@/components/shared/api/ky";

export async function registration(username, telegram, password) {
  const resp = await api.post("token-auth/users/", {
    json: {
      username,
      telegram,
      password,
    },
  });
  return resp.json();
}
// TODO remove all other return await and replace with return var.json() after api call
export async function login(username, password) {
  const resp = await api.post("auth/token/login/", {
    json: {
      username,
      password,
    },
  });
  return resp.json();
}
