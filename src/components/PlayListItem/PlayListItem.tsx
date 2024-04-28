import styles from "./PlayListItem.module.css";

type PlayListItemType = {
  name: string;
  time: number;
  author: string;
  album: string;
  setTrack: () => void;
}

export default function PlayListItem({ 
  name,
  time,
  author,
  album,
  setTrack,
 }: PlayListItemType) {

  let minutes = Math.floor(time / 60);
  let seconds = (time % 60).toString().padStart(2, "0");

  return (
    <>
      <div className={styles.playlistItem}>
        <div onClick={setTrack} className={styles.playlistTrack}>
          <div className={styles.trackTitle}>
            <div className={styles.trackTitleImage}>
              <svg className={styles.trackTitleSvg}>
                <use href="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            </div>
            <div className={styles.trackTitleText /*net klassa*/ }>
              <a className={styles.trackTitleLink} href="http://">
                {name}
              </a>
            </div>
          </div>
          <div className={styles.trackAuthor}>
            <a className={styles.trackAuthorLink} href="http://">
              {author}
            </a>
          </div>
          <div className={styles.trackAlbum}>
            <a className={styles.trackAlbumLink} href="http://">
              {album}
            </a>
          </div>
          <div className={styles.trackTime}>
            <svg className={styles.trackTimeSvg}>
              <use href="/img/icon/sprite.svg#icon-like"></use>
            </svg>
            <span className={styles.trackTimeText}>{`${minutes}:${seconds}`}</span>
          </div>
        </div>
      </div>
    </>
  );
}
