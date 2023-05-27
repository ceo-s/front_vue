import api from "@/components/shared/api/ky";

export async function getProgram(id) {
  return await api.get(`tprograms/${id}/get_program/`).json();
}
