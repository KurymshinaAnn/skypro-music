import styles from "./Main.module.css";

import Nav from "@/components/Nav/Nav";
import Centar from "@/components/Centar/Centar";
import MaineSideBar from "@/components/MainSideBar/MainSideBar";

export default function Main() {
  return (
    <>
      <main className={styles.main}>
        <Nav></Nav>
        <Centar></Centar>
        <MaineSideBar></MaineSideBar>
      </main>
    </>
  );
}
