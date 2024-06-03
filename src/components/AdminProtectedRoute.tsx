import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useUser } from "../hooks/auth/useUser";

function AdminProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();
  const { isLoading, isAdmin } = useUser();

  useEffect(() => {
    if (!isAdmin && !isLoading) navigate("/login", { replace: true });
  }, [isAdmin, navigate, isLoading]);

  if (isLoading) return <div>Loading...</div>;

  if (isAdmin) return children;
}

export default AdminProtectedRoute;
