// import Image from "next/image";
// import classNames from "classnames";
import styles from "./Wrapper.module.css";

import Bar from "@/components/Bar/Bar";
import Main from "@/components/Main/Main";

export default function Wrapper() {
  return (
    <>
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Main></Main>
        <Bar></Bar>
        <footer className={styles.footer}></footer>
      </div>
    </div>
    </>
  );
}