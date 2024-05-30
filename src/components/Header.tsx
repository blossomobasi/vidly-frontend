import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

const Header = () => {
  const links = [
    { name: "home", href: "/" },
    { name: "about", href: "/about" },
  ];

  return (
    <nav className={styles.nav}>
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
