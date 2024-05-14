import { trackType } from "@/types";
import styles from "./PlayListSection.module.css";

import PlayListItem from "@/components/PlayListItem/PlayListItem";

type PlayListSectionType = {
  trackList: trackType[];
  setTrack: (param: trackType) => void;
};

function PlayListSection({ trackList, setTrack }: PlayListSectionType) {
  return (
    <div className={styles.contentPlaylist}>
      {trackList.map((track) => (
        <PlayListItem
          key={track.id}
          item={track}
          playList={trackList}
          onClick={() => setTrack(track)}
        ></PlayListItem>
      ))}
    </div>
  );
}
export default PlayListSection;
