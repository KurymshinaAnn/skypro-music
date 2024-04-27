// import Image from "next/image";
import classNames from "classnames";
import styles from "./Centar.module.css";

import Filter from "@/components/Filter/Filter";
import PlayListItem from "@/components/PlayListItem/PlayListItem";

export default function Centar() {
  return (
    <>
      <div className={styles.mainCenterblock}>
        <div className={styles.centerblockSearch}>
          <svg className={styles.searchSvg}>
            <use href="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className={styles.searchText}
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter></Filter>
        <div className={styles.centerblockContent}>
          <div className={styles.contentTitle}>
            <div className={classNames(styles.playlistTitleCol, styles.col01)}>
              Трек
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col02)}>
              Исполнитель
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col03)}>
              Альбом
            </div>
            <div className={classNames(styles.playlistTitleCol, styles.col04)}>
              <svg className={styles.playlistTitleSvg}>
                <use href="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div className={styles.contentPlaylist}>
            <PlayListItem></PlayListItem>
            <PlayListItem></PlayListItem>
            <PlayListItem></PlayListItem>
            <PlayListItem></PlayListItem>
          </div>
        </div>
      </div>
    </>
  );
}
