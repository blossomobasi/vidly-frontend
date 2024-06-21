import React, { useEffect, useState } from "react";
import { useGenres } from "../hooks/genres/useGenres";
import { Genre } from "../types/genre";

function Genres() {
    const [selectedGenre, setSelectedGenre] = useState("");
    const { data: genres, isLoading, error } = useGenres();

    useEffect(() => {
        const storedGenre = localStorage.getItem("selectedGenre");

        if (storedGenre) {
            setSelectedGenre(storedGenre);
        }

        const handleStorageChange = () => {
            const newGenre = localStorage.getItem("selectedGenre");
            if (newGenre) setSelectedGenre(newGenre);
        };

        window.addEventListener("storage", handleStorageChange);

        return () => window.removeEventListener("storage", handleStorageChange);
    }, []);

    const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newGenre = e.target.value;
        setSelectedGenre(newGenre);

        localStorage.setItem("selectedGenre", newGenre);
    };

    return (
        <div>
            {isLoading && <div>Loading...</div>}
            {error && <div>{error.message}</div>}
            <select name="genres" id="genres" value={selectedGenre} onChange={handleGenreChange}>
                <option disabled>Select a genre</option>
                {genres?.map((genre: Genre) => (
                    <option key={genre._id} value={genre.name}>
                        {genre.name}
                    </option>
                ))}
            </select>
        </div>
    );
}

export default Genres;
