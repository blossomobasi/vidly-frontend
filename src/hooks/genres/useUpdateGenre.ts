import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGenre } from "../../services/genres/updateGenre";
import { Genre } from "../../types/genre";
import toast from "react-hot-toast";

export function useUpdateGenre() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation<
    Genre,
    Error,
    { id?: string; name: string }
  >({
    mutationFn: ({ id, name }) => updateGenre(id, name),
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
      toast.success("Successfully updated a genre");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });
  return { mutate, isPending };
}
