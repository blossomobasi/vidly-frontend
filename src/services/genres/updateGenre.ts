import { getToken } from "../../utils";

export async function updateGenre(genreId?: string, newGenre?: string) {
    const token = getToken();
    if (!token) throw new Error("No token found. Please login again.");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres${genreId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
        body: JSON.stringify({ name: newGenre }),
    });

    if (!res.ok) throw new Error("Failed to update genre");

    return res.json();
}
