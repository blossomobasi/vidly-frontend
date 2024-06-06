import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGenre } from "../../services/genres/createGenre";
import { Genre } from "../../types/genre";
import toast from "react-hot-toast";

export function useCreateGenre() {
    const queryClient = useQueryClient();
    const { mutate, isPending } = useMutation<Genre, Error, string>({
        mutationFn: (name: string) => createGenre(name),
        onSuccess: () => {
            queryClient.invalidateQueries({
                queryKey: ["genres"],
            });
            toast.success("Genre added successfully");
        },
        onError: (error) => {
            toast.error(error.message);
        },
    });
    return { mutate, isPending };
}
