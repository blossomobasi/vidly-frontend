import { useState } from "react";
import { useGenres } from "../hooks/genres/useGenres";
import { Genre } from "../types/genre";

function Genres() {
  const [selectedGenre, setSelectedGenre] = useState("");
  const { data: genres, isLoading, error } = useGenres();

  const genreIdFromLocalStorage = localStorage.getItem("selectedGenre");
  const handleGenreChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedGenre(e.target.value);
    localStorage.setItem("selectedGenre", e.target.value);
  };

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      <select
        name="genres"
        id="genres"
        value={genreIdFromLocalStorage || selectedGenre}
        onChange={handleGenreChange}
      >
        <option value="">Select a genre</option>
        {genres?.map((genre: Genre) => (
          <option key={genre._id} value={genre._id}>
            {genre.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default Genres;
