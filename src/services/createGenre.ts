export async function createGenre(name: string) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": import.meta.env.VITE_AUTH_TOKEN,
      },
      body: JSON.stringify({ name }),
    }
  );

  if (!res.ok) throw new Error("Failed to create genre");

  return res.json();
}
