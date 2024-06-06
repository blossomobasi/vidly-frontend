import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteMovie as deleteMovieApi } from "../../services/movies/deleteMovie";
import toast from "react-hot-toast";
import { MovieResponse } from "../../types/movies";

export function useDeleteMovie() {
    const queryClient = useQueryClient();
    const { mutate: deleteMovie, isPending: isDeleting } = useMutation<
        MovieResponse,
        Error,
        string
    >({
        mutationFn: deleteMovieApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["movies"],
            });
            toast.success("Movie deleted successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { isDeleting, deleteMovie };
}
