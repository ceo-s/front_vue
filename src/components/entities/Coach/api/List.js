import api from "@/components/shared/api/ky";

export async function listPosts() {
  return await api.get("posts/").json();
}
