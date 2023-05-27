import api from "@/fsdcomponent/shared/api/ky";

export async function listPosts() {
  return await api.get("posts/").json();
}
