export async function updateGenre(genreId?: string, newGenre?: string) {
  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres${genreId}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": import.meta.env.VITE_AUTH_TOKEN,
      },
      body: JSON.stringify({ name: newGenre }),
    }
  );

  if (!res.ok) throw new Error("Failed to update genre");

  return res.json();
}
