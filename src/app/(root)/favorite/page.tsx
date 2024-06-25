"use client";

import Centar from "@/components/Centar/Centar";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { setPlayList } from "@/store/features/playlistSlice";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function FavoritePage() {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const isAuthorized = useAppSelector(
    (state) => state.playlist.user.access != null
  );
  const { favoritePlaylist } = useAppSelector((state) => {
    return { favoritePlaylist: state.playlist.favoritePlaylist };
  });

  useEffect(() => {
    if (isAuthorized) {
      dispatch(setPlayList(favoritePlaylist));
    } else {
      router.push("/signin");
    }
  }, [dispatch, router, isAuthorized, favoritePlaylist]);

  return <Centar title="Мои треки" isFiltered={false} />;
}
