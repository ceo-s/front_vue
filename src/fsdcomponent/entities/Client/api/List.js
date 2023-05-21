import api from "@/fsdcomponent/shared/api/ky";

export async function listClients() {
  return await api.get("clients/").json();
}
