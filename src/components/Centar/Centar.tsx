// import Image from "next/image";
import classNames from "classnames";
import styles from "./Centar.module.css";

import Filter from "@/components/Filter/Filter";
import PlayListItem from "@/components/PlayListItem/PlayListItem";

export default function Centar() {
  return (
    <>
      <div className={styles.mainCenterblock}>
        <div className={styles.centerblockSearch}>
          <svg className={styles.searchSvg}>
            <use href="img/icon/sprite.svg#icon-search"></use>
          </svg>
          <input
            className={styles.searchText}
            type="search"
            placeholder="Поиск"
            name="search"
          />
        </div>
        <h2 className={styles.centerblockH2}>Треки</h2>
        <Filter></Filter>
        <div className={styles.centerblockContent}>
          <div className={styles.contentTitle}>
            <div
              className={classNames(styles.playlistTitleCol, styles.col01)}
            >
              Трек
            </div>
            <div
              className={classNames(styles.playlistTitleCol, styles.col02)}
            >
              Исполнитель
            </div>
            <div
              className={classNames(styles.playlistTitleCol, styles.col03)}
            >
              Альбом
            </div>
            <div
              className={classNames(styles.playlistTitleCol, styles.col04)}
            >
              <svg className={styles.playlistTitleSvg}>
                <use href="img/icon/sprite.svg#icon-watch"></use>
              </svg>
            </div>
          </div>
          <div
            className={styles.contentPlaylist}
          >
            <PlayListItem></PlayListItem>

            {/* <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Elektro <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Dynoro, Outwork, Mr. Gee
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Elektro
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>2:22</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      I’m Fire{" "}
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Ali Bakgor
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    I’m Fire
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>2:22</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Non Stop
                      <span className={styles.track__title_span}>(Remix)</span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Стоункат, Psychopath
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Non Stop
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>4:12</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Run Run
                      <span className={styles.track__title_span}>
                        (feat. AR/CO)
                      </span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Jaded, Will Clarke, AR/CO
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Run Run
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>2:54</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Eyes on Fire
                      <span className={styles.track__title_span}>
                        (Zeds Dead Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Blue Foundation, Zeds Dead
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Eyes on Fire
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>5:20</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Mucho Bien
                      <span className={styles.track__title_span}>
                        (Hi Profile Remix)
                      </span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    HYBIT, Mr. Black, Offer Nissim, Hi Profile
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Mucho Bien
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>3:41</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Knives n Cherries
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    minthaze
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Captivating
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>1:48</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      How Deep Is Your Love
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Calvin Harris, Disciples
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    How Deep Is Your Love
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>3:32</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      Morena <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://">
                    Tom Boxer
                  </a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://">
                    Soundz Made in Romania
                  </a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}>3:36</span>
                </div>
              </div>
            </div>
            <div className={styles.playlist__item}>
              <div className={classNames(styles.playlist__track, styles.track)}>
                <div className={styles.track__title}>
                  <div className={styles.track__title_image}>
                    <svg className={styles.track__title_svg}>
                      <use href="img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div className={styles.track__title_text}>
                    <a className={styles.track__title_link} href="http://">
                      <span className={styles.track__title_span}></span>
                    </a>
                  </div>
                </div>
                <div className={styles.track__author}>
                  <a className={styles.track__author_link} href="http://"></a>
                </div>
                <div className={styles.track__album}>
                  <a className={styles.track__album_link} href="http://"></a>
                </div>
                <div className={styles.track__time}>
                  <svg className={styles.track__time_svg}>
                    <use href="img/icon/sprite.svg#icon-like"></use>
                  </svg>
                  <span className={styles.track__time_text}></span>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}
