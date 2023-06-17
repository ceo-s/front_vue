import api from "@/components/shared/api/ky";

export async function updateProfileInfo({ name, user, bio }) {
  // Using "my_profile" as fake pk to call partial_update method
  const resp = await api.patch("profiles/my_profile/", {
    json: { name, telegram: user.telegram, bio },
  });
  return resp.json();
}
