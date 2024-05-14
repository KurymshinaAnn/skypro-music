import styles from "./Centar.module.css";
import { useEffect, useState } from "react";

import Search from "../Search/Search";
import Filter from "@/components/Filter/Filter";
import PlayListBlock from "../PlayListBlock/PlayListBlock";
import { getTracks } from "@/api/tracks";
import { trackType } from "@/types";

type CenterBlockType = {
  setTrack: (param: trackType) => void;
};

export default function Centar({ setTrack }: CenterBlockType) {
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    getTracks()
      .then((data) => setTrackList(data))
      .catch((e) =>
        console.error("Произошла ошибка при получении списка треков:", e)
      );
  }, []);

  return (
    <div className={styles.mainCenterblock}>
      <Search></Search>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter></Filter>
      <PlayListBlock trackList={trackList} setTrack={setTrack}></PlayListBlock>
    </div>
  );
}
