import api from "@/components/shared/api/ky";

export async function listClientPrograms(clientId) {
  return await api
    .get("tprograms/filter/", {
      searchParams: { client: clientId },
    })
    .json();
}
