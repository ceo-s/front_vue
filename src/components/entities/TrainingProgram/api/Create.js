import api from "@/components/shared/api/ky";

export async function createProgram(
  name,
  description,
  time_start,
  time_finish,
  client
) {
  return await api
    .post("tprograms/", {
      json: {
        name,
        description,
        time_start,
        time_finish,
        client,
      },
    })
    .json();
}
