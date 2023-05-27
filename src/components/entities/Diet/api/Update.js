import api from "@/components/shared/api/ky";

export async function updateProgram(program) {
  api.put(`dprograms/${program.id}/`, { json: { ...program } });
}
