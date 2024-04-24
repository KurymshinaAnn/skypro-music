import Image from "next/image";
import classNames from "classnames";

import styles from "./MaineSideBar.module.css";

export default function MaineSideBar() {
  return (
    <>
      <div className={styles.mainSidebar}>
        <div className={styles.sidebarPersonal}>
          <p className={styles.sidebarPersonalName}>Sergey.Ivanov</p>
          <div className={styles.sidebarIcon}>
            <svg>
              <use href="img/icon/sprite.svg#logout"></use>
            </svg>
          </div>
        </div>
        <div className={styles.sidebarBlock}>
          <div className={styles.sidebarList}>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="img/playlist01.png"
                  alt="day's playlist"
                  height={12}
                  width={12}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="img/playlist02.png"
                  alt="day's playlist"
                  height={12}
                  width={12}
                />
              </a>
            </div>
            <div className={styles.sidebarItem}>
              <a className={styles.sidebarLink} href="#">
                <Image
                  className={styles.sidebarImg}
                  src="img/playlist03.png"
                  alt="day's playlist"
                  height={12}
                  width={12}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}