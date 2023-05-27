import api from "@/components/shared/api/ky";

export async function updateProgram(program) {
  await api.put(`tprograms/${program.id}/`, { json: program });
}
