import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateGenre } from "../../services/genres/updateGenre";

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
      console.log("Successfully updated a genre");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { mutate, isPending };
}
