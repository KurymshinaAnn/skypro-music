"use client";

import Image from "next/image";
import classNames from "classnames";

import styles from "./Signup.module.css";
import { useState } from "react";
import { register } from "@/api/login";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setRepeatPassword] = useState("");

  const doRegister = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    register({
      email,
      password,
      username: email,
    }).then((data) => {
      console.log(data);
    });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.containerSignup}>
        <div className={styles.modalBlock}>
          <form className={styles.modalFormLogin}>
            <a href="../">
              <div className={styles.modal__logo}>
                <Image
                  src="/img/logo.png"
                  alt="logo_img"
                  width={114}
                  height={17}
                />
              </div>
            </a>
            <div>
              <input
                className={classNames(styles.modalInput, styles.login)}
                type="text"
                name="login"
                placeholder="Почта"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className={classNames(styles.modalInput, styles.passwordFirst)}
                type="password"
                name="password"
                placeholder="Пароль"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <input
                className={classNames(styles.modalInput, styles.passwordDouble)}
                type="password"
                name="repeat-password"
                placeholder="Повторите пароль"
                value={repeatPassword}
                onChange={(e) => setRepeatPassword(e.target.value)}
              />
              <button className={styles.modalBtnSignupEnt} onClick={doRegister}>
                Зарегистрироваться
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
