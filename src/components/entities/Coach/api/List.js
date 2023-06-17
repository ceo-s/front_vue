import api from "@/components/shared/api/ky";

export async function listPosts() {
  const resp = await api.get("posts/");
  return resp.json();
}
