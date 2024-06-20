"use client";
import styles from "./Filter.module.css";
import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { trackType } from "@/types";
import { setActiveFilter } from "@/store/features/playlistSlice";
import { getListItem } from "@/utilities/getListItems";

type PlayListBlockType = {
  trackList: trackType[];
};

export default function Filter({ trackList }: PlayListBlockType) {
  const playList = useAppSelector((state) => state.playlist.playList);

  const authors = getListItem("author", playList);
  const years: string[] = [];
  const genres = getListItem("genre", playList);

  const selectedAuthors = useAppSelector(
    (state) => state.playlist.activeFilters.authors
  );
  const selectedGenres = useAppSelector(
    (state) => state.playlist.activeFilters.genres
  );
  const dispatch = useAppDispatch();

  const [isActiveFilter, setIsActiveFilter] = useState<string | null>(null);

  const toggleSelectedAuthors = (author: string) => {
    dispatch(
      setActiveFilter({
        authors: selectedAuthors.includes(author)
          ? selectedAuthors.filter((item) => item !== author)
          : [...selectedAuthors, author],
      })
    );
  };

  const toggleSelectedGenres = (genre: string) => {
    dispatch(
      setActiveFilter({
        genres: selectedGenres.includes(genre)
          ? selectedGenres.filter((item) => item !== genre)
          : [...selectedGenres, genre],
      })
    );
  };

  function handleFilterClick(newFilter: string) {
    setIsActiveFilter((prev) => (newFilter === prev ? null : newFilter));
  }

  return (
    <div className={styles.centerblockFilter}>
      <div className={styles.filterTitle}>Искать по:</div>
      <FilterButton
        onClick={() => handleFilterClick("authors")}
        isOpened={isActiveFilter === "authors"}
        list={authors}
        selectedItems={selectedAuthors}
        onItemSelected={toggleSelectedAuthors}
      >
        исполнителю
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterClick("years")}
        isOpened={isActiveFilter === "years"}
        list={years}
        selectedItems={[]}
        onItemSelected={() => {}}
      >
        году выпуска
      </FilterButton>
      <FilterButton
        onClick={() => handleFilterClick("genres")}
        isOpened={isActiveFilter === "genres"}
        list={genres}
        selectedItems={selectedGenres}
        onItemSelected={toggleSelectedGenres}
      >
        жанру
      </FilterButton>
    </div>
  );
}
