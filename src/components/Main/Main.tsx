"use client";
import styles from "./Main.module.css";
import { useState } from "react";

import Nav from "@/components/Nav/Nav";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";
import { trackType } from "@/types";

type MainType = {
  setTrack: (param: trackType) => void;
};

export default function Main({ setTrack }: MainType) {
  return (
    <main className={styles.main}>
      <Nav></Nav>
      <Centar setTrack={setTrack}></Centar>
      <MaineSideBar></MaineSideBar>
    </main>
  );
}
