export async function login(user: LoginInput) {
  const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/auth`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  });

  if (!res.ok) throw new Error("Failed to login");

  return res.json();
}
