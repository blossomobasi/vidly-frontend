import { useGenres } from "../hooks/genres/useGenres";
import { Genre } from "../types/genre";

function Genres() {
  const { data: genres, isLoading, error } = useGenres();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {genres?.map((genre: Genre) => (
        <button key={genre._id}>{genre.name}</button>
      ))}
    </div>
  );
}

export default Genres;
