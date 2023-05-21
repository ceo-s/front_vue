import api from "@/fsdcomponent/shared/api/ky";

export async function getUser() {
  return await api.get("profiles/my_profile/").json();
}
