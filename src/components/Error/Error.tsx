import styles from "./Error.module.css";

import Search from "../Search/Search";
import Link from "next/link";

export default function Error() {
  return (
    <div className={styles.mainCenterblock}>
      <Search></Search>
      <div className={styles.errorBlock}>
        <h1 className={styles.errorH1}>404</h1>
        <h2 className={styles.errorH2}>Страница не найдена</h2>
        <h3 className={styles.errorH3}>
          Возможно, она была удалена или перенесена на другой адрес
        </h3>
        <button>
          <Link href="/" className={styles.errorButton}>
            Вернуться на главную
          </Link>
        </button>
      </div>
    </div>
  );
}
