import { NavLink } from "react-router-dom";
import styles from "./AdminSidebar.module.css";

function AdminSidebar() {
    const baseLink = "/admin-dashboard";
    const sidbarLinks = [
        { name: "home", href: `${baseLink}` },
        { name: "genres", href: `${baseLink}/genres` },
        { name: "movies", href: `${baseLink}/movies` },
        { name: "users", href: `${baseLink}/users` },
        { name: "customers", href: `${baseLink}/customers` },
    ];

    return (
        <div className={styles.sidebarContainer}>
            <ul className={styles.ul}>
                {sidbarLinks.map((link) => (
                    <li key={link.name}>
                        <NavLink to={link.href}>{link.name}</NavLink>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default AdminSidebar;
