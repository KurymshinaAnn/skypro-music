import classNames from "classnames";
import styles from "./BarVolume.module.css";
import { useRef } from "react";

type BarVolumeType = {
  volume: number | undefined;
  onVolumeChange: (ev: any) => void;
};

export default function BarVolume({ volume, onVolumeChange }: BarVolumeType) {
  const volumeRangeRef = useRef<null | HTMLInputElement>(null);

  const onProgressBarChange = (ev: any) => {
    if (volumeRangeRef.current) {
      volumeRangeRef.current.style.setProperty(
        "--progress-value",
        `${volumeRangeRef.current.value}%`
      );
    }
    onVolumeChange(ev);
  };
  return (
    <div className={styles.barVolumeBlock}>
      <div className={styles.volumeContent}>
        <div className={styles.volumeImage}>
          <svg className={styles.volumeSvg}>
            <use href="/img/icon/sprite.svg#icon-volume"></use>
          </svg>
        </div>
        <div className={classNames(styles.volumeProgress, styles._btn)}>
          <input
            className={classNames(styles.volumeProgressLine, styles._btn)}
            type="range"
            name="range"
            ref={volumeRangeRef}
            min={0}
            max={100}
            value={volume}
            onChange={onProgressBarChange}
          />
        </div>
      </div>
    </div>
  );
}
