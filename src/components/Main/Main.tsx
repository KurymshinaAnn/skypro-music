"use client";
import styles from "./Main.module.css";
import { useState } from "react";

import Nav from "@/components/Nav/Nav";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";

type MainkType = {
  setTrack: (param: trackType) => void;
};

export default function Main({ setTrack }: MainkType) {
  return (
    <main className={styles.main}>
      <Nav></Nav>
      <Centar setTrack={setTrack}></Centar>
      <MaineSideBar></MaineSideBar>
    </main>
  );
}
