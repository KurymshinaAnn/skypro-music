"use client";
import styles from "./Filter.module.css";
import { useState } from "react";
import FilterButton from "../FilterButton/FilterButton";
import { authors, genres, years } from "../FilterButton/data";

export default function Filter() {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  function handleFilterClick(newFilter: string) {
    setActiveFilter((prev) => newFilter === prev ? null : newFilter);
  }

  return (
    <>
      <div className={styles.centerblockFilter}>
        <div className={styles.filterTitle}>Искать по:</div>
        <FilterButton
          onClick={() => handleFilterClick("authors")}
          isOpened={activeFilter === "authors"}
          list={authors}
        >
          исполнителю
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterClick("years")}
          isOpened={activeFilter === "years"}
          list={years}
        >
          году выпуска
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterClick("genres")}
          isOpened={activeFilter === "genres"}
          list={genres}
        >
          жанру
        </FilterButton>
      </div>
    </>
  );
}
