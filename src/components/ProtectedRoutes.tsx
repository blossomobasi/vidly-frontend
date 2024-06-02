import { useNavigate } from "react-router-dom";
import { useUser } from "../hooks/auth/useUser";
import { useEffect } from "react";

function ProtectedRoutes({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, isAuthenticated } = useUser();

  useEffect(() => {
    if (!isAuthenticated && !isLoading) navigate("/login");
  }, [isAuthenticated, navigate, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (isAuthenticated) return children;
}

export default ProtectedRoutes;
