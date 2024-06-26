"use client";

import { getFavoriteTracks, getTracks } from "@/api/tracks";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";
import { useAppDispatch, useAppSelector } from "@/hooks";
import {
  setFavoritePlaylist,
  setPlayList,
} from "@/store/features/playlistSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();
  const { access, refresh } = useAppSelector((state) => {
    return {
      access: state.playlist.user.access,
      refresh: state.playlist.user.refresh,
    };
  });

  useEffect(() => {
    const tracks = getTracks();
    const favorite =
      access != null && refresh != null
        ? getFavoriteTracks({ access, refresh })
        : Promise.resolve([]);
    Promise.all([tracks, favorite]).then((results) => {
      dispatch(setPlayList(results[0]));
      dispatch(setFavoritePlaylist(results[1]));
    });
    getTracks()
      .then((tracks) => dispatch(setPlayList(tracks)))
      .catch((e) =>
        console.error("Произошла ошибка при получении списка треков:", e)
      );
  }, [dispatch, access, refresh]);

  return (
    <>
      <Centar title="Треки" isFiltered={true}></Centar>
      <MaineSideBar></MaineSideBar>
    </>
  );
}
