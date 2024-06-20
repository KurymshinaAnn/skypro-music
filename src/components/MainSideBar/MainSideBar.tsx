"use client";

import Image from "next/image";
import styles from "./MainSideBar.module.css";

import { useRouter } from "next/navigation";

export default function MaineSideBar() {
  const router = useRouter();

  return (
    <div className={styles.mainSidebar}>
      <div className={styles.sidebarBlock}>
        <div className={styles.sidebarList}>
          <div className={styles.sidebarItem}>
            <Image
              height={150}
              width={250}
              className={styles.sidebarImg}
              src="/img/playlist01.png"
              alt="day's playlist"
              onClick={() => {
                router.push("/pick/1");
              }}
            />
          </div>
          <div className={styles.sidebarItem}>
            <Image
              height={150}
              width={250}
              className={styles.sidebarImg}
              src="/img/playlist02.png"
              alt="day's playlist"
              onClick={() => {
                router.push("/pick/2");
              }}
            />
          </div>
          <div className={styles.sidebarItem}>
            <Image
              height={150}
              width={250}
              className={styles.sidebarImg}
              src="/img/playlist03.png"
              alt="day's playlist"
              onClick={() => {
                router.push("/pick/3");
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
