export async function deleteGenre(name: string) {
    const token = localStorage.getItem("token");
    if (!token) throw new Error("Token not found");

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres/${name}`, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
    });

    if (!res.ok) {
        throw new Error("Failed to delete genre");
    }

    return res.json();
}
