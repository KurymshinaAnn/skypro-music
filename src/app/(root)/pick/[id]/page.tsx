"use client";

import { getSelections } from "@/api/tracks";
import Centar from "@/components/Centar/Centar";
import { useAppDispatch } from "@/hooks";
import { setPlayList } from "@/store/features/playlistSlice";
import { useEffect, useState } from "react";

export default function PickPage({
  params: { id },
}: {
  params: { id: number };
}) {
  const dispatch = useAppDispatch();
  const [name, setName] = useState("");

  useEffect(() => {
    getSelections({ id })
      .then((selection) => {
        setName(selection.name);
        dispatch(setPlayList(selection.items));
      })
      .catch((e) =>
        console.error("Произошла ошибка при получении списка треков:", e)
      );
  }, [dispatch, id]);

  return <Centar title={name} isFiltered={false} />;
}
