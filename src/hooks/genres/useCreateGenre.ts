import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createGenre } from "../../services/genres/createGenre";
import { Genre } from "../../types/genre";

export function useCreateGenre() {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation<Genre, Error, string>({
    mutationFn: (name: string) => createGenre(name),
    onSuccess: () => {
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
