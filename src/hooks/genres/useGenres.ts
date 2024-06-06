import { useQuery } from "@tanstack/react-query";
import { getGenres } from "../../services/genres/getGenres";
import { Genre } from "../../types/genre";

export function useGenres() {
    const { data, isLoading, error } = useQuery<Genre[], Error>({
        queryKey: ["genres"],
        queryFn: getGenres,
    });

    return { data, isLoading, error };
}
