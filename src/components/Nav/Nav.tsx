import styles from "./Nav.module.css";
import NavBurger from "@/components/NavBurger/NavBurger";
import Logo from "@/components/Logo/Logo";

export default function Nav() {
  return (
      <nav className={styles.mainNav}>
        <Logo></Logo>
        <NavBurger></NavBurger>
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Главное
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="#" className={styles.menuLink}>
                Мой плейлист
              </a>
            </li>
            <li className={styles.menuItem}>
              <a href="../signin.html" className={styles.menuLink}>
                Войти
              </a>
            </li>
          </ul>
        </div>
      </nav>
  );
}
