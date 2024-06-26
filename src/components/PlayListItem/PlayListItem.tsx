import { useAppDispatch, useAppSelector } from "@/hooks";
import styles from "./PlayListItem.module.css";
import { setCurrentTrack } from "@/store/features/playlistSlice";
import { trackType } from "@/types";

type PlayListItemType = {
  item: trackType;
  onClick: () => void;
  playList: trackType[];
  isFavorite: boolean;
  onFavoriteClick: (ev: React.MouseEvent) => void;
};

export default function PlayListItem({
  item,
  onClick,
  playList,
  isFavorite,
  onFavoriteClick,
}: PlayListItemType) {
  const track = useAppSelector((store) => store.playlist.currentTrack);
  const dispatch = useAppDispatch();

  function handleClick() {
    onClick();
    dispatch(setCurrentTrack({ currentTrack: item, playList }));
  }

  let minutes = Math.floor(item.duration_in_seconds / 60);
  let seconds = (item.duration_in_seconds % 60).toString().padStart(2, "0");

  return (
    <div className={styles.playlistItem}>
      <div onClick={handleClick} className={styles.playlistTrack}>
        <div className={styles.trackTitle}>
          <div className={styles.trackTitleImage}>
            {track?.id === item.id ? (
              <div className={styles.trackPulsate}></div>
            ) : (
              <svg className={styles.trackTitleSvg}>
                <use href="/img/icon/sprite.svg#icon-note"></use>
              </svg>
            )}
          </div>
          <div className={styles.trackTitle /*net klassa*/}>
            <span className={styles.trackTitleLink}>{item.name}</span>
          </div>
        </div>
        <div className={styles.trackAuthor}>
          <span className={styles.trackAuthorLink}>{item.author}</span>
        </div>
        <div className={styles.trackAlbum}>
          <span className={styles.trackAlbumLink}>{item.album}</span>
        </div>
        <div className={styles.trackTime}>
          <svg
            onClick={onFavoriteClick}
            className={
              isFavorite ? styles.trackTimeSvgActive : styles.trackTimeSvg
            }
          >
            <use href="/img/icon/sprite.svg#icon-like"></use>
          </svg>
          <span
            className={styles.trackTimeText}
          >{`${minutes}:${seconds}`}</span>
        </div>
      </div>
    </div>
  );
}
