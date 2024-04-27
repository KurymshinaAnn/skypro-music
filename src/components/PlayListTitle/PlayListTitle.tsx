import classNames from "classnames";
import styles from "./PlayListTitle.module.css";

export default function PlaylistTitle() {
  return (
    <>
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
    </>
  );
}
