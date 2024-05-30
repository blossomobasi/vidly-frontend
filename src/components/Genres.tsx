import { useGenres } from "../hooks/useGenres";

function Genres() {
  const { genres, isLoading, error } = useGenres();
  return (
    <div>
      {error ? (
        <div>{error.message}</div>
      ) : (
        <>
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            genres?.map((genre: Genre) => (
              <button key={genre.name}>{genre.name}</button>
            ))
          )}
        </>
      )}
    </div>
  );
}

export default Genres;
