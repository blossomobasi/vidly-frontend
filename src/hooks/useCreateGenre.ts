import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGenre } from "../services/createGenre";

export function useCreateGenre() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation<Genre, Error, string>({
    mutationFn: (name: string) => createGenre(name),
    onSuccess: () => {
      // Invalidate the genres query so it will refetch
      queryClient.invalidateQueries({
        queryKey: ["genres"],
      });
      console.log("Successfully created a genre");
    },
    onError: (error) => {
      console.error(error);
    },
  });
  return { mutate, isPending };
}
