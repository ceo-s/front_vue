import api from "@/components/shared/api/ky";

export async function getDailyNutrients(dietProramId) {
  return await api
    .get("nutrients/filter/", {
      searchParams: {
        diet_program: dietProramId,
      },
    })
    .json();
}
export async function getDietSchedule(dietProramId) {
  return await api
    .get("diet_schedules/filter/", {
      searchParams: {
        program: dietProramId,
      },
    })
    .json();
}
