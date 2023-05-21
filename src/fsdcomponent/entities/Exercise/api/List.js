import api from "@/fsdcomponent/shared/api/ky";

export async function listExercises() {
  return await api.get("exercises/").json();
}
