import Image from "next/image";
import styles from "./Logo.module.css";

export default function Logo() {
  return (
    <>
      <div className={styles.navLogo}>
        <Image
          className={styles.logoImage}
          src="/img/logo.png"
          alt="logo_img"
          width={114}
          height={17}
        />
      </div>
    </>
  );
}
