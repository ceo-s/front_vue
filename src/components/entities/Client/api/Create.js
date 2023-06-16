import api from "@/components/shared/api/ky";

export function createClient(name, telegram, description, gender) {
  const resp = api
    .post("clients/", {
      json: {
        name,
        telegram,
        description,
        gender,
      },
    })
    .json();
  return resp;
}
