import styles from "./PlayListItem.module.css";

export default function PlayListItem({ item }: { item: trackType }) {
  return (
    <>
      <div className={styles.playlistItem}>
        <div className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use href="img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={styles.trackTitleText}>
              <a className={styles.trackTitleLink} href="http://">
                {item.name}
                <span className={styles.trackTitleSpan}></span>
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {item.author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              {item.album}
            </a>
          </div>
          <div className={styles.trackTime}>
            <svg className={styles.trackTimeSvg}>
              <use href="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={styles.trackTimeText}>{item.duration_in_seconds}</span>
          </div>
        </div>
      </div>
    </>
  );
}
