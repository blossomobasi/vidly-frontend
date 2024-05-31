import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/login";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation<void, Error, LoginInput>({
    mutationFn: (user) => login(user),
    onSuccess: () => {
      navigate("/dashboard");
      console.log("Successfully logged in");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { mutate, isPending, error };
}
