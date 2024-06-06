export async function getMovies() {
    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/movies`);

    if (!res.ok) {
        throw new Error("An error occurred while fetching the data");
    }

    return res.json();
}
