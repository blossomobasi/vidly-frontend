import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addMovie as addMovieAPI } from "../../services/movies/addMovie";
import { Movie, MovieResponse } from "../../types/movies";
import toast from "react-hot-toast";

export function useAddMovie() {
    const queryClient = useQueryClient();
    const {
        mutate: addMovie,
        isPending: isAddingMovie,
        error,
    } = useMutation<MovieResponse, Error, Movie>({
        mutationFn: addMovieAPI,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["movies"],
            });
            queryClient.invalidateQueries({
                queryKey: ["genres"],
            });

            toast.success("Movie added successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { addMovie, isAddingMovie, error };
}
