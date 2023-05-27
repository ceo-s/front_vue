import api from "@/components/shared/api/ky";

export async function listClients() {
  return await api.get("clients/").json();
}
