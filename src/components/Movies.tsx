import { useMovies } from "../hooks/movies/useMovies";

function Movies() {
  const { movies, isLoading, error } = useMovies();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div>
      {movies?.map((movie) => (
        <div key={movie._id}>
          <small>{movie.genre.name}</small>
          <h2>Movie &mdash; {movie.title}</h2>
        </div>
      ))}
    </div>
  );
}

export default Movies;
