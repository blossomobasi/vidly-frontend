import { useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogout() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  function logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("selectedGenre");
    queryClient.clear();
    toast.success("Successfully logged out");
    navigate("/login");
  }

  return logout;
}
