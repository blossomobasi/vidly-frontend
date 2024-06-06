import { useNavigate } from "react-router-dom";
import { useMovies } from "../hooks/movies/useMovies";
import styles from "./Movie.module.css";

function Movies() {
    const navigate = useNavigate();
    const { movies, isLoading, error } = useMovies();

    if (isLoading) {
        return <div>Loading...</div>;
    }
    if (error) {
        return <div>{error.message}</div>;
    }

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
                    </div>
                ))}
            </div>
        </>
    );
}

export default Movies;
