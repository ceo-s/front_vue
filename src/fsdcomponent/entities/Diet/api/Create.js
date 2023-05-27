import api from "@/fsdcomponent/shared/api/ky";

export async function createProgram(
  name,
  description,
  date_start,
  date_finish,
  client
) {
  return await api
    .post("dprograms/", {
      json: {
        name,
        description,
        date_start,
        date_finish,
        client,
      },
    })
    .json();
}
