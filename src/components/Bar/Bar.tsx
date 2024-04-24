// import Image from "next/image";
import classNames from "classnames";

import styles from "./Bar.module.css";
import BarVolume from "../BarVolume/BarVolume";

export default function Bar() {
    return (
        <div className={styles.bar}>
            {/* нужно переписать все стили через кеймелкейс типо barContent */}
          <div className={styles.barContent}>
            <div className={styles.barPlayerProgress}></div>
            <div className={styles.barPlayerBlock}>
              <div className={styles.barPlayer}>
                <div className={styles.playerControls}>
                  <div className={classNames(styles.playerBtnPrev, styles.playerBtn)}>
                    <svg className={styles.playerBtnPrevSvg}>
                      <use href="img/icon/sprite.svg#icon-prev"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.playerBtnPlay, styles.playerBtn, styles._btn)}>
                    <svg className={styles.playerBtnPlaySvg}>
                      <use href="img/icon/sprite.svg#icon-play"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.playerBtnNext, styles.playerBtn)}>
                    <svg className={styles.playerBtnNextSvg}>
                      <use href="img/icon/sprite.svg#icon-next"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.playerBtnRepeat, styles.playerBtn, styles._btn_icon)}>
                    <svg className={styles.playerBtnRepeatSvg}>
                      <use href="img/icon/sprite.svg#icon-repeat"></use>
                    </svg>
                  </div>
                  <div className={classNames(styles.playerBtnShuffle, styles.playerBtn, styles._btn_icon)}>
                    <svg className={styles.playerBtnShuffleSvg}>
                      <use href="img/icon/sprite.svg#icon-shuffle"></use>
                    </svg>
                  </div>
                </div> 

                <div className={styles.playerTrackPlay}>
                  <div className={styles.trackPlayContain}>
                    <div className={styles.trackPlayImage}>
                      <svg className={styles.trackPlaySvg}>
                        <use href="img/icon/sprite.svg#icon-note"></use>
                      </svg>
                    </div>
                    <div className={styles.trackPlayAuthor}>
                      <a className={styles.trackPlayAuthorLink} href="http://">
                        Ты та...
                      </a>
                    </div>
                    <div className={styles.trackPlayAlbum}>
                      <a className={styles.trackPlayAlbumLink} href="http://">
                        Баста
                      </a>
                    </div>
                  </div>

                  <div className={styles.trackPlayLikeDis}>
                    <div className={classNames(styles.trackPlayLike, styles._btn_icon)}>
                      <svg className={styles.trackPlayLikeSvg}>
                        <use href="img/icon/sprite.svg#icon-like"></use>
                      </svg>
                    </div>
                    <div className={classNames(styles.trackPlayDislike, styles._btn_icon)}>
                      <svg className={styles.trackPlayDislikeSvg}>
                        <use href="img/icon/sprite.svg#icon-dislike"></use>
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <BarVolume></BarVolume>
            </div>
          </div>
        </div>
    )
}