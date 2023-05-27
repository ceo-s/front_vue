import api from "@/components/shared/api/ky";

export async function getExercise(id) {
  return await api.get(`exercises/${id}/`).json();
}
