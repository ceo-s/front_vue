import api from "@/fsdcomponent/shared/api/ky";

export async function getClient(id) {
  return await api
    .get(`clients/get_all_info/`, { searchParams: { id } })
    .json();
}

export async function getClientStats(id) {
  return await api.get(`clientstats_active/${id}/`).json();
}
