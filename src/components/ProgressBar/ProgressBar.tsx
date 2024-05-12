// import { ChangeEventHandler } from "react";
import styles from "./ProgressBar.module.css";

type ProgressBarType = {
  max: number | undefined;
  step: number;
  value: number | undefined;
  onChange: (value: any) => void;
  //   onChange: ChangeEventHandler;
};

export default function ProgressBar({
  max,
  value,
  step,
  onChange,
}: ProgressBarType) {
  const handleChange = (e: any) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  return (
    <input
      className={styles.styledProgressInput}
      type="range"
      min="0"
      max={max}
      value={value}
      step={step}
      onChange={handleChange}
    />
  );
}
