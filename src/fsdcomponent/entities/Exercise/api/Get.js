import api from "@/fsdcomponent/shared/api/ky";

export async function getExercise(id) {
  return await api.get(`exercises/${id}/`).json();
}
