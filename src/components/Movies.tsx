import { useNavigate } from "react-router-dom";
import styles from "./Movie.module.css";

import { useMovies } from "../hooks/movies/useMovies";
import { useUser } from "../hooks/auth/useUser";
import { useDeleteMovie } from "../hooks/movies/useDeleteMovie";

function Movies() {
    const navigate = useNavigate();
    const { movies, isLoading, error } = useMovies();
    const { isAdmin } = useUser();
    const { deleteMovie, isDeleting } = useDeleteMovie();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

    const handleDeleteMovie = (e: React.MouseEvent, movieId: string) => {
        e.stopPropagation();

        if (window.confirm("Are you sure you want to delete this movie?")) {
            deleteMovie(movieId);
        }
    };

    return (
        <>
            <h1 className={styles.movieTitle}>Movies</h1>
            <div className={styles.movieContainer}>
                {movies?.map((movie) => (
                    <div
                        onClick={() => navigate(`${movie._id}`)}
                        key={movie._id}
                        className={styles.movieCard}
                    >
                        <small>{movie.genre.name}</small>
                        <h2>Movie &mdash; {movie.title}</h2>
                        {isAdmin && (
                            <button
                                disabled={isDeleting}
                                onClick={(e) => handleDeleteMovie(e, movie.title)}
                            >
                                Delete movie
                            </button>
                        )}
                    </div>
                ))}
            </div>
        </>
    );
}

export default Movies;
