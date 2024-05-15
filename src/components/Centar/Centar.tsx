import styles from "./Centar.module.css";
import { useEffect, useState } from "react";

import Search from "../Search/Search";
import Filter from "@/components/Filter/Filter";
import PlayListBlock from "../PlayListBlock/PlayListBlock";
import { getTracks } from "@/api/tracks";
import { trackType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPlayList } from "@/store/features/playlistSlice";

type CenterBlockType = {
  setTrack: (param: trackType) => void;
};

export default function Centar({ setTrack }: CenterBlockType) {
const playList = useAppSelector((state) => state.playlist.filteredPlaylist);
const dispatch = useAppDispatch();

  useEffect(() => {
    getTracks()
      .then((tracks) => dispatch(setPlayList(tracks)))
      .catch((e) =>
        console.error("Произошла ошибка при получении списка треков:", e)
      );
  }, [dispatch]);

  return (
    <div className={styles.mainCenterblock}>
      <Search></Search>
      <h2 className={styles.centerblockH2}>Треки</h2>
      <Filter trackList={playList}></Filter>
      <PlayListBlock trackList={playList} setTrack={setTrack}></PlayListBlock>
    </div>
  );
}
