import { NavLink, useLocation, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useUser } from "../hooks/auth/useUser";
import { useLogout } from "../hooks/auth/useLogout";

const Header = () => {
    const logout = useLogout();
    const navigate = useNavigate();
    const { user, isAuthenticated, isAdmin } = useUser();
    const { pathname } = useLocation();
    const links = [
        { name: "home", href: "/" },
        { name: "movies", href: "/movies" },
        { name: "about", href: "/about" },
        { name: "dashboard", href: "/dashboard" },
    ];

    function handleLogout() {
        logout();
    }

    return (
        <nav className={styles.nav}>
            <div>
                {isAuthenticated ? (
                    <p>Welcome {user?.firstName}!</p>
                ) : (
                    <>
                        <button onClick={() => navigate("/signup")}>Signup</button>
                        <button onClick={() => navigate("/login")}>login</button>
                    </>
                )}
            </div>
            <ul>
                {links.map((link) => (
                    <NavLink key={link.name} to={link.href}>
                        {link.name}
                    </NavLink>
                ))}
                {isAdmin && (
                    <NavLink to={pathname.includes("admin-dashboard") ? "" : "admin-dashboard"}>
                        Admin
                    </NavLink>
                )}
            </ul>
            <button onClick={handleLogout}>Logout</button>
        </nav>
    );
};

export default Header;
