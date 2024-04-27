import styles from "./Centar.module.css";

import Search from "../Search/Search";
import Filter from "@/components/Filter/Filter";
import PlayListBlock from "../PlayListSection/PlayListSection";

export default function Centar() {
  return (
    <>
      <div className={styles.mainCenterblock}>
        <Search></Search>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter></Filter>
        <PlayListBlock></PlayListBlock>
      </div>
    </>
  );
}
