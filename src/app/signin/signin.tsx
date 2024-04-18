import Image from "next/image";
import classNames from "classnames";

import styles from "./Signin.module.css";
import Link from "next/link";

export default function Signin() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.containerEnter}>
          <div className={styles.modalBlock}>
            <form className={styles.modalFormLogin} action="#">
              <a href="../">
                <div className={styles.modalLogo}>
                  <Image 
                  src="../img/logo_modal.png" 
                  alt="logo" 
                  height={12}
                  width={12}
                  />
                </div>
              </a>
              <input
                className={classNames(styles.modalInput, styles.login)}
                type="text"
                name="login"
                placeholder="Почта"
              />
              <input
                className={classNames(styles.modalInput, styles.password)}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <button className={styles.modalBtnEnter}>
                <Link href="/">Войти</Link>
              </button>
              <button className={styles.modalBtnSignup}>
                <Link href="/signup">Зарегистрироваться</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
