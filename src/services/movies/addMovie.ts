import { Movie } from "../../types/movies";

export async function addMovie(movie: Movie) {
    const token = localStorage.getItem("token");
    if (!token) {
        throw new Error("No token found. Please login again.");
    }

    const res = await fetch(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/movies`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "x-auth-token": token,
        },
        body: JSON.stringify(movie),
    });

    if (!res.ok) {
        throw new Error("An error occurred while adding the movie");
    }

    return res.json();
}
