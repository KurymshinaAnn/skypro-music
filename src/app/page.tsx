"use client";

import { getTracks } from "@/api/tracks";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";
import { useAppDispatch } from "@/hooks";
import { setPlayList } from "@/store/features/playlistSlice";
import { useEffect } from "react";

export default function Home() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    getTracks()
      .then((tracks) => dispatch(setPlayList(tracks)))
      .catch((e) =>
        console.error("Произошла ошибка при получении списка треков:", e)
      );
  }, [dispatch]);

  return (
    <>
      <Centar title="Треки" isFiltered={true}></Centar>
      <MaineSideBar></MaineSideBar>
    </>
  );
}
