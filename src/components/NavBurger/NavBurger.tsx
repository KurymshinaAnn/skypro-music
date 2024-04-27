import NavLink from "../NavLink/NavLink";
import styles from "./NavBurger.module.css";

type NavBurgerType = {
  onClick: () => void;
  isOpen: boolean;
};

export default function NavBurger({ onClick, isOpen }: NavBurgerType) {
  return (
    <>
      <div className={styles.navBurger} onClick={onClick}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
      {isOpen && (
        <div className={styles.navMenu}>
          <ul className={styles.menuList}>
            <NavLink href="/">Главное</NavLink>
            <NavLink href="/my_playlist">Мой плейлист</NavLink>
            <NavLink href="/signin">Войти</NavLink>
          </ul>
        </div>
      )}
    </>
  );
}
