import styles from "./PlayListBlock.module.css";

import PlaylistTitle from "../PlayListTitle/PlayListTitle";
import PlayListSection from "../PlayListSection/PlayListSection";
import { trackType } from "@/types";

type PlayListBlockType = {
  trackList: trackType[];
  setTrack: (param: trackType) => void;
};

export default function npmPlayListBlock({
  trackList,
  setTrack,
}: PlayListBlockType) {
  return (
      <div className={styles.centerblockContent}>
        <PlaylistTitle></PlaylistTitle>
        <PlayListSection
          trackList={trackList}
          setTrack={setTrack}
        ></PlayListSection>
      </div>
  );
}
