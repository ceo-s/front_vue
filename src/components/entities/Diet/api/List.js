import api from "@/components/shared/api/ky";

export async function listClientPrograms(clientId) {
  return await api
    .get("dprograms/filter/", { searchParams: { client__id: clientId } })
    .json();
}

export async function listProducts() {
  return await api.get("foods/").json();
}

export async function listSupplements() {
  return await api.get("foods/").json();
}

export async function listCustomMeals() {
  return await api.get("custom_meals/").json();
}
