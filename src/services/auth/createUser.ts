export async function createUser(user: RegisterInput) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/users`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  if (!res.ok) throw new Error("Failed to create user");

  return res.json();
}
