import { useQuery } from "@tanstack/react-query";
import { getCurrentUser } from "../../services/auth/getCurrentUser";

export function useUser() {
  const { data, isLoading } = useQuery<IUser>({
    queryKey: ["user"],
    queryFn: getCurrentUser,
  });

  return {
    user: data,
    isLoading,
    isAuthenticated: data?.role === "admin" || data?.role === "user",
  };
}
