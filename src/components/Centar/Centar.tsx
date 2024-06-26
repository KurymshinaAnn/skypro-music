"use client";

import styles from "./Centar.module.css";

import Filter from "@/components/Filter/Filter";
import PlayListBlock from "../PlayListBlock/PlayListBlock";
import { trackType } from "@/types";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setCurrentTrack } from "@/store/features/playlistSlice";

type CenterBlockType = {
  title: string;
  isFiltered: boolean;
};

export default function Centar({ title, isFiltered }: CenterBlockType) {
  const dispatch = useAppDispatch();

  const playList = useAppSelector((state) => state.playlist.filteredPlaylist);
  const setTrack = (track: trackType) => {
    dispatch(setCurrentTrack({ currentTrack: track, playList }));
  };

  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>{title}</h2>
      {isFiltered ? <Filter trackList={playList}></Filter> : null}
      <PlayListBlock trackList={playList} setTrack={setTrack}></PlayListBlock>
    </div>
  );
}
