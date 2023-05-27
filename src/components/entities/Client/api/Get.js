import api from "@/components/shared/api/ky";

export async function getClient(id) {
  return await api.get(`clients/${id}/get_all_info/`).json();
}

export async function getClientStats(id) {
  return await api.get(`clientstats_active/${id}/`).json();
}
