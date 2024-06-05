import { useState } from "react";
import { useDeleteMovie } from "../hooks/movies/useDeleteMovie";

function DeleteMovie() {
  const [movieTitle, setMovieTitle] = useState("");
  const { deleteMovie, isDeleting } = useDeleteMovie();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    deleteMovie(movieTitle);
  };
  return (
    <div>
      <h2>Delete a Movie</h2>

      <form onSubmit={handleSubmit}>
        <label htmlFor="movieTitle">Movie Title: </label>
        <input
          disabled={isDeleting}
          value={movieTitle}
          onChange={(e) => setMovieTitle(e.target.value)}
          type="text"
          id="movieTitle"
          name="movieTitle"
        />
        <button disabled={isDeleting || !movieTitle} type="submit">
          Delete Movie
        </button>
      </form>
    </div>
  );
}

export default DeleteMovie;
