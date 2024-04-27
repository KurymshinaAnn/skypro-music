import styles from "./PlayListBlock.module.css";

import PlaylistTitle from "../PlayListTitle/PlayListTitle";
import PlayListSection from "../PlayListSection/PlayListSection";

export default function PlayListBlock() {
    return (
    <>
      <div className={styles.centerblockContent}>
        <PlaylistTitle></PlaylistTitle>
        <PlayListSection></PlayListSection>
      </div>
    </>
  );
}

