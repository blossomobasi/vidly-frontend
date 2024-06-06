import AdminHeader from "./AdminHeader";
import AdminSidebar from "./AdminSidebar";
import AdminRoute from "../components/AdminRoute";
import { useUser } from "../hooks/auth/useUser";
import styles from "./AdminLayout.module.css";

function AdminLayout() {
    const { user } = useUser();
    return (
        <div className={styles.container}>
            <AdminHeader />
            <AdminSidebar />

            <main>
                <h1>AdminRoute</h1>
                <p>Welcome Admin {user?.firstName}</p>

                <p>Data that should only be visible to an ADMIN</p>

                <AdminRoute />
            </main>
        </div>
    );
}

export default AdminLayout;
