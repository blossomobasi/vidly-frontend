import { useMutation } from "@tanstack/react-query";
import { registerUser } from "../../services/auth/registerUser";
import { useNavigate } from "react-router-dom";
import { RegisterInput } from "../../types/auth";
import toast from "react-hot-toast";

export function useRegisterUser() {
  const navigate = useNavigate();
  const { mutate, isPending, error } = useMutation<void, Error, RegisterInput>({
    mutationFn: (user) => registerUser(user),
    onSuccess: () => {
      toast.success("Successfully registered");
      navigate("/login");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { mutate, isPending, error };
}
