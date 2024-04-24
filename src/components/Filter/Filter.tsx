// import Image from "next/image";
import classNames from "classnames";

import styles from "./Filter.module.css";

export default function Filter() {
  return (
    <>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <div className={classNames(styles.filterButton, styles._btn_text)}>
          исполнителю
        </div>
        <div className={styles.filterButton}>году выпуска</div>
        <div className={classNames(styles.filterButton, styles._btn_text)}>
          жанру
        </div>
      </div>
    </>
  );
}
