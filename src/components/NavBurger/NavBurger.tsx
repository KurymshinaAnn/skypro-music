import styles from "./NavBurger.module.css";

export default function NavBurger() {
  return (
    <>
      <div className={styles.navBurger}>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
        <span className={styles.burgerLine}></span>
      </div>
    </>
  );
}
