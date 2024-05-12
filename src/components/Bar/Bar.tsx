import classNames from "classnames";
import styles from "./Bar.module.css";

import { useEffect, useRef, useState } from "react";

import BarVolume from "@/components/BarVolume/BarVolume";
import ProgressBar from "../ProgressBar/ProgressBar";

type BarType = {
  track: trackType | null;
};

export default function Bar({ track }: BarType) {
  const audioRef = useRef<null | HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooped, setIsLooped] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const duration = audioRef.current?.duration || 0;

  const [volume, setVolume] = useState(50);

  const formatTime = (time: number | undefined) => {
    if (time && !isNaN(time)) {
      const minutes = Math.floor(time / 60);
      const formatMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
      const seconds = Math.floor(time % 60);
      const formatSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
      return `${formatMinutes}:${formatSeconds}`;
    }
    return "00:00";
  };

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = volume / 100;
    }
  }, [volume, audioRef]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying((prev) => !prev);
    }
  };

  const progressTrack = (value: any) => {
    setCurrentTime(value);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
  };

  const handleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooped;
      setIsLooped((prev) => !prev);
    }
  };

  return (
    <>
      <div className={styles.bar}>
        <div className={styles.barContent}>
          <audio
            ref={audioRef}
            src={track?.track_file}
            onTimeUpdate={(e) => setCurrentTime(e.currentTarget.currentTime)}
          ></audio>
          <ProgressBar
            value={currentTime}
            max={duration}
            step={0.01}
            onChange={progressTrack}
          ></ProgressBar>
          {/* <div className={styles.barPlayerProgress}>
            {track && `${formatTime(currentTime)} / ${formatTime(duration)}`}
          </div> */}
          <div className={styles.barPlayerBlock}>
            <div className={styles.barPlayer}>
              <div className={styles.playerControls}>
                <div
                  className={classNames(styles.playerBtnPrev, styles.playerBtn)}
                >
                  <svg
                    className={styles.playerBtnPrevSvg}
                    onClick={() => alert("Еще не реализовано")}
                  >
                    <use href="/img/icon/sprite.svg#icon-prev"></use>
                  </svg>
                </div>
                <div
                  onClick={togglePlay}
                  className={classNames(
                    styles.playerBtnPlay,
                    styles.playerBtn,
                    styles._btn
                  )}
                >
                  <svg className={styles.playerBtnPlaySvg}>
                    {isPlaying ? (
                      <use href="/img/icon/sprite.svg#icon-pause"></use>
                    ) : (
                      <use href="/img/icon/sprite.svg#icon-play"></use>
                    )}
                  </svg>
                </div>
                <div
                  className={classNames(styles.playerBtnNext, styles.playerBtn)}
                >
                  <svg
                    className={styles.playerBtnNextSvg}
                    onClick={() => alert("Еще не реализовано")}
                  >
                    <use href="/img/icon/sprite.svg#icon-next"></use>
                  </svg>
                </div>
                <div
                  onClick={handleLoop}
                  className={classNames(
                    styles.playerBtnRepeat,
                    styles.playerBtn,
                    styles._btnIcon
                  )}
                >
                  <svg className={styles.playerBtnRepeatSvg}>
                    {isLooped ? (
                      <use href="/img/icon/sprite.svg#icon-repeatOn"></use>
                    ) : (
                      <use href="/img/icon/sprite.svg#icon-repeat"></use>
                    )}
                  </svg>
                </div>
                <div
                  className={classNames(
                    styles.playerBtnShuffle,
                    styles.playerBtn,
                    styles._btnIcon
                  )}
                >
                  <svg
                    className={styles.playerBtnShuffleSvg}
                    onClick={() => alert("Еще не реализовано")}
                  >
                    <use href="/img/icon/sprite.svg#icon-shuffle"></use>
                  </svg>
                </div>
              </div>

              <div className={styles.playerTrackPlay}>
                <div className={styles.trackPlayContain}>
                  <div className={styles.trackPlayImage}>
                    <svg className={styles.trackPlaySvg}>
                      <use href="/img/icon/sprite.svg#icon-note"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlayAuthor,
                      styles.trackPlayAuthorLink
                    )}
                  >
                    {track?.name}
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlayAlbum,
                      styles.trackPlayAlbumLink
                    )}
                  >
                    {track?.author}
                  </div>
                </div>

                <div className={styles.trackPlayLikeDis}>
                  <div
                    className={classNames(
                      styles.trackPlayLike,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlayLikeSvg}>
                      <use href="/img/icon/sprite.svg#icon-like"></use>
                    </svg>
                  </div>
                  <div
                    className={classNames(
                      styles.trackPlayDislike,
                      styles._btnIcon
                    )}
                  >
                    <svg className={styles.trackPlayDislikeSvg}>
                      <use href="/img/icon/sprite.svg#icon-dislike"></use>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.barPlayerProgress}>
              {track && `${formatTime(currentTime)} / ${formatTime(duration)}`}
            </div>
            <BarVolume
              volume={volume}
              onVolumeChange={(e) => setVolume(e.target.value)}
            ></BarVolume>
          </div>
        </div>
      </div>
    </>
  );
}
