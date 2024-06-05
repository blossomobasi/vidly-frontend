export async function deleteMovie(movieTitle: string) {
  const token = localStorage.getItem("token");
  if (!token) {
    throw new Error("No token found. Please login again...");
  }

  const res = await fetch(
    `${import.meta.env.VITE_BACKEND_BASE_URL}/api/movies/${movieTitle}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "x-auth-token": token,
      },
    }
  );
  if (!res.ok) {
    throw new Error("Failed to delete movie");
  }

  return res.json();
}
