import Image from "next/image";
// import classNames from "classnames";
import styles from "./Nav.module.css";
import NavBurger from "@/components/NavBurger/NavBurger";

export default function Nav() {
  return (
    <>
      <nav className={styles.mainNav}>
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
    </>
  );
}
