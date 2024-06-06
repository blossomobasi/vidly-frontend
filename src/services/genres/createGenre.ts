import { getToken } from "../../utils";

export async function createGenre(name: string) {
    const token = getToken();
    if (!token) throw new Error("No token found. Please login again.");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
        body: JSON.stringify({ name }),
    });

    if (!res.ok) throw new Error("Failed to create genre");

    return res.json();
}
