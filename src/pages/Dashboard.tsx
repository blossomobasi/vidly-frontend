import { useUser } from "../hooks/auth/useUser";

function Dashboard() {
  const { user, isLoading } = useUser();
  return (
    <div>
      <h1>Dashboard Page</h1>
      <p>
        {isLoading
          ? "Loading..."
          : `Welcome ${user?.firstName} ${user?.lastName}!`}
      </p>
    </div>
  );
}

export default Dashboard;
