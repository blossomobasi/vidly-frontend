import { useMutation } from "@tanstack/react-query";
import { login } from "../../services/auth/login";
import { useNavigate } from "react-router-dom";
import { LoginInput, LoginResponse } from "../../types/auth";

export function useLogin() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation<
    LoginResponse,
    Error,
    LoginInput
  >({
    mutationFn: async (user) => {
      const res = login(user);
      return res;
    },
    onSuccess: (res) => {
      localStorage.setItem("token", res.token);

      navigate("/dashboard");
      console.log("Successfully logged in");
    },
    onError: (error) => {
      console.error(error);
    },
  });

  return { mutate, isPending, error };
}
