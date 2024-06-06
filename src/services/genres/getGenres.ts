export async function getGenres() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/genres`);

    if (!res.ok) throw new Error("Failed to fetch genres");

    return res.json();
}
