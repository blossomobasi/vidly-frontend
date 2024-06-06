import { useMutation, useQueryClient } from "@tanstack/react-query";
import { deleteGenre as deleteGenreApi } from "../../services/genres/deleteGenre";
import toast from "react-hot-toast";

export function useDeleteGenre() {
    const queryClient = useQueryClient();
    const { mutate: deleteGenre, isPending: isDeleting } = useMutation<unknown, Error, string>({
        mutationFn: deleteGenreApi,
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["genres"],
            });
            toast.success("Genre deleted successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });

    return { deleteGenre, isDeleting };
}
