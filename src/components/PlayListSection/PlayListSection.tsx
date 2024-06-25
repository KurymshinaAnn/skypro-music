import { trackType } from "@/types";
import styles from "./PlayListSection.module.css";

import PlayListItem from "@/components/PlayListItem/PlayListItem";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { useRouter } from "next/navigation";
import { addToFavorite, removeFromFavorite } from "@/api/tracks";
import { addFavorite, removeFavorite } from "@/store/features/playlistSlice";

type PlayListSectionType = {
  trackList: trackType[];
  setTrack: (param: trackType) => void;
};

function PlayListSection({ trackList, setTrack }: PlayListSectionType) {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const [access, refresh] = useAppSelector((state) => [
    state.playlist.user.access,
    state.playlist.user.refresh,
  ]);
  const favoriteTracks = useAppSelector(
    (state) => state.playlist.favoritePlaylist
  );

  const isFavorite = (track: trackType) => {
    return (
      favoriteTracks.find((favoriteTrack) => track.id === favoriteTrack.id) !=
      undefined
    );
  };

  const onFavoriteClick = (track: trackType) => {
    if (access == null || refresh == null) {
      router.push("/signin");
      return;
    }

    if (isFavorite(track)) {
      removeFromFavorite({ access, refresh, track_id: track.id }).then(
        (isSuccess) => {
          if (!isSuccess) {
            router.push("/signin");
          } else {
            dispatch(removeFavorite(track));
          }
        }
      );
    } else {
      addToFavorite({ access, refresh, track_id: track.id }).then(
        (isSuccess) => {
          if (!isSuccess) {
            router.push("/signin");
          } else {
            dispatch(addFavorite(track));
          }
        }
      );
    }
  };

  return (
    <div className={styles.contentPlaylist}>
      {trackList.map((track) => (
        <PlayListItem
          key={track.id}
          item={track}
          playList={trackList}
          isFavorite={isFavorite(track)}
          onFavoriteClick={(ev) => {
            ev.preventDefault();
            ev.stopPropagation();
            onFavoriteClick(track);
          }}
          onClick={() => setTrack(track)}
        ></PlayListItem>
      ))}
    </div>
  );
}
export default PlayListSection;
