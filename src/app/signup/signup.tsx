import Image from "next/image";
import classNames from "classnames";

import styles from "./Signup.module.css";
import Link from "next/link";

export default function Signup() {
  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.containerSignup}>
          <div className={styles.modalBlock}>
            <form className={styles.modalFormLogin}>
              <a href="../">
                <div className={styles.modal__logo}>
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
                className={classNames(styles.modalInput, styles.passwordFirst)}
                type="password"
                name="password"
                placeholder="Пароль"
              />
              <input
                className={classNames(styles.modalInput, styles.passwordDouble)}
                type="password"
                name="password"
                placeholder="Повторите пароль"
              />
              <button className={styles.modalBtnSignupEnt}>
                <Link href="/">Зарегистрироваться</Link>
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
