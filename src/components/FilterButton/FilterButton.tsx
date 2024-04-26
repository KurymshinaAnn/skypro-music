import classNames from "classnames";
import styles from "./FilterButton.module.css";

type FilterButtonType = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: Array<{ id: number; name: string }>;
};

export default function FilterButton({
  children,
  onClick,
  isOpened,
  list,
}: FilterButtonType) {
  return (
    <div className={styles.filterWrapper}>
      <div
        onClick={onClick}
        className={classNames(styles.filterButton, styles._btn_text)}
      >
        {children}
      </div>
      {isOpened && (
        <div className={styles.popUpBlock}>
          <ul className={styles.popUpSelection}>
            {list.map((item) => (
              <li key={item.id}>{item.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
