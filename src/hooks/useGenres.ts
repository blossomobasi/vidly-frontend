import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../services/getGenres";

export function useGenres() {
  const { data, isLoading, error } = useQuery<Genre[]>({
    queryKey: ["genres"],
    queryFn: getGenres,
  });

  return { genres: data, isLoading, error };
}
