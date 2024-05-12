"use client";
import styles from "./Wrapper.module.css";

import { useState } from "react";

import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";

export default function Wrapper() {
  const [track, setTrack] = useState<trackType | null>(null);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main setTrack={setTrack}></Main>
        <Bar track={track}></Bar>
        <footer className={styles.footer}></footer>
      </div>
    </div>
  );
}