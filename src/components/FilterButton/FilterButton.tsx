import classNames from "classnames";
import styles from "./FilterButton.module.css";
import { memo } from "react";

type FilterButtonType = {
  children: string;
  onClick: () => void;
  isOpened: boolean;
  list: Array<string>;
  selectedItems: string[];
  onItemSelected: (item: string) => void;
};

function FilterButton({
  children,
  onClick,
  isOpened,
  list,
  selectedItems,
  onItemSelected,
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
      {selectedItems.length > 0 && (
        <div className={styles.selectedBadge}>{selectedItems.length}</div>
      )}
      {isOpened && (
        <div className={styles.popUpBlock}>
          <div className={styles.popUpScroll}>
            <ul className={styles.popUpSelection}>
              {list.map((item) => (
                <li
                  onClick={() => onItemSelected(item)}
                  key={item}
                  className={classNames(
                    styles.popUpLi,
                    selectedItems.includes(item) ? styles.popUpLiActive : ""
                  )}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}

export default memo(FilterButton);
