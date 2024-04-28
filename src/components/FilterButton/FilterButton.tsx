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
        className={classNames(
          styles.filterButton,
          styles._btnText,
          isOpened && styles.btnActive
        )}
      >
        {children}
      </div>
      {isOpened && (
        <div className={styles.popUpBlock}>
          <div className={styles.popUpScroll}>
            <ul className={styles.popUpSelection}>
              {list.map((item) => (
                <li key={item.id}
                className={styles.popUpLi}
                >{item.name}</li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
