import AdminGenre from "../admin-components/AdminGenre";
import { useUser } from "../hooks/auth/useUser";

function AdminRoute() {
  const { user } = useUser();
  return (
    <div>
      <h1>AdminRoute</h1>
      <p>Welcome Admin {user?.firstName}</p>

      <p>Data that should only be visible to an ADMIN</p>

      <AdminGenre />
    </div>
  );
}

export default AdminRoute;
