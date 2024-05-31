import { useMutation } from "@tanstack/react-query";
import { createUser } from "../../services/auth/createUser";

export function useCreateUser() {
  const { mutate, isPending, error } = useMutation<void, Error, RegisterInput>({
    mutationFn: ({ name, email, password }) =>
      createUser({ email, name, password }),
    onSuccess: () => {
      console.log("Successfully created a user");
    },
    onError: (error) => {
      console.log("error", error.message);
    },
  });

  return { mutate, isPending, error };
}
