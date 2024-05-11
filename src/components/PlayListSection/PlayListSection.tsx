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
          setTrack={() => setTrack(track)}
          name={track.name}
          author={track.author}
          album={track.album}
          time={track.duration_in_seconds}
        ></PlayListItem>
      ))}
    </div>
  );
}
export default PlayListSection;
