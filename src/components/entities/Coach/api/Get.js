import api from "@/components/shared/api/ky";

export async function getUser() {
  // Using "my_profile" as fake pk to call retrieve method
  const resp = await api.get("profiles/my_profile/");
  return resp.json();
}
