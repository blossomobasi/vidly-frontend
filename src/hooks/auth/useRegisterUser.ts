import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/auth/registerUser";
import { useNavigate } from "react-router-dom";
import { RegisterInput } from "../../types/auth";

export function useRegisterUser() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation<void, Error, RegisterInput>({
    mutationFn: (user) => registerUser(user),
    onSuccess: () => {
      console.log("Successfully created a user");
      navigate("/login");
    },
    onError: (error) => {
      console.log("error", error.message);
    },
  });

  return { mutate, isPending, error };
}
