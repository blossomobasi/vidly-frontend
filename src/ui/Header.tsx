import { Link } from "react-router-dom";
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
          <Link to={link.href}>{link.name}</Link>
        ))}
      </ul>
    </nav>
  );
};

export default Header;
