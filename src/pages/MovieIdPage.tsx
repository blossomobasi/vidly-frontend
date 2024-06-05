import { useNavigate, useParams } from "react-router-dom";
import { useMovies } from "../hooks/movies/useMovies";

function MovieIdPage() {
  const navigate = useNavigate();
  const { movieId } = useParams();
  const { movies, isLoading } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  const movie = movies?.find((movie) => movie._id === movieId);

  return (
    <div>
      <p>{movie?.genre.name}</p>
      <h1>{movie?.title}</h1>
      <p>Description: {movie?.description}</p>
      <p>Number in Stock: {movie?.numberInStock}</p>
      <p>Daily Rental Rate: {movie?.dailyRentalRate}</p>
      <button onClick={() => navigate(-1)}>Go back</button>
    </div>
  );
}

export default MovieIdPage;
