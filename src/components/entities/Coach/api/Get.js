import api from "@/components/shared/api/ky";

export async function getUser() {
  // Using "my_profile" as fake pk to call retrieve method
  return await api.get("profiles/my_profile/").json();
}
