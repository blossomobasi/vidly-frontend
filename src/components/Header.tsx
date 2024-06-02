import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";
import { useUser } from "../hooks/auth/useUser";

const Header = () => {
  const navigate = useNavigate();
  const { user, isAuthenticated } = useUser();
  const links = [
    { name: "home", href: "/" },
    { name: "genre", href: "/genres" },
    { name: "about", href: "/about" },
  ];

  return (
    <nav className={styles.nav}>
      <div>
        {isAuthenticated ? (
          <p>Welcome {user?.firstName}!</p>
        ) : (
          <>
            <button onClick={() => navigate("signup")}>Signup</button>
            <button onClick={() => navigate("login")}>login</button>
          </>
        )}
      </div>
      <ul>
        {links.map((link) => (
          <NavLink key={link.name} to={link.href}>
            {link.name}
          </NavLink>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
