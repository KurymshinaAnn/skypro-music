"use client";

import { useAppDispatch } from "@/hooks";
import styles from "./Search.module.css";
import { setActiveFilter } from "@/store/features/playlistSlice";

export default function Search() {
  const dispatch = useAppDispatch();

  return (
    <div className={styles.centerblockSearch}>
      <svg className={styles.searchSvg}>
        <use href="img/icon/sprite.svg#icon-search"></use>
      </svg>
      <input
        onChange={(ev) => {
          dispatch(setActiveFilter({ searchValue: ev.target.value }));
        }}
        className={styles.searchText}
        type="search"
        placeholder="Поиск"
        name="search"
      />
    </div>
  );
}
