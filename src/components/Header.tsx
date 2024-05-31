import { NavLink, useNavigate } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const navigate = useNavigate();
  const links = [
    { name: "home", href: "/" },
    { name: "genre", href: "/genres" },
    { name: "about", href: "/about" },
  ];

  return (
    <nav className={styles.nav}>
      <div>
        <button onClick={() => navigate("signup")}>Signup</button>
        <button onClick={() => navigate("login")}>login</button>
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
