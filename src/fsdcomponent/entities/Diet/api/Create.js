import api from "@/fsdcomponent/shared/api/ky";

export function createClient(name, telegram, description) {
  const resp = api
    .post("clients/", {
      json: {
        name,
        telegram,
        description,
      },
    })
    .json();
  return resp;
}
