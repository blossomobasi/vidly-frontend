import { useQuery } from "@tanstack/react-query";
import { getMovies } from "../../services/movies/getMovies";
import { Movie } from "../../types/movies";

export function useMovies() {
  const {
    data: movies,
    isLoading,
    error,
  } = useQuery<Movie[], Error>({
    queryKey: ["movies"],
    queryFn: getMovies,
  });

  return { movies, isLoading, error };
}
