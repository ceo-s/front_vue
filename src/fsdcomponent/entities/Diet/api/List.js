import api from "@/fsdcomponent/shared/api/ky";

export async function listProducts() {
  return await api.get("foods/").json();
}

export async function listSupplements() {
  return await api.get("foods/").json();
}

export async function listCustomMeals() {
  return await api.get("custom_meals/").json();
}
