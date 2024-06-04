import { useNavigate } from "react-router-dom";
import { useGenres } from "../hooks/genres/useGenres";
import { Genre } from "../types/genre";

function Genres() {
  const navigate = useNavigate();
  const { data: genres, isLoading, error } = useGenres();

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {error && <div>{error.message}</div>}
      {genres?.map((genre: Genre) => (
        <button
          onClick={() => navigate(`/genres/${genre._id}`)}
          key={genre._id}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
}

export default Genres;
