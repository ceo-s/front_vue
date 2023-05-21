import api from "@/fsdcomponent/shared/api/ky";

export async function getDietProgram(dietProramId) {
  return await api.get(`dprograms/${dietProramId}/get_program/`).json();
}

export async function getDietProgramDemo(dietProramId) {
  return await api.get(`dprograms/${dietProramId}/`).json();
}

export async function getReferenceDays(dietProramId) {
  return await api
    .get(`diet_days/${dietProramId}/get_day_ref/`, {
      searchParams: {
        program: dietProramId,
      },
    })
    .json();
}
