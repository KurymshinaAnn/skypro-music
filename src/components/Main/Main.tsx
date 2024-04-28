"use client"
import styles from "./Main.module.css";
import { useState } from "react";

import Nav from "@/components/Nav/Nav";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";

export default function Main() {
  const [track, setTrack] = useState<trackType | null>(null);

  return (
    <>
      <main className={styles.main}>
        <Nav></Nav>
        <Centar setTrack={setTrack}></Centar>
        <MaineSideBar></MaineSideBar>
      </main>
    </>
  );
}
