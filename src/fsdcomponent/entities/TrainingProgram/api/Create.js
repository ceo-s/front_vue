import api from "@/fsdcomponent/shared/api/ky";

export async function createProgram(data) {
  return await api.post("tprograms/", { json: data }).json();
}
