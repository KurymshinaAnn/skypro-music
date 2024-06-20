import styles from "./User.module.css";

export default function User() {
  return (
    <div className={styles.sidebarPersonal}>
      <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
      <div className={styles.sidebarIcon}>
        <svg>
          <use href="img/icon/sprite.svg#logout"></use>
        </svg>
      </div>
    </div>
  );
}
